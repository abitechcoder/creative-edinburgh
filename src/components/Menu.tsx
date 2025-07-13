import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Dashboard",
        href: "/",
        visible: ["admin", "partner"],
      },
      {
        icon: "/cooperation.png",
        label: "Directory",
        href: "/directories",
        visible: ["admin", "partner"],
      },

      {
        icon: "/cooperation.png",
        label: "Member",
        href: "/member",
        visible: ["member"],
      },
      {
        icon: "/pie.png",
        label: "Sectors",
        href: "/sectors",
        visible: ["admin", "partner"],
      },
      {
        icon: "/student.png",
        label: "Users",
        href: "/users",
        visible: ["admin", "partner"],
      },
      {
        icon: "/subscription.png",
        label: "Subscription",
        href: "/subscription",
        visible: ["admin", "partner", "member"],
      },

      {
        icon: "/calendar.png",
        label: "Events",
        href: "/events",
        visible: ["admin", "partner", "member"],
      },

      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/announcements",
        visible: ["admin", "partner", "member"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "partner", "member"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "member"],
      },
    ],
  },
];

const Menu = async () => {
  const user = await currentUser();
  const role = user?.publicMetadata.role as string;
  // console.log(user);
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={`/app${item.href}`}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-SkyBlueLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
