import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function GuestLayout() {
  const { currentUser, userToken } = useStateContext();

  if (userToken) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="w-auto h-10 mx-auto"
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
