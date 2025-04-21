import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";

const MyDropDownLink = ({ title, links }: any) => {
  return (
    <Menu>
      <MenuButton className="hover:cursor-pointer text-base font-medium relative group uppercase">
        {title}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-tertiary transition-all duration-300 group-hover:w-full" />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="flex flex-col gap-3 bg-white shadow-lg p-4 mt-4 rounded-lg transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 z-50"
      >
        {links.map((link: any) => (
          <MenuItem key={link.id}>
            <Link
              className="text-base uppercase font-medium hover:text-tertiary"
              href={link.link}
            >
              {link.title}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default MyDropDownLink;
