import * as api from "../src/api/index.js";

describe("API", () => {
  test("getUsers", async () => {
    const response = await api.getUsers();
    expect(response).toHaveProperty("success");
    expect(response.success).toBe(false);
  });

  test("createUser", async () => {
    const response = await api.createUser("testuser");
    expect(response).toHaveProperty("success");
    expect(response.success).toBe(true);
  });

  test("getUserById", async () => {
    const response = await api.getUserById(0);
    expect(response).toHaveProperty("success");
    expect(response.success).toBe(true);
  });

  test("getUserByUsername", async () => {
    const response = await api.getUserByUsername("testuser");
    expect(response).toHaveProperty("success");
    expect(response.success).toBe(true);
  });

  test("getUsers", async () => {
    const response = await api.getUsers();
    expect(response[0]).toHaveProperty("success");
    expect(response[0].success).toBe(true);
  });

  test("createRoom", async () => {
    const response = await api.createRoom("testroom");
    expect(response).toHaveProperty("success");
  });

  test("getRooms", async () => {
    const response = await api.getRooms();
    expect(response[0]).toHaveProperty("success");
    expect(response[0].success).toBe(true);
  });

  test("getRoomById", async () => {
    const response = await api.getRoomById(0);
    expect(response).toHaveProperty("success");
    expect(response.success).toBe(true);
  });

  test("getRoomByName", async () => {
    const response = await api.getRoomByName("testroom");
    expect(response).toHaveProperty("success");
    expect(response.success).toBe(true);
  });

  test("postMessage", async () => {
    const response = await api.postMessage(0, 0, "Test message");
    expect(response).toHaveProperty("success");
    expect(response.success).toBe(true);
  });

  test("getMessagesByRoomId", async () => {
    const response = await api.getMessagesByRoomId(0);
    expect(response).toHaveProperty("success");
    expect(response.success).toBe(true);
  });

  test("disconnect", async () => {
    const response = await api.disconnect();
    expect(response).toHaveProperty("success");
    expect(response.success).toBe(true);
  });
});
