// backend/src/utils/helpers.js

export const generateRandomId = () => {
  return Math.random().toString(36).substring(2, 10);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleString();
};

export const pick = (obj, keys) => {
  const newObj = {};
  keys.forEach((k) => {
    if (obj[k] !== undefined) newObj[k] = obj[k];
  });
  return newObj;
};
