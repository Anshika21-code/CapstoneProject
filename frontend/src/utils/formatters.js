// frontend/src/utils/formatters.js

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString();
};

export const formatName = (name) => {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const truncateText = (text, length = 120) => {
  if (!text) return "";
  return text.length > length ? text.substring(0, length) + "..." : text;
};
