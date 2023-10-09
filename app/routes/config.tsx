import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import prisma from "./db.server";

interface SMLMTaskConfig {
  na: number;
  waveLength: number;
  pixelSize: number;
  psfSigma: number;
  boxsz: number;
  intstyThreshold: number;
  distThreshold: number;
}

const smlmTaskConfigDefault = () => {
  const smlmTaskConfigDefault : SMLMTaskConfig = {
    na:1.35,
    waveLength:0.635,
    pixelSize:0.12,
    psfSigma:1.5,
    boxsz:7,
    intstyThreshold:20,
    distThreshold:4
  };
  return {...smlmTaskConfigDefault} as SMLMTaskConfig;
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.formData();
  const fileId = parseInt(body.get("fileId"));
  if(fileId === null) {
    throw new Error("fileId is null.")
  }

  let formObj = smlmTaskConfigDefault();
  for(const [key, value] of body.entries()) {
    if(key in formObj) {
      formObj[key] = value;
    }
  }

  const file = await prisma.file.update({
    where: {
      id: fileId,
    }, 
    data: {
      content: JSON.stringify(formObj)
    }
  });

  return redirect(`/panel/files/${file.id}`);
};

export type { SMLMTaskConfig }