import UserList from './user-list.js';
import RoomList from './room-list.js';
import Message from '../models/message.js';

export default class Chat {
  constructor() {
    this.userList = new UserList();
    this.roomList = new RoomList();
  }

  createUser(username) {
    return this.userList.addUser(username);
  }

  getUserById(id) {
    return this.userList.getUserById(id);
  }

  createRoom(roomName) {
    return this.roomList.addRoom(roomName);
  }

  getRoomById(id) {
    return this.roomList.getRoomById(id);
  }

  getAllRooms() {
    return this.roomList.getAllRooms();
  }

  postMessage(user_id, room_id, content) {
    const user = this.getUserById(user_id);
    const room = this.getRoomById(room_id);

    if (!user || !room) {
      return null;
    }

    if (!user.canPostMessage()) {
      return null;
    }

    const messageId = room.messages.length;
    const message = new Message(user_id, room_id, content, messageId);
    
    if (!message.isValid()) {
      return null;
    }

    room.messages.push(message);
    user.postMessage();

    return message;
  }

  getMessagesByRoomId(room_id) {
    const room = this.getRoomById(room_id);

    if (!room) {
      return null;
    }

    return room.messages;
  }
}
