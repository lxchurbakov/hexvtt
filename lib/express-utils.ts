import express from 'express';

export const route = <T>(predicate: (req: express.Request, res: express.Response) => Promise<T>) =>
    (req: express.Request, res: express.Response, next: express.NextFunction) =>
        Promise.resolve().then(() => predicate(req, res)).then((data) => res.json(data)).catch((err) => next(err));

export class HttpError extends Error {
    constructor (public statusCode: number, public body: unknown, ...args: string[]) {
        super(...args);
    }
};

export const catchErrors = (err: Error, _req: unknown, res: express.Response, _next: unknown) => {
    if (err instanceof HttpError && !!err.statusCode) {
        res.status(err.statusCode).json(err.body || null);
    } else {
        res.status(500).send(err.toString());
    }
};
