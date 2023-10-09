import type { LoaderFunctionArgs } from "@remix-run/node";

import { auth } from "./login.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return auth.authenticate("auth0", request, {
    successRedirect: "/",
    failureRedirect: "/",
  });
};