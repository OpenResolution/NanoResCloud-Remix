import { FileIcon as FileIconIcon } from "@radix-ui/react-icons";

interface FileIconProps {
  type: string
}

const FileIcon = ({type} : FileIconProps ) => {
  switch (type) {
    case "mat" : return <FileIconIcon className="w-full bg-gray-200 h-auto text-gray-500 flex-initial rounded-xl"/>;
    case "json" : return <FileIconIcon className="w-full bg-gray-200 h-auto text-gray-500 flex-initial rounded-xl"/>;
  }
}

export type { FileIconProps };
export default FileIcon;