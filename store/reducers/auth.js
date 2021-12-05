const initState = {
    loggedIn: false,
    firstName: '',
    lastName: '',
    email: '',
    role: 0,
    accessLevel : [],
    userId : '',
    profilePic : ''
}

export const authReducer = (state = initState, action) =>{
    // console.log('auth reducer state', state);
    // console.log('auth reducer action', action);

    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state,...action.payload};
        case 'LOGOUT' : 
            return initState;
        default:
            return state;
    }
}

