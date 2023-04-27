const API_BASE_URL = "http://localhost:8000";

export async function apiRequest(endpoint, method, data) {
  const url = API_BASE_URL + endpoint;
  const options = {
    method,
    credentials: 'include',
  };

  if (data) {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    options.body = formData;
  }

  try {
    const response = await fetch(url, options);
    const jsonResponse = await response.json();
    //console.log("Response from", endpoint, " ", jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.error("Error fetching data from", endpoint, " ", error);
    return null;
  }
}

export function getUsers() {
  return apiRequest("/users", "GET");
}

export function getUserById(user_id) {
  return apiRequest("/users?id=" + user_id, "GET");
}

export function getUserByUsername(username) {
  return apiRequest("/users?username=" + username, "GET");
}

export function getRooms() {
  return apiRequest("/rooms", "GET");
}

export function getRoomById(room_id) {
  return apiRequest("/rooms?id=" + room_id, "GET");
}

export function getRoomByName(room_name) {
  return apiRequest("/rooms?room_name=" + room_name, "GET");
}

export function getMessagesByRoomId(room_id) {
  return apiRequest("/messages?room_id=" + room_id, "GET");
}

export function createUser(username) {
  return apiRequest("/createuser", "POST", { username });
}

export function createRoom(room_name) {
  return apiRequest("/createroom", "POST", { room_name });
}

export function postMessage(user_id, room_id, content) {
  return apiRequest("/post-message", "POST", { user_id, room_id, content });
}

export function disconnect() {
  return apiRequest("/disconnect");
}
