import path from 'path';
import fs from 'fs/promises';
import paths from 'frm/paths';

const JSON_PATH = path.resolve(paths.root, './.json');

export const stringify = JSON.stringify;
export const parse = (t: unknown) => JSON.parse(String(t));

export const get_file = (key: string) => JSON_PATH + '/' + key;

export const global_map = {
    set: <T>(key: string, data: T) => fs.writeFile(get_file(key), stringify(data)),
    get: async(key: string) => parse(await fs.readFile(get_file(key))),
    remove: (key: string) => fs.unlink(get_file(key)),
};

// export const folder = <T>(name: string) => ({
//     set: (key: string, data: T) => global_map.set(`${name}/${key}`, data),
// });
