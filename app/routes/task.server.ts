import { ActionFunctionArgs } from "@remix-run/node";

export const action = async ( { request } : ActionFunctionArgs ) => {
  const body = await request.formData();
  
}