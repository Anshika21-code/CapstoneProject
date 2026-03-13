// backend/src/services/calendarService.js

export const isSlotAvailable = async (doctorId, date) => {
  // you can add MongoDB check later
  return true; // always available for now
};

export const bookSlot = async (doctorId, date) => {
  return {
    doctorId,
    date,
    status: "confirmed",
  };
};
