import Joi from "joi";

import { loadConfig } from "./util/load-config";

export interface Env {
  NODE_ENV: "development" | "test" | "production";
  PORT: number;
  FROM_EMAIL: string;
  PASSWORD: string;
  TO_EMAIL: string;
  JWT_SECRET: string;
  ADMIN_STATUS: string;
  GUEST_STATUS: string;
}

const schema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("development", "test", "production")
      .default("development"),
    PORT: Joi.number().port().default(3000),
    FROM_EMAIL: Joi.string().email(),
    TO_EMAIL: Joi.string().email(),
    PASSWORD: Joi.string().regex(/^[a-zA-Z0-9_!@./#&+-]{3,30}$/),
    JWT_SECRET: Joi.string(),
    ADMIN_STATUS: Joi.string(),
    GUEST_STATUS: Joi.string(),
  })
  .unknown();

const env = loadConfig(schema);

export const config = {
  env: env.NODE_ENV,
  port: env.PORT,
  from_email: env.FROM_EMAIL,
  to_email: env.TO_EMAIL,
  password: env.PASSWORD,
  jwtSecret: env.JWT_SECRET,
  adminStatus: env.ADMIN_STATUS,
  guestStatus: env.GUEST_STATUS,
};
