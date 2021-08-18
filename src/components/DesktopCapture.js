import React, { useEffect, useRef } from 'react';
const { desktopCapturer } = window.require('electron');

export default function DesktopCapture() {
    const videoRef = useRef(null);

    useEffect(() => {
      desktopCapturer
        .getSources({ types: ['window', 'screen'] })
        .then( async sources => {
          console.log(sources);

          for (const source of sources) {
            //const source = sources[3];
            if (source.name === 'Entire Screen') {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                  mandatory: {
                    chromeMediaSource: 'desktop',
                    chromeMediaSourceId: source.id,
                    minWidth: 800,
                    maxWidth: 800,
                    minHeight: 600,
                    maxHeight: 600
                  }
                }
              });
            
              const video = videoRef.current;
              video.srcObject = stream;
              video.play();
            }
           }
         });
    
    }, []);

    return (
        <div>
            <h1>Desktop capture below</h1>
            <video ref={videoRef}></video>
        </div>
    )
}
