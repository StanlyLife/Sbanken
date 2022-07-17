import { getApiHeaders } from './getApiHeaders';

export const getAxiosConfig = (method: 'get' | 'post' | 'put', url: string, bearerToken_store: string) => ({
    method: method,
    url: url,
    headers: getApiHeaders(bearerToken_store),
    data: 'grant_type=client_credentials',
});
