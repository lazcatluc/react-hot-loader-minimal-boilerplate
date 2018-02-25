const Stomp = require('stomp-websocket-js');
const SockJS = require('sockjs-client');

const WebSocket = {
  connected: false,
  timeout: 30000,
  itemProcessors: []
};

WebSocket.connect = (url, topic, sendEndpoint) => {
  var socket = new SockJS(url||'https://contezi.ro/shopping/list');
  WebSocket.stompClient = Stomp.over(socket);
  WebSocket.sendEndpoint = sendEndpoint||"/ws/item";
  return new Promise((resolve, reject) => {
    WebSocket.stompClient.connect({}, function(frame) {
      console.log('Connected: ' + frame);
      WebSocket.connected = true;
      WebSocket.stompClient.subscribe(topic||'/topic/items/85299e59-2296-48e6-988b-16cca98e57f2', function(message) {
        WebSocket.itemProcessors.map(itemProcessor => {
          itemProcessor(JSON.parse(message.body));
        });
      });
      resolve(frame);
    });
    setTimeout(() => {
      reject("Timeout");
    }, WebSocket.timeout);
  });
};

WebSocket.disconnect = () => {
  if(WebSocket.stompClient != null && WebSocket.isConnected()) {
    WebSocket.stompClient.disconnect();
  }
  WebSocket.connected = false;
  console.log("Disconnected");
};

WebSocket.sendItem = function (shoppingItem) {
  WebSocket.stompClient.send(WebSocket.sendEndpoint, {}, JSON.stringify(shoppingItem));
};

WebSocket.subscribe = (itemProcessor) => WebSocket.itemProcessors.push(itemProcessor);

WebSocket.isConnected = () => WebSocket.connected;

export default WebSocket;
