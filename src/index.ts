import App from "./app";
import ClientError from "./client-error";
import GLOBAL from "./constants/global.constant";
import ERROR from "./constants/error.constant";
import ENV from "./env";

const init = async (): Promise<void> => {
  try {
    await app.listen();
  } catch (err) {
    console.error("%j", err);

    const error: Error = err as Error;
    throw new ClientError({
      level: GLOBAL.LOGGER.LOGGER_LEVEL.ERROR,
      message: ERROR.SERVER_START.FAILED,
      name: ERROR.ERROR_TYPE.SERVER_START,
      details: `${error.name} : ${error.message}
       ${error.stack || ""}`
    });
  }
};

const app: App = new App(ENV.PORT, ENV.HOST);

init().catch((err: Error) => {
  console.log(`${err.name} : ${err.message}
      ${err.stack || ""}`);
  process.exit(1);
});
