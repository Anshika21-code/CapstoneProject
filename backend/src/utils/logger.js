// backend/src/utils/logger.js
export const log = (message, type = "info") => {
  const time = new Date().toISOString();
  console.log(`[${time}] [${type.toUpperCase()}]: ${message}`);
};
