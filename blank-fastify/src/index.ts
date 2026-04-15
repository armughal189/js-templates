import fastifyCors from "@fastify/cors";
import fastify, { type FastifyReply, type FastifyRequest } from "fastify";

const app = fastify({
  logger: true,
});
app.register(fastifyCors);
app.get("/", (_req: FastifyRequest, rep: FastifyReply) => {
  rep.status(200).send({ statusCode: 200, message: "Hello, World!" });
});
app.listen(
  {
    host: "0.0.0.0",
    port: 3000,
  },
  (err, _addr) => {
    if (err) {
      app.log.error(err.message);
      return;
    }
  },
);
