import { auth } from "./login.server";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import prisma from "./db.server";
import FileIcon from "~/components/FileIcon";

export const loader = async ( { request } : LoaderFunctionArgs) => {
  const profile = await auth.isAuthenticated(request, {
    failureRedirect: "/",
  });

  const filesTasks  = await prisma.user.findUnique({
    where: {
      auth0Id: profile.id
    },
    select : {
      files : {
        select : {
          id: true,
          name: true,
          type: true,
        }
      },
      tasks : {
        select : {
          name: true,
          status: true,
        }
      }
    }
  });

  if(filesTasks === null) {
    throw new Error("Could not fetch files and tasks.")
  }

  return filesTasks;
}

interface FileCardProps {
  name: string,
  type: string,
  id: number | null,
}

const FileCard = ({name, type, id} : FileCardProps) => {
  return (
    <Link to={`/panel/files/${id}`}>
      <div className="h-full w-full">
        <FileIcon type={type}/>
        <div className="mt-2 whitespace-normal break-all text-center text-gray-950">
            {name}
        </div>
      </div>
    </Link>
  )
}

export default function Index() {
  const {files} = useLoaderData<typeof loader>();

  return (<div className="p-8 w-full h-full grid grid-cols-6 grid-rows-6 gap-12">
    {files.map((file, idx) => file ? <FileCard {...file} key={file.id}/> : <></>)}
  </div>);
}