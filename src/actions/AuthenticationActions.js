/* eslint-disable */
export const SHOW_LOGIN_DIALOG = 'SHOW_LOGIN_DIALOG';
export const HIDE_LOGIN_DIALOG = 'HIDE_LOGIN_DIALOG';

export function getShowLoginDialogAction() {
  return {
    //returns object that has this type
    type: SHOW_LOGIN_DIALOG,
  };
}

export function getHideLoginDialogAction() {
  return {
    //returns object that has this type
    type: HIDE_LOGIN_DIALOG,
  };
}
