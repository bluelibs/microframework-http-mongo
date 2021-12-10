import { Bundle } from "@bluelibs/core";
import { HTTPBundle } from "@bluelibs/http-bundle";
import { routes } from "./routes";

export class AppBundle extends Bundle {
  async init() {
    const httpBundle = this.container.get(HTTPBundle);

    httpBundle.addRoutes(routes);
    // httpBundle.app // Access to express app to add whatever middlewares you choose
    // httpBundle.router // The default express Router
  }

  async prepareFixtures() {}
}
