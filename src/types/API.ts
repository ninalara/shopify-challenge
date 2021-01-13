interface Init {
    status: 'init';
}

interface Loading {
    status: 'loading';
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
