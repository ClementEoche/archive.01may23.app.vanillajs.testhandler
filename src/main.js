import * as api from "./api/index.js";
import {
  isValidUsername,
  isValidRoomName,
  isValidMessageContent,
} from "./utils/utils.js";

import {
  refreshUserInfo,
  refreshMessages,
  refreshRooms,
  refreshUsers,
} from "./utils/services.js";

import {
  addMessageToMessages,
  addRoomToRoomList,
  addUserToUserList,
} from "./utils/builder.js";

(async function main() {
  sessionStorage.clear();
  // Authentification de l'utilisateur et création d'un utilisateur
  const username = prompt("Entrez votre nom d'utilisateur:");
  if (isValidUsername(username)) {
    const response = await api.createUser(username);
    if (
      response.data === "Username already exist" &&
      response.success === false
    ) {
      const currentuser = await api.getUserByUsername(username);
      sessionStorage.setItem("currentuser", JSON.stringify(currentuser.data));
    }
    if (response.success === true) {
      addUserToUserList(response.data);
      sessionStorage.setItem("currentuser", JSON.stringify(response.data));
    }
  } else {
    alert("Nom d'utilisateur invalide");
    window.location.reload();
    return;
  }
  // Création d'un salon
  const roomName = prompt("Entrez le nom du salon à créer:");
  if (isValidRoomName(roomName)) {
    const response = await api.createRoom(roomName);
    if (response.success === true) {
      addRoomToRoomList(response.data);
      sessionStorage.setItem("currentroom", JSON.stringify(response.data));
    }
    if (
      response.data === "A room with the same name already exists." &&
      response.success === false
    ) {
      const currentRoom = await api.getRoomByName(roomName);
      sessionStorage.setItem("currentroom", JSON.stringify(currentRoom.data));
      alert("Connexion au salon existant " + roomName + " ...");
    }
  } else {
    alert("Nom de salon invalide");
    window.location.reload();
    return;
  }

  // Récupération et affichage des salons et des utilisateurs
  await refreshUserInfo();
  await refreshUsers();
  await refreshRooms();
  await refreshMessages();

  // Envoi et récupération des messages
  const storedUser = JSON.parse(sessionStorage.getItem("currentuser"));
  const storedRoom = JSON.parse(sessionStorage.getItem("currentroom"));
  const userId = storedUser.id;
  const roomId = storedRoom.id;
  const sendButton = document.getElementById("send-button");
  const disconnect = document.getElementById("disconnect");
  const changeuser = document.getElementById("change-user");
  const messageInput = document.getElementById("message-input");

  sendButton.addEventListener("click", async () => {
    const content = messageInput.value;
    if (isValidMessageContent(content)) {
      const response = await api.postMessage(userId, roomId, content);
      console.log(response);
      if (response.success === true) {
        await refreshMessages();
      } else {
        alert(response.data);
      }
      messageInput.value = "";
    } else {
      console.error("Contenu de message invalide");
    }
  });

  disconnect.addEventListener("click", async () => {
    const response = await api.disconnect();
    if (response.success === true) {
      window.location.reload();
    }
  });

  changeuser.addEventListener("click", async () => {
    window.location.reload();
  });
})();
