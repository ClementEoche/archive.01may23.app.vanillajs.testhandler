export default class User {
    constructor(username, id) {
      this.id = id;
      this.username = username;
      this.lastMessageTimestamp = null;
    }
  
    canPostMessage() {
      // Si l'utilisateur n'a jamais posté de message, il peut en poster un
      if (this.lastMessageTimestamp === null) {
        return true;
      }
  
      // Calculer la différence entre maintenant et le dernier message posté
      const now = new Date();
      const timeDifference = now.getTime() - this.lastMessageTimestamp.getTime();
  
      // Si la différence est supérieure à 24 heures (en millisecondes), l'utilisateur peut poster un nouveau message
      if (timeDifference >= 24 * 60 * 60 * 1000) {
        return true;
      }
  
      return false;
    }
  
    postMessage() {
      // Mettre à jour le timestamp du dernier message posté
      this.lastMessageTimestamp = new Date();
    }
  }
  