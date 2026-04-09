import React from 'react';

import { useLocalStorage } from './hooks';

const API_HOST = process.env.API_HOST;

export const useToken = () => {
    // Пока что в локал сторадж, но надо в куки
    // чтобы работало на ССРе
    const [token, setToken] = useLocalStorage<string | null>('token', null);

    return [token, setToken] as const;
};

export const useApi = () => {
    const [token] = useToken();

    const headers: any = React.useMemo(() => {
        if (token) {
            return { 'Content-Type': 'application/json', Authorization: token };
        }

        return { 'Content-Type': 'application/json' };
    }, [token]);

    const post = React.useCallback((url: string, body: unknown) => {
        return fetch(API_HOST + url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }).then((r) => r.status === 200 ? r.json() : Promise.reject(r.json()));
    }, [headers]);

    const get = React.useCallback((url: string) => {
        return fetch(API_HOST + url, {
            method: 'GET',
            headers,
        }).then((r) => r.status === 200 ? r.json() : Promise.reject(r.json()));
    }, [headers]);

    const _delete = React.useCallback((url: string) => {
        return fetch(API_HOST + url, {
            method: 'DELETE',
            headers,
        }).then((r) => r.status === 200 ? r.json() : Promise.reject(r.json()));
    }, [headers]);

    return React.useMemo(() => ({ post, get, delete: _delete }), [post, get, _delete]);
};
