"use client"
import React, { useEffect, useState } from 'react';
import { LoadQueue } from 'preload-js';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";

import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from '../PreLoader/AnimatedProgressProvider';
import { useGlobalContext } from '@/context/GlobalContext';
const PreLoadAssets = ({ images, videos=[], completed }) => {
    const site = useGlobalContext();
    if(site.stopLoadingAssets==true){
        return;
    }
    
    let progress= 0;
    const [assets, setAssets] = useState({ images: [], videos: [] });

    useEffect(() => {
        const queue = new LoadQueue();

        // Set up event listeners
        const handleProgress = (event) => {
            if (event.progress * 100 > progress) {
                
                progress  =(event.progress * 100);
            }
        };

        const handleComplete = () => {
            const loadedImages = images?.map((image, index) => queue.getResult(`image${index + 1}`)) || [];
            const loadedVideos = videos?.map((video, index) => queue.getResult(`video${index + 1}`)) || [];

            // setAssets({ images: loadedImages, videos: loadedVideos });
            completed({ images: loadedImages, videos: loadedVideos });  // Call the completed callback
        };

        queue.on('progress', handleProgress);
        queue.on('complete', handleComplete);

        // Load the assets
        queue.loadManifest([
            ...(images?.map((image, index) => ({ id: `image${index + 1}`, src: image })) || []),
            ...(videos?.map((video, index) => ({ id: `video${index + 1}`, src: video })) || []),
        ]);

        // Cleanup event listeners on unmount
        return () => {
            queue.off('progress', handleProgress);
            queue.off('complete', handleComplete);
        };
    }, [images, videos, completed]);

    return (
        <div>
            {progress < 100 && <>
                <div style={{ width: 60, height: 60 }}>
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={66}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                        repeat
                    >



                        {(value) => <>
                            <CircularProgressbar value={progress / 100} maxValue={1}
                                styles={buildStyles({
                                    textColor: "#fff",
                                    pathColor: "#fff",
                                    trailColor: "transparent"
                                })}


                                text={`${parseInt(progress)}%`} />
                        </>
                        }

                    </AnimatedProgressProvider>
                </div>
            </>
            }

        </div>
    );
};

export default PreLoadAssets;
