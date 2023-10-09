import { createCookieSessionStorage } from "@remix-run/node";
import { Authenticator } from "remix-auth";
import type { Auth0Profile } from "remix-auth-auth0";
import { Auth0Strategy } from "remix-auth-auth0";

const AUTH0_CLIENT_ID = "GlGKPEBN9jl2DsP8XgZASjrPy3nZpKlx";
const AUTH0_CALLBACK_URL = "http://localhost:3000/login/redirect";
const AUTH0_CLIENT_SECRET = "HbKRE_ZS_rvDXa0n65vILwT7pcrM1eOhWOVCi4YQgmljy5PZ9toQagQM0ltMAbSJ";
const AUTH0_DOMAIN = "dev-1wsce4iny6inhdk5.us.auth0.com";
const SECRETS = "fb6c9e94f601beb1d1540d6a5e3e48d94348c7c56f37b7085a74f750d23a2ce99d5e404b744db7482884b74faabb3f60dcf9bcdc984498225429322dec594cc63ad6104a985abed13948e862e4177a9818c52cf49eeaf493071e6540db3e4453564b6e7a8839f2ddd2a17ac8905f5e15d167e2a5f29956a01501e4e50ea45d11d7d058766229b77daf6c5de149c095a96af4934461501842abd300f463263535918fb049e0120f9a43e08e6d0eed2faa253bfafb0800bc7052487f54e636a598b70a7ee35aa4aecea2dc37a1f9f256b8e1c2731eda3c4bb23fe796132a62347d93b470007c61856505ea26981580be8f3fd3bc682addf19e31e14599a1dc5bac";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_remix_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [SECRETS],
    secure: process.env.NODE_ENV === "production",
  },
});

export const auth = new Authenticator<Auth0Profile>(sessionStorage);

const auth0Strategy = new Auth0Strategy(
  {
    callbackURL: AUTH0_CALLBACK_URL,
    clientID: AUTH0_CLIENT_ID,
    clientSecret: AUTH0_CLIENT_SECRET,
    domain: AUTH0_DOMAIN,
  },
  async ({ profile }) => {
    //
    // Use the returned information to process or write to the DB.
    //
    return profile;
  },
);

auth.use(auth0Strategy);

export const { getSession, commitSession, destroySession } = sessionStorage;
