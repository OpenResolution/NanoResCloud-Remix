import type { LoaderFunctionArgs } from "@remix-run/node";
import { auth } from "./login.server";
import prisma from "./db.server";
import { Form, useLoaderData, Link } from "@remix-run/react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import FileIcon from "~/components/FileIcon";
import prettyBytes from "pretty-bytes";
import { JsonView, allExpanded, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import { json } from "@remix-run/node";
import type { SMLMTaskConfig } from "./config";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  await auth.isAuthenticated(request, {
    failureRedirect: "/",
  });

  if (params.fileId === undefined) {
    throw new Error("You must provide a valid file id.");
  }

  let fileDetails = await prisma.file.findUnique({
    where: {
      id: parseInt(params.fileId),
    },
  });

  if (fileDetails === null) {
    throw new Error("No such file exists.");
  }

  if (isTaskJSONFile(fileDetails.name)) {
    if (fileDetails.content === null) {
      throw new Error("task config file content invalid.");
    }
    const taskConfigObject = JSON.parse(fileDetails.content);
    const sourceFileId: number = taskConfigObject["sourceFileId"];
    const configFileId: number = taskConfigObject["configFileId"];
    let sourceFile = await prisma.file.findUnique({
      where: {
        id: sourceFileId,
      },
    });
    let configFile = await prisma.file.findUnique({
      where: {
        id: configFileId,
      },
    });
    return json({
      file: fileDetails,
      fileId: parseInt(params.fileId),
      relatedFiles: {
        sourceFile,
        configFile,
      },
    });
  } else {
    return json({
      file: fileDetails,
      fileId: parseInt(params.fileId),
      relatedFiles: {
        sourceFile: null,
        configFile: null,
      },
    });
  }
};

interface NumberInputProps {
  name: string;
  defaultValue: number;
}

const NumberInput = ({ name, defaultValue }: NumberInputProps) => (
  <div className="flex flex-row justify-between items-center m-4">
    <div className="m-auto text-base">{name}</div>
    <label>
      <input
        className="border-2 border-gray-500 p-1"
        name={name}
        type="text"
        defaultValue={defaultValue}
      />
    </label>
  </div>
);

function MatFile() {
  const { file } = useLoaderData<typeof loader>();

  const timeFormat = (timeStamp: string) => {
    return Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "medium",
    }).format(new Date(timeStamp));
  };

  return (
    <div className="px-4 py-10 w-full h-full flex justify-around items-start">
      <div className="w-3/4">
        <div className="p-10 w-1/2 m-auto">
          <FileIcon type={file.type}></FileIcon>
        </div>
        <div className="flex flex-col flex-wrap justify-around items-center">
          <div className="text-4xl text-gray-950">{file.name}</div>
          {file.size && (
            <div className="text-xl text-gray-400">
              {prettyBytes(file.size)}
            </div>
          )}
          <div className="text-xl text-gray-400">
            <span className="text-gray-950">Format: </span>
            {file.type}
          </div>
          <div className="text-xl text-gray-400">
            <span className="text-gray-950">Created: </span>
            {timeFormat(file.createdAt)}
          </div>
          <div className="text-xl text-gray-400">
            <span className="text-gray-950">Last Modified: </span>
            {timeFormat(file.updatedAt)}
          </div>
        </div>
      </div>
    </div>
  );
}

interface FileDescriptionProps {
  file: {
    type: string | null;
    name: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  };
}

const FileDescription = ({ file }: FileDescriptionProps) => {
  const timeFormat = (timeStamp: string) => {
    return Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(timeStamp));
  };

  return (
    <div>
      <div className="p-4 m-auto w-3/4">
        <FileIcon type={file.type ? file.type : "mat"}></FileIcon>
      </div>
      <div className="p-4 flex flex-col justify-center items-start">
        <div className="text-lg text-gray-950">{file.name}</div>
        {file.size && (
          <div className="text-base text-gray-400">
            {prettyBytes(file.size)}
          </div>
        )}
        <div className="text-base text-gray-400">
          <span className="text-gray-950">Format: </span>
          {file.type}
        </div>
        {file.createdAt && (
          <div className="text-base text-gray-400">
            <span className="text-gray-950">Created: </span>
            {timeFormat(file.createdAt)}
          </div>
        )}
        {file.updatedAt && (
          <div className="text-base text-gray-400">
            <span className="text-gray-950">Last Modified: </span>
            {timeFormat(file.updatedAt)}
          </div>
        )}
      </div>
    </div>
  );
};

