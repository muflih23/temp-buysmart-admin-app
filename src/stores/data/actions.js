import DataTypes from "./types";

/* Set Actions */

export const setCurrentPath = (payload) => ({
  type: DataTypes.SET_CURRENT_PATH,
  payload,
});

export const setSectionList = (payload) => ({
  type: DataTypes.SET_SECTION_LIST,
  payload,
});