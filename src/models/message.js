export default class Message {
    constructor(user_id, room_id, content, id) {
      this.id = id;
      this.user_id = user_id;
      this.room_id = room_id;
      this.content = content;
      this.timestamp = new Date();
    }
  
    isValid() {
      const contentLength = this.content.trim().length;
  
      // Vérifier que le message a entre 2 et 2048 caractères
      if (contentLength >= 2 && contentLength <= 2048) {
        return true;
      }
  
      return false;
    }
  }
  