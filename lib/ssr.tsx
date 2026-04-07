import React from 'react';

export class SsrManager {
    public redirect: string | null = null;
}

export const SsrContext = React.createContext(null as SsrManager | null);

export const SsrRedirect = ({ to }: { to: string }) => {
    const manager = React.useContext(SsrContext);
    
    if (manager) {
        manager.redirect = to;
    }

    return null;
};

export const SsrProvider = ({ children, manager }: React.PropsWithChildren<{ manager: SsrManager }>) => {
    return (
        <SsrContext.Provider value={manager}>
            {children}
        </SsrContext.Provider>
    );
};
