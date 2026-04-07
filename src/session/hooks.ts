import React from 'react';

import { useApi } from '@/utils/api';
import { useAsyncMemo } from '@/utils/hooks';

export type User = {
    email: string;
};

export const useSession = () => {
    const api = useApi();

    const kickoff = React.useCallback((email: string) => {
        return api.post('/session', { email });
    }, [api]);

    const login = React.useCallback((email: string, code: string) => {
        return api.post('/session', { email, code });
    }, [api]);

    const get = React.useCallback(() => {
        return api.get('/session');
    }, [api]);

    return React.useMemo(() => ({ kickoff, login, get }), [kickoff, login, get]);
};

export const useUser = () => {
    const session = useSession();

    const [user, loading] = useAsyncMemo(() => session.get().catch(() => null), [session], null);

    return React.useMemo(() => ({ user, loading }), [user, loading]);
};

