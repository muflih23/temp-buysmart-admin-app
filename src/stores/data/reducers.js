import DataTypes from "./types";

const INITIAL_STATE = {
  currentPath: {},
  sectionList: [],
}

const dataReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case DataTypes.SET_CURRENT_PATH:
      return {
        ...state,
        currentPath: action.payload,
      };
    case DataTypes.SET_SECTION_LIST:
      return {
        ...state,
        sectionList: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;