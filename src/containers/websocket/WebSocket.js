const Stomp = require('stomp-websocket-js');
const SockJS = require('sockjs-client');

export default (url, topic, sendEndpoint) => {
  const ws = {
    connected: false,
    timeout: 30000,
    itemProcessors: [],
    url,
    topic,
    sendEndpoint
  };

  ws.connect = () => {
    var socket = new SockJS(url);
    ws.stompClient = Stomp.over(socket);
    ws.sendEndpoint = sendEndpoint;
    return new Promise((resolve, reject) => {
      ws.stompClient.connect({}, function(frame) {
        ws.connected = true;
        ws.stompClient.subscribe(topic, function(message) {
          ws.itemProcessors.map(itemProcessor => {
            itemProcessor(JSON.parse(message.body));
          });
        });
        resolve(frame);
      });
      setTimeout(() => {
        reject('Timeout');
      }, ws.timeout);
    });
  };

  ws.disconnect = () => {
    if(ws.stompClient != null && ws.isConnected()) {
      ws.stompClient.disconnect();
    }
    ws.connected = false;
  };
  
  ws.sendItem = function (shoppingItem) {
    ws.stompClient.send(ws.sendEndpoint, {}, JSON.stringify(shoppingItem));
  };
  
  ws.subscribe = (itemProcessor) => ws.itemProcessors.push(itemProcessor);
  ws.isConnected = () => ws.connected;
  
  return ws;
};

