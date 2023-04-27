import * as api from "../api/index.js";

import {
  addMessageToMessages,
  addRoomToRoomList,
  addUserToUserList,
} from "./builder.js";

export function refreshUserInfo() {
  const userInfos = document.querySelector(".user-info");
  const userInfosItem = document.createElement("li");
  userInfosItem.innerHTML =
    "Mon nom : " + JSON.parse(sessionStorage.getItem("currentuser")).username;
  const userInfosItem2 = document.createElement("li");
  userInfosItem2.innerHTML =
    "Mon salon : " + JSON.parse(sessionStorage.getItem("currentroom")).name;
  userInfos.appendChild(userInfosItem);
  userInfos.appendChild(userInfosItem2);
}

export async function refreshMessages() {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.replaceChildren();
  sessionStorage.removeItem("messages");
  const roomId = JSON.parse(sessionStorage.getItem("currentroom")).id;
  await api.getMessagesByRoomId(roomId).then((messages) => {
    sessionStorage.setItem("messages", JSON.stringify(messages.data));
    messages.data.forEach((message) => addMessageToMessages(message));
  });
}

export async function refreshRooms() {
  const rooms = await api.getRooms();
  sessionStorage.removeItem("rooms");
  const roomsData = rooms.map((room) => room.data);
  sessionStorage.setItem("rooms", JSON.stringify(roomsData));
  const roomList = document.querySelector(".room-list");
  roomList.innerHTML = "";
  rooms.forEach((room) => addRoomToRoomList(room.data));
}

export async function refreshUsers() {
  const users = await api.getUsers();
  sessionStorage.removeItem("users");
  const usersData = users.map((user) => user.data);
  sessionStorage.setItem("users", JSON.stringify(usersData));
  const userList = document.querySelector(".user-list");
  userList.innerHTML = "";
  users.forEach((user) => addUserToUserList(user.data));
}
