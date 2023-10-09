import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import type { LoaderFunctionArgs  } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Outlet, useLoaderData, Link } from "@remix-run/react";
import React from "react";
import { auth } from "./login.server";

export const loader = async ( { request } : LoaderFunctionArgs) => {
  const profile = await auth.isAuthenticated(request, {});
  return json({profile: profile});
}

export default function Index() {
  const { profile } = useLoaderData<typeof loader>();
  return (
    <div className="w-screen h-screen">
      <NavigationMenu.Root className="relative flex justify-between w-screen h-20 p-2 list-none bg-gray-950">
        <NavigationMenu.Item className="flex items-center pl-2">
          <NavigationMenu.Link>
            <span className="text-3xl text-white">NanoRes</span> <span className="text-rg text-gray-650">Cloud</span>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        {profile && <NavigationMenu.Item className="flex items-center p-2 text-2xl relative">
          <NavigationMenu.Trigger>
              <HamburgerMenuIcon className="w-6 h-auto m-4"></HamburgerMenuIcon>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content asChild className="absolute top-full right-0 bg-gray-900 pb-4 rounded-lg shadow-2xl">
            <div className="w-80 flex flex-col">
              <div className="text-base mx-auto mb-4 mt-2 text-gray-400">
                {profile._json?.email}
              </div>
              <div className="text-2xl mx-auto my-2">
                Hi, {profile._json?.name}
              </div>
              <div className=" text-lg mx-auto p-2 my-2 text-gray-400 border-gray-400 border-2 rounded-lg">
                <Link to="/panel">
                  <button className="">
                    NanoRes Cloud Panel
                  </button>
                </Link>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>}
        {profile !== null ? <></> : (
          <div className="flex items-center">
            <NavigationMenu.Item className="flex items-center px-2 py-2 text-xl text-white border-2 border-gray-550 rounded-lg">
                <Form method="post" action="/login">
                  <button>Get Started</button>
                </Form>
            </NavigationMenu.Item>
          </div>
        )}
      </NavigationMenu.Root>
      <Outlet/>
    </div>
  );
}