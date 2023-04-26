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
    if (
      response.data === "Username already exists" &&
      response.success === false
    ) {
      sessionStorage.setItem("currentuser", JSON.stringify(user));
    }
    if (response.success === true) {
      addUserToUserList(user);
      sessionStorage.setItem("currentuser", JSON.stringify(user));
    }
    refreshUserInfo();
  } else {
    alert("Nom d'utilisateur invalide");
    window.location.reload();
    return;
  }
  // Création d'un salon
  const roomName = prompt("Entrez le nom du salon à créer:");
  if (isValidRoomName(roomName)) {
    const room = chat.createRoom(roomName);
    const response = await api.createRoom(roomName);
    if (response.success === true) {
      addRoomToRoomList(room);
      sessionStorage.setItem("currentroom", JSON.stringify(room));
      this.currentRoomId = room.id;
    }
    if (
      response.data === "A room with the same name already exists." &&
      response.success === false
    ) {
      sessionStorage.setItem("currentroom", JSON.stringify(room));
      this.currentRoomId = room.id;
    }
  } else {
    alert("Nom de salon invalide");
    window.location.reload();
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
  const disconnect = document.getElementById("disconnect");
  const messageInput = document.getElementById("message-input");

  sendButton.addEventListener("click", async () => {
    const content = messageInput.value;
    if (isValidMessageContent(content)) {
      const message = chat.postMessage(userId, roomId, content);
      await api.postMessage(userId, roomId, content);
      refreshMessages();
      messageInput.value = "";
    } else {
      console.error("Contenu de message invalide");
      return;
    }
  });

  disconnect.addEventListener("click", async () => {
    const response = await api.disconnect();
    if (response.success === true) {
      sessionStorage.clear();
      window.location.reload();
    }
  });

  const messages = await api.getMessagesByRoomId(roomId);
  messages.data.forEach((message) => addMessageToMessages(message));
})();

function addRoomToRoomList(room) {
  const roomList = document.querySelector(".room-list");
  const roomItem = document.createElement("li");
  roomItem.textContent = room.name;
  roomList.appendChild(roomItem);
}

function refreshUserInfo() {
  const userInfos = document.querySelector(".user-info");
  const userInfosItem = document.createElement("li");
  userInfosItem.innerHTML = sessionStorage.getItem("currentuser").username;
  userInfos.appendChild(userInfosItem);
}

function addUserToUserList(user) {
  const userList = document.querySelector(".user-list");
  const userItem = document.createElement("li");
  userItem.textContent = user.username;
  userList.appendChild(userItem);
}

function refreshMessages() {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML = "";
  const messages = chat.getMessagesByRoomId(currentRoomId);
  messages.data.forEach((message) => addMessageToMessages(message));
}
