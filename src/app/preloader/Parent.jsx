import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const Parent = ({children}) => {
  const [loading, setLoading] = useState(true);
  const wrapperRef = useRef(null);
  let ctx = null;
  let ctx2 = null;
  const [tl, setTl] = useState(
    gsap.timeline({
      ease: "power3.easeOut",
    })
  );
  const [tl2, setTl2] = useState(
    gsap.timeline({
      ease: "power3.easeOut",
    })
  );

  useEffect(() => {
    const anim = () => {
      if (loading == true) {
        tl.set(".js-text-container", { opacity: 1 })
          .from(".js-text-container span", {
            duration: 1.5,
            delay: 1,
            y: 70,
            skewY: 10,
            stagger: 0.4,
          })
          .to(
            ".js-text-container span",
            {
              duration: 1,
              delay: 10000,
              y: 70,
              skewY: -20,
              stagger: 0.2,
            },
            ">.5"
          )
          .to(
            wrapperRef.current,
            {
              duration: 1.5,
              y: "100%",
            },
            "<.8"
          );
               
      } else {
        tl.set(".js-text-container", { opacity: 1 })
          .from(".js-text-container span", {
            duration: 1.5,
            delay: 1,
            y: 70,
            skewY: 10,
            stagger: 0.4,
          })
          .to(
            ".js-text-container span",
            {
              duration: 13,
              delay: 1,
              y: 70,
              skewY: -20,
              stagger: 0.2,
            },
            ">.5"
          )
          .to(
            wrapperRef.current,
            {
              duration: 1.5,
              y: "100%",
            },
            "<.8"
          );

          
      }
    };

    const anim2= ()=>{
        if (loading == true) {
            tl2.set(".js-load-container", { opacity: 1 })
              .from(".js-load-container span", {
                duration: 3.5,
                delay: 1,
                y: 70,
                skewY: 10,
                stagger: 0.4,
              })
              .to(
                ".js-load-container span",
                {
                  duration: 1,
                  delay: 10000,
                  y: 70,
                  skewY: -20,
                  stagger: 0.2,
                },
                ">.5"
              )
              .to(
                wrapperRef.current,
                {
                  duration: 1.5,
                  y: "100%",
                },
                "<.8"
              );
                   
          } else {
            tl2.set(".js-load-container", { opacity: 1 })
              .from(".js-load-container span", {
                duration: 3.5,
                delay: 1,
                y: 70,
                skewY: 10,
                stagger: 0.4,
              })
              .to(
                ".js-load-container span",
                {
                  duration: 1,
                  delay: 1,
                  y: 70,
                  skewY: -20,
                  stagger: 0.2,
                },
                ">.5"
              )
              .to(
                wrapperRef.current,
                {
                  duration: 1.5,
                  y: "100%",
                },
                "<.8"
              );
    
              
          }
    }

    ctx = gsap.context(() => {
      anim();
      anim2();
    }, wrapperRef.current);
    

    return () => {
      ctx && ctx.revert();
    };
  }, [loading]);

  function hide() {
    setLoading(!loading);
    setTimeout(() => {
      //set global context preloaded=true
    }, 5000);
  }

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-preloader bg-[#111] flex flex-col justify-center items-center"
    >
      <div className="flex items-center justify-center gap-6 overflow-hidden uppercase leading-none h-[60px] opacity-0 js-text-container">
        <span>Diamonds</span>
        <span>Club</span>
        <span>
          <button
            className="text-white rounded-md px-5 py-3 bg-orange-500"
            onClick={hide}
          >
            hide
          </button>
        </span>
      </div>
      <div className="flex items-center justify-center gap-6 overflow-hidden uppercase leading-none h-[60px] opacity-0 js-load-container">
        <span>{children}
        </span>
      </div>
    </div>
  );
};

export default Parent;
