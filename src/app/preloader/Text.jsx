import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGlobalContext } from '@/context/GlobalContext';

const Text = ({wrapperRef, loading,fadeOut,children}) => {
    const [ctx, setCtx] = useState(null);
    const [gaspAnimation, setGaspAnimation] = useState(gsap.timeline({
        ease: 'power3.easeOut',
    }));
    
    const duration  = loading==true ? 60*60*60 : 3;

    useEffect(() => {
                
        const anim = () => {
            gaspAnimation.set('.js-text-container1', { opacity: 1 })
                .from('.js-text-container1 span', {
                    duration: 1.5,
                    delay: 1,
                    y: 70,
                    skewY: 10,
                    stagger: 0.4,
                })
            .to('.js-text-container1 span', {
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



 
  
    return (<>
        <div
            className="flex items-center justify-center1 gap-6 overflow-hidden uppercase leading-none h-[60px] opacity-0 js-text-container1">
            <span>Diamonds</span>
            <span>Club</span>
        </div>
    </>)
}

export default Text