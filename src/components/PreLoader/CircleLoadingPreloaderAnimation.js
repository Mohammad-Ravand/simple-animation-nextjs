import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

function CircleLoadingPreloaderAnimation({wrapperRef,loading, children}) {
    const [ctx, setCtx] = useState(null);
    const duration  = loading==true ? 60*60*60 : 3;

    const [gaspAnimation, setGaspAnimation] = useState(gsap.timeline({
        ease: 'power3.easeOut',
    }));
    useEffect(() => {
        const anim = () => {
    
            gaspAnimation.set('.js-text-container', { opacity: 1 })
                .from('.js-text-container span', {
                    duration: 1.5,
                    delay: 1.5,
                    y: 70,
                    skewY: 10,
                    stagger: 0.4,
                })
            .to('.js-text-container span', {
                duration: duration,
                y: 70,
                skewY: -20,
                stagger: 0.2,
            }, '>.5')
            // .to(wrapperRef.current, {
            //     duration: 1.5,
            //     y: '100%',
            // }, '<.8')
        }


        setCtx(gsap.context(() => {
            anim()
        }, wrapperRef.current));

        return () => {
            ctx && ctx.revert()
            
        }
    }, [])

   
    useEffect(()=>{
        if(loading==false){
            fadeOut()
        }
    },[loading])


    function fadeOut() {
        if (gaspAnimation) {
            gaspAnimation
                .to('.js-text-container span', {
                    duration: 1,
                    y: 70,
                    skewY: -20,
                    stagger: 0.2,
                }, '>.5')
                .to(wrapperRef.current, {
                    duration: 1.5,
                    y: '100%',
                }, '<.8')
        }
    }
   
 
  
    return (<>
        <div
            className="flex items-center justify-center gap-6 overflow-hidden uppercase leading-none h-[60px] opacity-0 js-text-container">
            <span>{loading==true && children}</span>
        </div>
    </>)
}
export default (CircleLoadingPreloaderAnimation);