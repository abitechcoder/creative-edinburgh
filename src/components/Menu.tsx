import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Directory",
        href: "/directories",
        visible: ["admin", "staff"],
      },
      {
        icon: "/student.png",
        label: "Staff",
        href: "/staffs",
        visible: ["admin", "staff"],
      },
      {
        icon: "/parent.png",
        label: "Subscription",
        href: "/subscription",
        visible: ["admin", "teacher"],
      },
      // {
      //   icon: "/subject.png",
      //   label: "Subjects",
      //   href: "/subjects",
      //   visible: ["admin"],
      // },
      // {
      //   icon: "/class.png",
      //   label: "Classes",
      //   href: "/classes",
      //   visible: ["admin", "teacher"],
      // },
      // {
      //   icon: "/lesson.png",
      //   label: "Lessons",
      //   href: "/lessons",
      //   visible: ["admin", "teacher"],
      // },
      // {
      //   icon: "/exam.png",
      //   label: "Exams",
      //   href: "/exams",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: "/assignment.png",
      //   label: "Assignments",
      //   href: "/assignments",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: "/result.png",
      //   label: "Results",
      //   href: "/results",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      // {
      //   icon: "/attendance.png",
      //   label: "Attendance",
      //   href: "/attendance",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/announcements",
        visible: ["admin", "teacher", "student", "parent"],
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
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
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
