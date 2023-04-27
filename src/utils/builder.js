import * as api from "../api/index.js";

export function addRoomToRoomList(room) {
  const roomList = document.querySelector(".room-list");
  const roomItem = document.createElement("li");
  roomItem.textContent = room.name;
  roomList.appendChild(roomItem);
}

export function addUserToUserList(user) {
  const userList = document.querySelector(".user-list");
  const userItem = document.createElement("li");
  userItem.innerHTML = user.username;
  userList.appendChild(userItem);
}

export async function addMessageToMessages(message) {
  const messagesDiv = document.getElementById("messages");
  const messageItem = document.createElement("div");
  const authorobj = await api.getUserById(message.user_id);
  const authorname = authorobj.data.username;
  messageItem.innerHTML = `<div class="message">
    <div class="message_author">${authorname}</div>
    <div class="message_content">${message.content}</div>
    <div class="message_date">${message.timestamp}</div>
  </div>`;
  messagesDiv.appendChild(messageItem);
}
