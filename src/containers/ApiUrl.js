import WebSocket from './websocket/WebSocket'

const base = 'https://contezi.ro/shopping';
const itemsSubscription = (shoppingListId) => '/topic/items/' + shoppingListId;
const send = '/ws/item';
const userList = (userId) => base + '/users/' + userId + '/lists/latest';
const connectToList = (shoppingListId) => {
  const ws = new WebSocket(base + '/list', itemsSubscription(shoppingListId), send);
  ws.connect();
  return ws;
};
const apiInfo = base + '/info';

export default {
  userList,
  apiInfo,
  connectToList
};
