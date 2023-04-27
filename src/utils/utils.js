export function isValidUsername(username) {
  return typeof username === "string" && username.trim().length > 0;
}

export function isValidRoomName(roomName) {
  return typeof roomName === "string" && roomName.trim().length > 0;
}

export function isValidMessageContent(content) {
  const trimmedContent = content.trim();
  return (
    typeof content === "string" &&
    trimmedContent.length >= 2 &&
    trimmedContent.length <= 2048
  );
}

export function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
