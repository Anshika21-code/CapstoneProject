// frontend/src/utils/validators.js

export const isEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isStrongPassword = (password) => {
  // At least 6 characters
  return password.length >= 6;
};

export const isNotEmpty = (value) => {
  return value && value.trim() !== "";
};

export const validateForm = (fields) => {
  // Example: validateForm({ email: "x", password: "123" })
  for (const key in fields) {
    if (!isNotEmpty(fields[key])) return false;
  }
  return true;
};
