import { useGlobalContext } from "@/context/GlobalContext";
import { gsap } from "gsap";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const PreloadAnimation = dynamic(() => import("./PreloadAnimation"), {
  ssr: false,
});

const FadeOutPreloader = dynamic(() => import("./FadeOutPreloader"), {
  ssr: false,
});
const CircleLoadingPreloaderAnimation = dynamic(
  () => import("./CircleLoadingPreloaderAnimation"),
  {
    ssr: false,
  }
);
const TextPreloaderAnimation = dynamic(
  () => import("./TextPreloaderAnimation"),
  {
    ssr: false,
  }
);

const Preloader = ({ loading = false, children }) => {
  const site = useGlobalContext();
  if (site.loadingCompleted == true) {
    return;
  }
  const wrapperRef = useRef(null);
    
  return (
    <>
      <PreloadAnimation loading={loading}>
        <TextPreloaderAnimation
          wrapperRef={wrapperRef}
          loading={loading}
        ></TextPreloaderAnimation>
        <CircleLoadingPreloaderAnimation
          wrapperRef={wrapperRef}
          loading={loading}
        >
          {children}
        </CircleLoadingPreloaderAnimation>
      </PreloadAnimation>
    </>
  );
};

export default Preloader;
