// frontend/src/utils/helpers.js

export const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const generateRandomId = () =>
  Math.random().toString(36).substring(2, 10);

export const capitalize = (word) => {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const groupBy = (arr, key) => {
  return arr.reduce((acc, obj) => {
    const val = obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(obj);
    return acc;
  }, {});
};
