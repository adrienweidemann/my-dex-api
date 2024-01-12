import dotenv from "dotenv";

const envPath: string = process.env.NODE_ENV === "test" ? "./.env.test" : "./.env";

dotenv.config({
  path: envPath
});

const ENV = {
  NODE_ENV: process.env.NODE_ENV as string,
  PORT: Number(process.env.PORT),
  HOST: process.env.HOST as string,

  API_KEY: process.env.API_KEY as string
};

for (const [key, value] of Object.entries(ENV)) {
  if (typeof value === "undefined" || value === "" || Number.isNaN(value)) {
    throw new Error(`Config error, undefined ENV: ${key}`);
  }
}

export default ENV;
