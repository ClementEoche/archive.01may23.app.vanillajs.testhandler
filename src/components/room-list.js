import Room from '../models/room.js';

export default class RoomList {
  constructor() {
    this.roomsKey = 'rooms';

    if (!sessionStorage.getItem(this.roomsKey)) {
      sessionStorage.setItem(this.roomsKey, JSON.stringify([]));
    }
  }

  addRoom(roomName) {
    const rooms = this.getAllRooms();
    const roomId = rooms.length;
    const newRoom = new Room(roomName, roomId);
    rooms.push(newRoom);
    sessionStorage.setItem(this.roomsKey, JSON.stringify(rooms));
    return newRoom;
  }

  getRoomById(id) {
    const rooms = this.getAllRooms();
    return rooms.find((room) => room.id === id);
  }

  getRoomByName(roomName) {
    const rooms = this.getAllRooms();
    return rooms.find((room) => room.name === roomName);
  }

  getAllRooms() {
    return JSON.parse(sessionStorage.getItem(this.roomsKey));
  }
}
