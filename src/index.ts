import { Kernel } from "@bluelibs/core";
import { HTTPBundle } from "@bluelibs/http-bundle";
import { LoggerBundle, LoggerService } from "@bluelibs/logger-bundle";
import { MongoBundle } from "@bluelibs/mongo-bundle";
import { AppBundle } from "./app.bundle";

const kernel = new Kernel({
  bundles: [
    new LoggerBundle({
      console: true,
    }),
    new HTTPBundle({
      port: 3000,
    }),
    new MongoBundle({
      uri: "mongodb://localhost:27017/micro-framework",
    }),
    new AppBundle(),
  ],
});

kernel.init().then(() => {
  // If you are plugging this in into an existing app,
  // You can use `kernel.container` to access collection and remove HTTPBundle or AppBundle

  const logger = kernel.container.get(LoggerService);
  logger.info("Server initialised. http://localhost:3000/");
});
