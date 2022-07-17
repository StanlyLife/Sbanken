export const getApiHeaders = (bearerToken_store: string) => ({
    Authorization: 'Bearer ' + bearerToken_store,
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
});
