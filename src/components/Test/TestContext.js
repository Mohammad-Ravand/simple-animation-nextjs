"use client"

import React from "react";
import { useGlobalContext } from "@/context/GlobalContext";

export default function TestContext() {
  const { state, updateUser, toggleTheme } = useGlobalContext();
  return (
    <>
      <div>
        <p>
          Current User: {state.user ? state.user.name : "No user logged in"}
        </p>
        <p>Current Theme: {state.theme}</p>
        <button className="rounded-md bg-orange-400 px-5 m-4" onClick={() => updateUser({ name: "John Doe" })}>
          Update User
        </button>
        <button  className="rounded-md bg-blue-400 px-5 m-4" onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
}
