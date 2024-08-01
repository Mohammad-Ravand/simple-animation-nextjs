"use client";
import TestContext from "@/components/Test/TestContext";
import TestContextInfo from "@/components/Test/TestContextInfo";
import Link from "next/link";

import React, { useState } from "react";
import NewPreLoader, { closePreloader } from "../components/NewPreloader";
import PreLoadAssets from "../components/NewPreloader/PreLoadAssets";
import { useGlobalContext } from "@/context/GlobalContext";

const page = () => {
  const images = [
    "https://i.pinimg.com/236x/01/9b/09/019b09cf14b410b825460976ab1dd76d.jpg",
    "https://i.pinimg.com/236x/85/c8/c6/85c8c607f16966289eb2016067873fc4.jpg",
    "https://i.pinimg.com/236x/05/c8/d7/05c8d7b290878c209eda1fc099cfa2b9.jpg",
    "https://i.pinimg.com/236x/21/45/9e/21459e2d2d426235204a9ae1b1e59e80.jpg",
    "https://i.pinimg.com/236x/db/8c/f6/db8cf6f9e07265ca7a50197bc4f1c481.jpg",
    "https://i.pinimg.com/236x/33/6e/17/336e172de50dbc785c7735764749a4a6.jpg",
    "https://i.pinimg.com/236x/ea/4f/a6/ea4fa6aca31260e0ef73db0acc8acfe4.jpg",
    "https://i.pinimg.com/474x/d3/5d/9e/d35d9e05f1757e1847e1fde0ae0b9051.jpg",
    "https://i.pinimg.com/474x/b6/58/13/b65813e1d941b36c1487142881f8a13c.jpg",
  ];
  const site = useGlobalContext();
  const [p, setP] = useState([]);
  function completed(value) {
    console.log(value);
    closePreloader(() => {
      site.setLoadingCompleted(true);
      setP(value);
    });
  }
  return (
    <>
      <div className="h-screen  bg-slate-500 text-center  ">
        <section>
          <h1 className="pt-10 pb-5 border-b text-3xl">Home Page</h1>
          <div>
            <Link className="m-2 text-blue-400" href="/one">
              One
            </Link>
            <Link className="m-2 text-blue-400" href="/two">
              Two
            </Link>
            <Link className="m-2 text-blue-400" href="/">
              Home
            </Link>
          </div>
        </section>

        {/* hide images */}
        <div className="flex gap-4 space-y-3 " >
          {images.map((image) => {
            return <img src={image} className="w-56" alt="" />;
          })}
        </div>

        {site.loadingCompleted == false && (
          <NewPreLoader>
            <PreLoadAssets
              images={images}
              completed={completed}
            ></PreLoadAssets>
          </NewPreLoader>
        )}
        {/* {site.loadingCompleted == true && (
          <>
            <h1>Main Conent To Show</h1>

            <div className="flex gap-4 space-y-3">
              {p.images.map((image) => {
                return <img src={image.src} className="w-56" alt="" />;
              })}
            </div>
          </>
        )} */}
      </div>
    </>
  );
};

export default page;
