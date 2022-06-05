/* eslint-disable */
import * as authenticationActions from '../actions/AuthenticationActions';

//reducer makes the actions work and sets intial state
const initialState = {
  user: null,
  loginPending: false,
  showLoginDialog: false,
  error: null,
};
function rootReducer(state = initialState, action) {
  console.log('reducer: ', action.type); //bzw clicking the button

  switch (action.type) {
    case authenticationActions.SHOW_LOGIN_DIALOG:
      return {
        ...state,
        showLoginDialog: true,
        error: null,
      };
    case authenticationActions.HIDE_LOGIN_DIALOG:
      return {
        ...state,
        showLoginDialog: false,
        error: null,
      };
    default:
      return state;
  }
}
export default rootReducer;
