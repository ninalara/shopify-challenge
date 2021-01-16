interface Init {
    status: 'init';
    payload: undefined;
}

interface Loading {
    status: 'loading';
    payload: undefined;
}

interface Loaded<T> {
    status: 'loaded';
    payload: T;
}

interface Error {
    status: 'error';
    error: Error;
}

export type API<T> = Init | Loading | Loaded<T> | Error;
