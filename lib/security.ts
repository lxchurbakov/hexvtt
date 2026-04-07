import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';

if (!process.env.JWT_SECRET) {
  throw new Error('process.env.JWT_SECRET is not provided');
}

if (!process.env.HASH_FUNC) {
  throw new Error('process.env.HASH_FUNC is not provided');
}

export const createJWT = async <T>(data: T, expiresIn: number) => {
  return jwt.sign(data as any, String(process.env.JWT_SECRET), { expiresIn });
}

export const readJWT = async <T>(token: string) => {
  try {
    return Promise.resolve(jwt.verify(token, String(process.env.JWT_SECRET)) as T);
  } catch (e) {
    return Promise.reject();
  }
}

export const createUUID = () => {
  return uuid();
};

export const generateSalt = () => {
  return crypto.randomBytes(128).toString('base64');
};

export const getPasswordHash = async (password: string, salt: crypto.BinaryLike, iterations: number) => {
  return crypto.pbkdf2Sync(password, salt, iterations, 512, String(process.env.HASH_FUNC)).toString('hex');
};
