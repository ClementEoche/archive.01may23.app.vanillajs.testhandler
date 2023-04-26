import Room from '../models/room.js';

export default class RoomList {
  constructor() {
    this.rooms = [];
  }

  addRoom(roomName) {
    // Vérifier si un salon avec le même nom existe déjà
    const existingRoom = this.rooms.find((room) => room.name === roomName);

    if (existingRoom) {
      return null;
    }

    const roomId = this.rooms.length;
    const newRoom = new Room(roomName, roomId);
    this.rooms.push(newRoom);
    return newRoom;
  }

  getRoomById(id) {
    return this.rooms.find((room) => room.id === id);
  }

  getRoomByName(name) {
    return this.rooms.find((room) => room.name === name);
  }

  getAllRooms() {
    return this.rooms;
  }
}
