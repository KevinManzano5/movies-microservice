import 'dotenv/config';
import * as joi from 'joi';

interface IEnvs {
  NATS_SERVERS: string[];
}

const schema = joi
  .object({
    NATS_SERVERS: joi.array().items(joi.string()).required(),
  })
  .unknown();

const { error, value } = schema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) throw new Error(error.message);

const envs: IEnvs = value;

export { envs };
