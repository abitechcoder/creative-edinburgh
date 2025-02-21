import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from 'react-router'

const MyDropDownLink = ({ title, links }: any) => {
    return (
        <Menu>
            <MenuButton className="hover:cursor-pointer text-base font-medium relative group">
                {title}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-tertiary transition-all duration-300 group-hover:w-full" />
            </MenuButton>
            <MenuItems
                transition
                anchor="bottom end"
                className="flex flex-col gap-3 bg-white shadow-lg p-4 mt-4 rounded-lg transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
                {links.map((link: any) => <MenuItem key={link.id}>
                    <Link className="text-base uppercase font-medium hover:text-tertiary" to={link.link}>{link.title}</Link>
                </MenuItem>)}
            </MenuItems>
        </Menu>
    )
}

export default MyDropDownLink