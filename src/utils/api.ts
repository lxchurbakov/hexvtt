import React from 'react';
// takes root
// returns post get and other methods
// uses authorization as well
const API_HOST = process.env.API_HOST;

export const useApi = () => {
    const post = React.useCallback((url: string, body: unknown) => {
        return fetch(API_HOST + url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then((r) => r.json());
    }, []);

    const get = React.useCallback((url: string, body: unknown) => {
        return fetch(API_HOST + url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(body)
        }).then((r) => r.json());
    }, []);

    return React.useMemo(() => ({ post, get }), [post, get]);
};
