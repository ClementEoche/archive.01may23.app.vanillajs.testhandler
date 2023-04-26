import Chat from "./components/chat.js";
import * as api from "./api/index.js";
import {
  isValidUsername,
  isValidRoomName,
  isValidMessageContent,
} from "./utils/utils.js";

(async function main() {
  const chat = new Chat();

  // Authentification de l'utilisateur et création d'un utilisateur
  const username = prompt("Entrez votre nom d'utilisateur:");
  if (isValidUsername(username)) {
    const user = chat.createUser(username);
    const response = await api.createUser(username);
    if (response) {
      addUserToUserList(user);
    }
  } else {
    console.error("Nom d'utilisateur invalide");
    return;
  }

  // Création d'un salon
  const roomName = prompt("Entrez le nom du salon à créer:");
  if (isValidRoomName(roomName)) {
    const room = chat.createRoom(roomName);
    const response = await api.createRoom(roomName);
    if (response) {
      addRoomToRoomList(room);
    }
  } else {
    console.error("Nom de salon invalide");
    return;
  }

  // Récupération et affichage des salons et des utilisateurs
  const rooms = await api.getRooms();
  const users = await api.getUsers();

  rooms.forEach((room) => addRoomToRoomList(room));
  users.forEach((user) => addUserToUserList(user));

  // Envoi et récupération des messages
  const userId = 0;
  const roomId = 0;
  const sendButton = document.getElementById("send-button");
  const messageInput = document.getElementById("message-input");

  sendButton.addEventListener("click", async () => {
    const content = messageInput.value;
    if (isValidMessageContent(content)) {
      const message = chat.postMessage(userId, roomId, content);
      await api.postMessage(userId, roomId, content);
      addMessageToMessages(message);
      messageInput.value = "";
    } else {
      console.error("Contenu de message invalide");
      return;
    }
  });

  const messages = await api.getMessagesByRoomId(roomId);
  messages.forEach((message) => addMessageToMessages(message));

  // Déconnexion de l'utilisateur
  //await api.disconnect();
  //console.log('Utilisateur déconnecté');
})();

function addRoomToRoomList(room) {
  const roomList = document.querySelector(".room-list");
  const roomItem = document.createElement("li");
  roomItem.textContent = room.name;
  roomList.appendChild(roomItem);
}

function addUserToUserList(user) {
  const userList = document.querySelector(".user-list");
  const userItem = document.createElement("li");
  userItem.textContent = user.username;
  userList.appendChild(userItem);
}

function addMessageToMessages(message) {
  const messagesDiv = document.getElementById("messages");
  const messageItem = document.createElement("div");
  messageItem.textContent = `${message.user_id}: ${message.content}`;
  messagesDiv.appendChild(messageItem);
}
