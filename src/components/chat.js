import UserList from "./user-list.js";
import RoomList from "./room-list.js";
import Message from "../models/message.js";
import * as api from "../api/index.js";

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

  async postMessage(user_id, room_id, content) {
    const user = this.getUserById(user_id);
    const room = this.getRoomById(room_id);

    if (!user || !room) {
      return null;
    }

    const roomMessagesKey = `messages_${room_id}`;
    const roomMessages =
      JSON.parse(sessionStorage.getItem(roomMessagesKey)) || [];
    const messageId = roomMessages.length;
    const message = new Message(user_id, room_id, content, messageId);

    if (!message.isValid()) {
      return null;
    }
    const response = await api.postMessage(user_id, room_id, content);
    if (response) {
      roomMessages.push(message);
      sessionStorage.setItem(roomMessagesKey, JSON.stringify(roomMessages));
      return message;
    }
  }

  getMessagesByRoomId(room_id) {
    const roomMessagesKey = `messages_${room_id}`;
    return JSON.parse(sessionStorage.getItem(roomMessagesKey)) || [];
  }
}
