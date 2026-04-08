import React from 'react';

const isSSR = () => typeof window === 'undefined';

const ls = {
    get: (name: string) =>
        isSSR() ? null : JSON.parse(localStorage.getItem(name) ?? 'null'),
    set: (name: string, value: unknown) =>
        isSSR() ? null : localStorage.setItem(name, JSON.stringify(value)),
};

export const useLocalStorage = <T>(name: string, def: T) => {
    const [value, setValue] = React.useState(ls.get(name) as T);

    React.useEffect(() => {
        ls.set(name, value);
    }, [value]);

    return [value, setValue] as [T, ($: T) => void];
};

export const useAsyncMemo = <T,>(predicate: () => Promise<T>, deps: React.DependencyList, def: T) => {
    const [value, setValue] = React.useState(def as T);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null as Error | null);

    React.useEffect(() => {
        setLoading(true);
        predicate()
            .then(setValue)
            .catch(setError)
            .then(() => setLoading(false));
    }, deps);

    return [value, loading, error] as const;
};

export const useTicker = ([value, setValue] = React.useState(false)) => 
    React.useCallback(() => setValue(($) => !$), [value]);
