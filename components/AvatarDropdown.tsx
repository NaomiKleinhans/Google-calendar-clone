import React from "react";
// import { useAuth } from "./context/AuthContext";
import Image from "next/image";
import { useAuth } from "./context/AuthContext";

export const AvatarDropdown = () => {
  const { user, login, register, logout } = useAuth();

  return (
    <div className="relative">
      <button className="h-10 w-10 rounded-full bg-gray-200">
        {user ? (
          <Image
            src={user.avatar || "/default-avatar.png"}
            alt="Avatar"
            className="h-full w-full rounded-full"
            height={100}
            width={100}
          />
        ) : (
          <Image
            src="/default-avatar.png"
            alt="Default Avatar"
            className="h-full w-full rounded-full"
            height={100}
            width={100}
          />
        )}
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg">
        {!user ? (
          <>
            <button onClick={() => login("test@example.com", "password123")}>
              Login
            </button>
            <button
              onClick={() =>
                register("testuser", "test@example.com", "password123")
              }
            >
              Register
            </button>
          </>
        ) : (
          <>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};
