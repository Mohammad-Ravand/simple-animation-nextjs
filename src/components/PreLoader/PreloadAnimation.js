import React, { useEffect, useInsertionEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGlobalContext } from '@/context/GlobalContext';

export default function PreloadAnimation({loading, children }) {
    const wrapperRef = useRef(null);
    const [hideChildren,setHideChildren] = useState(false);
    const [gaspAnimation, setGaspAnimation] = useState(gsap.timeline({
        ease: 'power3.easeOut',
    }));

    useEffect(()=>{
        if(loading==false){
            fadeOut()
            setTimeout(() => {
                setHideChildren(true)
            }, 3000);
        }
    },[loading])

    const site = useGlobalContext();

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

            setTimeout(() => {
                site.setLoadingCompleted(true);
            }, 2000);
        }
    }

    return (<>
        <div ref={wrapperRef} className="fixed inset-0 z-preloader bg-[#111] flex flex-col justify-center items-center">
                <>
                    {React.Children.map(children, (child, index) =>
                        React.cloneElement(child, { wrapperRef,fadeOut:fadeOut,loading})
                    )}
                </>

        </div>
    </>)
}
