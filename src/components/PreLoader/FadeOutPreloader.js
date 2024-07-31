import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

function FadeOutPreloader({wrapperRef, loading,children}) {
    const [ctx, setCtx] = useState(null);
    const [gaspAnimation, setGaspAnimation] = useState(gsap.timeline({
        ease: 'power3.easeOut',
    }));

    function fadeOut() {
        if (gaspAnimation) {
            gaspAnimation
                .to('.js-text-container1 span', {
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
   
    useEffect(()=>{
        fadeOut()
    },[])
 
  
    return (<>
        
    </>)
}


export default (FadeOutPreloader);