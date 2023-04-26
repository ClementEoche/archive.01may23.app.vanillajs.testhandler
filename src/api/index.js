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
    console.log("Response from", endpoint, " ", jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.error("Error fetching data from", endpoint, " ", error);
    return null;
  }
}

export function getUsers() {
  return apiRequest("/users", "GET");
}

export function getRooms() {
  return apiRequest("/rooms", "GET");
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
/*
export function disconnect() {
  return apiRequest("/disconnect");
}*/