function TaskJSONFile() {
  const { file, relatedFiles } = useLoaderData<typeof loader>();
  if (relatedFiles.sourceFile === null || relatedFiles.configFile === null) {
    throw new Error("Invalid task.json file");
  }

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 w-full h-min">
        <Link
          to={`/panel/files/${relatedFiles.sourceFile.id}`}
          className="col-span-1 border-gray-450 m-10 text-xl flex flex-col justify-start items-center border-2 border-white hover:border-2 hover:border-gray-500 hover:border-dashed"
        >
          <div className="text-2xl text-gray-950">Source File</div>
          <FileDescription file={relatedFiles.sourceFile} />
        </Link>

        <Link
          to={`/panel/files/${relatedFiles.configFile.id}`}
          className="col-span-1 border-gray-450 m-10 text-xl flex flex-col justify-start items-center border-2 border-white hover:border-2 hover:border-gray-500 hover:border-dashed"
        >
          <div className="text-2xl text-gray-950">Config File</div>
          <FileDescription file={relatedFiles.configFile} />
        </Link>
      </div>
      <div className="w-full">
        <Form method="post" action="/createTask">
          <div className="flex flex-col w-full h-full p-4 text-gray-950">
            <button type="submit" className="border-2 rounded-xl px-2 py-4">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>

  );
}

const isConfigJSONFile = (fileName: string) => {
  const parts = fileName.split(".");
  return (
    parts.length >= 3 &&
    parts[parts.length - 1] === "json" &&
    parts[parts.length - 2] === "config"
  );
};

const isTaskJSONFile = (fileName: string) => {
  const parts = fileName.split(".");
  return (
    parts.length >= 3 &&
    parts[parts.length - 1] === "json" &&
    parts[parts.length - 2] === "task"
  );
};

function JSONFile() {
  const { file } = useLoaderData<typeof loader>();
  const fileName = file.name;
  if (isConfigJSONFile(fileName)) {
    return <ConfigJSONFile />;
  } else if (isTaskJSONFile(fileName)) {
    return <TaskJSONFile />;
  } else {
    throw new Error("Unsupported json file.");
  }
}

function ConfigJSONFile() {
  const { file, fileId } = useLoaderData<typeof loader>();

  const timeFormat = (timeStamp: string) => {
    return Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(timeStamp));
  };

  const fileJSON: SMLMTaskConfig = file.content ? JSON.parse(file.content) : {};

  return (
    <div className="grid grid-cols-9 h-full w-full">
      <div className="col-span-6 border-gray-450 border-r-2 p-4 text-xl">
        <JsonView
          data={fileJSON}
          shouldExpandNode={allExpanded}
          style={defaultStyles}
        />
        <Form method="post" action="/config">
          <div className="flex flex-col w-full h-full p-4 text-gray-950">
            <input
              type="hidden"
              name="fileId"
              defaultValue={fileId ? fileId : -1}
            ></input>
            {Object.entries(fileJSON).map(([key, value], idx) => {
              return <NumberInput name={key} defaultValue={value} key={key} />;
            })}
            <button type="submit" className="border-2 rounded-xl px-2 py-4">
              Submit
            </button>
          </div>
        </Form>
      </div>
      <div className="col-span-3 col-end-10">
        <div className="p-4 m-auto w-3/4">
          <FileIcon type={file.type}></FileIcon>
        </div>
        <div className="p-4 flex flex-col justify-center items-start">
          <div className="text-lg text-gray-950">{file.name}</div>
          {file.size && (
            <div className="text-base text-gray-400">
              {prettyBytes(file.size)}
            </div>
          )}
          <div className="text-base text-gray-400">
            <span className="text-gray-950">Format: </span>
            {file.type}
          </div>
          <div className="text-base text-gray-400">
            <span className="text-gray-950">Created: </span>
            {timeFormat(file.createdAt)}
          </div>
          <div className="text-base text-gray-400">
            <span className="text-gray-950">Last Modified: </span>
            {timeFormat(file.updatedAt)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function File() {
  const { file } = useLoaderData<typeof loader>();
  switch (file.type) {
    case "mat":
      return <MatFile />;
    case "json":
      return <JSONFile />;
    default:
      throw new Error("Unsupported file.");
  }
}

export function ErrorBoundary() {
  return (
    <div className="flex flex-row justify-around items-center w-full h-full">
      <div className="text-4xl text-gray-600">
        <div className="flex items-center justify-around m-5">
          <CrossCircledIcon className="h-[25vh] w-auto" />
          <div>Something went wrong.</div>
        </div>
      </div>
    </div>
  );
}
