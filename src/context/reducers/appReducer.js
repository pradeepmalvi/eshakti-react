import { OPEN_MENU_SIDEBAR } from "../action.types";

export const appReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MENU_SIDEBAR:
      return { ...state, menu_sidebar: action.payload };
      break;

    default:
      return state;
  }
};
