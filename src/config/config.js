
let api_url;
export const APP_NAME = 'Hello World';

if(process.env.NODE_ENV == 'development')
    api_url = '';
else
    api_url = '';

export const API_URL = api_url;