// utils/formatDate.js
export const formatDate = (date) =>
  new Date(date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
