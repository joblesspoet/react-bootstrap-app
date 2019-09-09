import {
    LOGIN,
    LOGOUT,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    RESET_LOGIN_STATE
} from '../global/actions.name';

import {
    API_URL
} from '../config/config';


export const login_request = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const login_success = (user_data) => {
    return {
        type: LOGIN_SUCCESS,
        user: user_data
    }
}

export const login_failure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export const login = (user_data) => {
    return {
        type: LOGIN,
        user: user_data
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};

export const logout_success = (resp) => {
    return {
        type: LOGOUT_SUCCESS,
        payload: resp
    }
}

export const logout_failure = (error) => {
    return {
        type: LOGOUT_FAILURE,
        payload: error
    }
}
export const reset_login = ()=> {
    return {
        type:RESET_LOGIN_STATE        
    }
}

export const resetLoginFormState = () => {
    return async dispatch => {
        dispatch(reset_login());
    };
}

/**
 * User Login Action (Creator)
 * By: Ghulam Rasool
 */
export const doUserLogin = (email, password) => {    
    return async dispatch => {
        dispatch(login_request());
        try {
            await fetch(API_URL+'/api/login', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                }).then(response => response.json())
                .then((responseJson) => {
                    if (responseJson.msg == 'error') {
                        dispatch(login_failure(responseJson.detail));
                    } 
                    else if (responseJson.msg == 'success') {
                        const user_obj = {
                            ...responseJson.detail,
                            api_token: responseJson.token
                        }
                        dispatch(login_success(user_obj));
                    }
                    else {
                        dispatch(login_failure(error));    
                    }
                })
                .catch((error) => {
                    dispatch(login_failure(error));
                })
        } catch (error) {
            dispatch(login_failure(error));
        }
    }
}

/**
 * User Logout Action (Creator)
 * By: Ghulam Rasool
 */

export const doUserLogout = () => {

    return async (dispatch, getState) => {

        const auth_token = getState().auth.user.api_token;
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth_token}`
        };

        try {
            dispatch(logout());
            await fetch(API_URL + '/api/logout', {
                    method: 'POST',
                    headers: headers
                }).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.msg == 'error') {
                        dispatch(logout_failure(responseJson.detail));
                    } else if (responseJson.msg == 'success') {
                        dispatch(logout_success(responseJson.detail));                        
                    } else {
                        dispatch(logout_success("Already logged out from application."));                        
                    }
                })                
        } catch (error) {
            dispatch(logout_failure(error));
        }

    }
}
