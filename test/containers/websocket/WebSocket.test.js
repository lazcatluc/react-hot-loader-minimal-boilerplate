import WebSocket from '../../../src/containers/websocket/WebSocket';

const shoppingListId = "c00af06f-787b-44f0-afb5-81be5875ed45";
let ws;

beforeEach(async() => {
  ws = new WebSocket('https://contezi.ro/shopping/list', '/topic/items/' + shoppingListId, '/ws/item')
  await ws.connect();
});

afterEach(function () {
  ws.disconnect();
});

it('connects', () => {
  expect(ws.isConnected()).toEqual(true);
});

it('sends item', () => {
  ws.sendItem({id: '1', shoppingListId, itemName: 'ping'});
});

it('receives item', async() => {
  let promise = new Promise(resolve => {
    ws.subscribe(shoppingItem => {
      expect(shoppingItem.bought).toEqual(false);
      resolve(shoppingItem);
    })
  });
  ws.sendItem({id: '1', shoppingListId, itemName: 'ping'});
  await promise;
});

it('can respond to received item', async() => {
  ws.subscribe(shoppingItem => {
    if (shoppingItem.itemName === 'ping') {
      ws.sendItem({id: '2', shoppingListId, itemName: 'pong'});
    }
  });
  const promise = new Promise(resolve => {
    ws.subscribe(shoppingItem => {
      if (shoppingItem.itemName === 'pong') {
        resolve();
      }
    });
  });
  ws.sendItem({id: '1', shoppingListId, itemName: 'ping'});
  await promise;
});
