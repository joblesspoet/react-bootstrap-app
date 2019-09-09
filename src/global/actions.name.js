
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const RESET_LOGIN_STATE = 'RESET_LOGIN_STATE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const SET_FIELD_VALUE       = 'SET_FIELD_VALUE';
export const FORM_SET_FIELD_VALUE  = 'FORM_SET_FIELD_VALUE';
export const VALIDATE_FORM_FIELDS  = 'VALIDATE_FORM_FIELDS';
export const VALIDATE_SUCCESS      = 'VALIDATE_SUCCESS';
export const VALIDATE_FAILURE      = 'VALIDATE_FAILURE';
export const RESET_REGISTER_FORM = 'RESET_REGISTER_FORM';
export const REGISTRATION_REQUEST_START     = "REGISTRATION_REQUEST_START";
export const REGISTRATION_REQUEST_SUCCESS   = "REGISTRATION_REQUEST_SUCCESS";
export const REGISTRATION_REQUEST_FAILURE   = "REGISTRATION_REQUEST_FAILURE";

/**
 * Dashboard action constants
 */

export const DASHBOARD_STATS_REQUEST = 'DASHBOARD_STATS_REQUEST';
export const DASHBOARD_STATS_SUCCESS = 'DASHBOARD_STATS_SUCCESS';
export const DASHBOARD_STATS_FAILURE = 'DASHBOARD_STATS_FAILURE';
export const DASHBOARD_UPDATE_STATS  = 'DASHBOARD_UPDATE_STATS';
/**
 * Side bar action constant
 * 
 */
export const SIDE_BAR_DISPLAY = 'SIDE_BAR_DISPLAY';
export const SIDE_BAR_SELECT_ITEM = 'SIDE_BAR_SELECT_ITEM';

/**
 * Routes Actions
 */
export const ROUTES_REQUEST          = 'ROUTES_REQUEST';
export const ROUTES_FETCHING_SUCCESS = 'ROUTES_FETCHING_SUCCESS';
export const ROUTES_REQUEST_FAIL     = 'ROUTES_REQUEST_FAIL';
export const ADD_ROUTE_SUCCESS       = 'ADD_ROUTE_SUCCESS';
export const UPDATE_ROUTE_SUCCESS    = 'UPDATE_ROUTE_SUCCESS';
export const DELETE_ROUTE_SUCCESS    = 'DELETE_ROUTE_SUCCESS';
export const SHOW_ADD_ROUTE_MODEL    = 'SHOW_ADD_ROUTE_MODEL';
export const HIDE_ADD_ROUTE_MODEL    = 'HIDE_ADD_ROUTE_MODEL';
export const SHOW_EDIT_ROUTE_MODEL   = 'SHOW_EDIT_ROUTE_MODEL';
export const HIDE_EDIT_ROUTE_MODEL   = 'HIDE_EDIT_ROUTE_MODEL';
export const SET_SELECTED_ITEM       = 'SET_SELECTED_ITEM';
export const SHOW_ALL                = 'ALL';
export const ACTIVE_ALL              = 'ACTIVE';
export const PAUSE_ALL               = 'PAUSE';
export const SET_VISIBILITY_FILTER   = 'SET_VISIBILITY_FILTER';
export const SET_ROUTES_PROPERTY     = 'SET_ROUTES_PROPERTY';

/**
 * Drivers Actions
 */
export const DRIVER_REQUEST          = 'DRIVER_REQUEST';
export const DRIVER_FETCHING_SUCCESS = 'DRIVER_FETCHING_SUCCESS';
export const DRIVER_REQUEST_FAIL     = 'DRIVER_REQUEST_FAIL';
export const DRIVER_STATUS_UPDATE_SUCCESS = 'DRIVER_STATUS_UPDATE_SUCCESS';
export const SET_DRIVER_PROPERTY     = 'SET_DRIVER_PROPERTY';

/**
 * Admin forgot password Actions
 */

export const RESET_PASSWORD_FETCHING = 'RESET_PASSWORD_FETCHING';
export const RESET_PASSWORD_SUCCESS  = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAIL     = 'RESET_PASSWORD_FAIL';

/**
 * User profile update
 */

export const PROFILE_FETCH_REQUEST   = "PROFILE_FETCH_REQUEST";
export const PROFILE_GET_SUCCESS     = "PROFILE_GET_SUCCESS";
export const PROFILE_GET_FAILURE     = "PROFILE_GET_FAILURE";
export const PROFILE_UPDATE_SUCCESS  = "PROFILE_UPDATE_SUCCESS";
export const PROFILE_SET_FIELD_VALUE = "PROFILE_SET_FIELD_VALUE";
export const PROFILE_COUNTRY_FETCH_REQUEST = "PROFILE_COUNTRY_FETCH_REQUEST";
export const PROFILE_COUNTRY_FETCH_SUCCESS = "PROFILE_COUNTRY_FETCH_SUCCESS";
export const PROFILE_COUNTRY_FETCH_ERROR = "PROFILE_COUNTRY_FETCH_ERROR";
export const PROFILE_STATE_FETCH_REQUEST = "PROFILE_STATE_FETCH_REQUEST";
export const PROFILE_STATE_FETCH_SUCCESS = "PROFILE_STATE_FETCH_SUCCESS";
export const PROFILE_STATE_FETCH_ERROR = "PROFILE_STATE_FETCH_ERROR";
export const PROFILE_CITY_FETCH_REQUEST = "PROFILE_CITY_FETCH_REQUEST";
export const PROFILE_CITY_FETCH_SUCCESS = "PROFILE_CITY_FETCH_SUCCESS";
export const PROFILE_CITY_FETCH_ERROR = "PROFILE_CITY_FETCH_ERROR";
export const PROFILE_RESET_SUCCESS_MSG = 'PROFILE_RESET_SUCCESS_MSG';
export const PROFILE_RESET_ERROR_MSG = 'PROFILE_RESET_ERROR_MSG';



/**
 * Realtime admin bus locations
 */
export const REALTIME_SERVER_REQUEST = 'REALTIME_SERVER_REQUEST';
export const REALTIME_SERVER_REQUEST_FAILURE = 'REALTIME_SERVER_REQUEST_FAILURE';
export const REALTIME_SERVER_REQUEST_SUCCESS = 'REALTIME_SERVER_REQUEST_SUCCESS';
export const SELECT_ROUTE   =   'SELECT_ROUTE';
export const DE_SELECT_ROUTE =   'DE_SELECT_ROUTE';
export const UPDATE_ADMIN_MSG = 'UPDATE_ADMIN_MSG';
export const REALTIME_ROUTE_UPDATE_SUCCESS = 'REALTIME_ROUTE_UPDATE_SUCCESS';

/**
 * Realtime route History actions
 */
export const REALTIME_ROUTE_SERVER_REQUEST         = 'REALTIME_ROUTE_SERVER_REQUEST';
export const REALTIME_ROUTE_SERVER_REQUEST_FAILURE = 'REALTIME_ROUTE_SERVER_REQUEST_FAILURE';
export const REALTIME_ROUTE_SERVER_REQUEST_SUCCESS = 'REALTIME_ROUTE_SERVER_REQUEST_SUCCESS';