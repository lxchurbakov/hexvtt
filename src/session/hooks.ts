// useToken hook that you can use to store and update
import React from 'react';

import { useApi } from "@/utils/api";

//
export const useSessionApi = () => {
    const api = useApi();

    const kickoff = React.useCallback((email: string) => {
        return api.post('/session', { email });
    }, [api]);

    return React.useMemo(() => ({ kickoff }), [kickoff]);
};
