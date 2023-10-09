import { Outlet } from "@remix-run/react";
import { PlusIcon } from "@radix-ui/react-icons";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function Panel() {
  return (
  <div className="grid grid-cols-12 w-full h-full">
    <div className="col-span-2 h-full bg-gray-950">
      <div className="relative w-full">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="flex flex-row justify-around items-center border-gray-500 border-2 rounded-lg p-2">
            <PlusIcon className="h-[20px] w-auto"/><span className="text-2xl">New</span>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content side="right" align="start" className="flex flex-col bg-black items-center w-[25vw]">
            <DropdownMenu.Item>
              New Task
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              New Config
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              New File
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
    <div className="col-span-10 h-full">
      <Outlet/>
    </div>
  </div>
  );
}
