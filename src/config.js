/* eslint no-process-env: 0 */
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const environment = ['NODE_ENV', 'PORT'];

environment.forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`);
  }
});

export const config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
};
