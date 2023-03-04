import { createGetContext, InferContext, Router } from "@kaito-http/core";

// Provide context to every route - req & res objects in this case.
export const getContext = createGetContext(async (req, res) => ({
  req,
  res,
}));

// Export a type of our context
export type AppContext = InferContext<typeof getContext>;

// Define a context-typed router
export function createRouter() {
  return Router.create<AppContext>();
}
