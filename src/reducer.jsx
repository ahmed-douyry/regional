const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add': {
      const livre = { username: action.payload.username, email: action.payload.email };
      return [...state, livre];
    }
    default:
      return state;
  }
};
