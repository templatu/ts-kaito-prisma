import { createRouter } from "../context";

const helloWorld = createRouter().add("GET", "/", async () => {
  return {
    message: "Welcome to your new Templatu project!",
  };
});

export default helloWorld;
