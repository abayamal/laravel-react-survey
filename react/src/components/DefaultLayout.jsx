import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink, Outlet } from "react-router-dom";
import { userStateContext } from "../contexts/ContextProvider";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", to: "/" },
  { name: "Surveys", to: "/surveys" },
];
const userNavigation = [{ name: "Sign out", href: "#" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DefaultLayout() {
  const { currentUser } = userStateContext();
  const logout = (ev) => {
    ev.preventDefault();
    console.log("logout");
  };
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    className="size-8"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center ml-4 md:ml-6">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <UserIcon className="w-8 h-8 p-2 text-white rounded-full bg-black/25" />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <MenuItem>
                        <a
                          href="#"
                          onClick={(ev) => logout(ev)}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                        >
                          Sign Out
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="flex -mr-2 md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md group hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  aria-current={item.current ? "page" : undefined}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <UserIcon className="w-8 h-8 p-2 text-white rounded-full bg-black/25" />
                </div>
                <div className="ml-3">
                  <div className="font-medium text-white text-base/5">
                    {currentUser.name}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {currentUser.email}
                  </div>
                </div>
              </div>
              <div className="px-2 mt-3 space-y-1">
                <DisclosureButton
                  href="#"
                  onClick={(ev) => logout(ev)}
                  className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Sign Out
                </DisclosureButton>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <Outlet />
      </div>
    </>
  );
}
