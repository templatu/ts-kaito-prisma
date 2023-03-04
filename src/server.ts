import { createServer } from "@kaito-http/core";
import { createRouter, getContext } from "./context";
import { helloWorld } from "./routes";

// Create a router
const app = createRouter().merge("/helloWorld", helloWorld);

const server = createServer({
  getContext,
  router: app,

  // Define an async `onError` handler, in case something goes wrong inside of the route.
  // More on that that later.
  onError: async ({ error }) => {
    console.log(error);

    return {
      status: 500,
      message: error.message,
    };
  },
});

server.listen(8080);
