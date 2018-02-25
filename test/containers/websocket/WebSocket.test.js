import WebSocket from '../../../src/containers/websocket/WebSocket';

beforeEach(async() => {
  await WebSocket.connect();
});

afterEach(function () {
  WebSocket.disconnect();
});

it('connects', () => {
  expect(WebSocket.isConnected()).toEqual(true);
});

it('sends item', () => {
  WebSocket.sendItem({id: '1', shoppingListId: '85299e59-2296-48e6-988b-16cca98e57f2', itemName: 'ping', bought: false});
});

it('receives item', async() => {
  let promise = new Promise(resolve => {
    WebSocket.subscribe(shoppingItem => {
      expect(shoppingItem.bought).toEqual(false);
      resolve(shoppingItem);
    })
  });
  WebSocket.sendItem({id: '1', shoppingListId: '85299e59-2296-48e6-988b-16cca98e57f2', itemName: 'ping', bought: false});
  await promise;
});

it('can respond to received item', async() => {
  WebSocket.subscribe(shoppingItem => {
    if (shoppingItem.itemName === 'ping') {
      WebSocket.sendItem({id: '2', shoppingListId: '85299e59-2296-48e6-988b-16cca98e57f2', itemName: 'pong', bought: false});
    }
  });
  const promise = new Promise(resolve => {
    WebSocket.subscribe(shoppingItem => {
      if (shoppingItem.itemName === 'pong') {
        resolve();
      }
    });
  });
  WebSocket.sendItem({id: '1', shoppingListId: '85299e59-2296-48e6-988b-16cca98e57f2', itemName: 'ping', bought: false});
  await promise;
});
