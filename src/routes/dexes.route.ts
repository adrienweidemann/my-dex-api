import { FastifyPluginOptions, FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { StatusCodes } from "http-status-codes";

import apiKeyMiddleware from "../middleware/api-key.middleware";
import { FastifyPluginDoneFunction } from "../definitions/global";

export default (
  instance: FastifyInstance,
  _opts: FastifyPluginOptions,
  done: FastifyPluginDoneFunction
): void => {
  instance.get(
    "/",
    {
      preValidation: [apiKeyMiddleware]
    },
    async (_req: FastifyRequest, res: FastifyReply): Promise<void> => {
      return res
        .status(StatusCodes.OK)
        .send({ results: [{ name: "toto" }, { name: "titi" }, { name: "toto" }], count: 3 });
    }
  );

  done();
};

export const autoPrefix = "/dexes";
