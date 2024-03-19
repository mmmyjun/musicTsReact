import Stack from '@mui/material/Stack';
import { useState, useRef, useEffect } from 'react';
import Hls from 'hls.js';


function VideoComp({ currentUrl, currentTime, duration, volume, isPlaying }) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const videoRef = useRef(null);
    const hlsRef = useRef(null);
    useEffect(() => {
        hlsRef.current = new Hls();
        hlsRef.current.attachMedia(videoRef.current);
    }, []);
    useEffect(() => {
        if (Hls.isSupported()) {
            hlsRef.current.loadSource(currentUrl);
        }
        else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
            videoRef.current.src = currentUrl;
        }
    }, [currentUrl]);

    const propgressEvent = (e: any) => {
        console.log('propgressEvent', e);
    }
    const loadedmetadata = (e: any) => {
        console.log('loadedmetadata', e);
    }
    const durationchange = (e: any) => {
        console.log('durationchange', e);
    }
    const timeUpdate = (e: any) => {
        console.log('timeUpdate', e);
    }
    const errorPlay = (e: any) => {
        console.log('errorPlay', e);
    }
    const startPlay = (e: any) => {
        console.log('startPlay', e);
    }
    const endPlay = (e: any) => {
        console.log('endPlay', e);
    }
    const pausePlay = (e: any) => {
        console.log('pausePlay', e);
    }

    return (
        <Stack className="video-comp" sx={{
            width: '100%',
            height: 'calc(100vh - 60px)',
        }}>
            <video ref={videoRef} controls src={currentUrl} style={{
                width: '100%',
                height: '100%',            
            }}
                onProgress={propgressEvent} onLoadedMetadata={loadedmetadata} onDurationChange={durationchange}
                preload="auto" onTimeUpdate={timeUpdate} onError={errorPlay} onPlay={startPlay} onEnded={endPlay}
                onPause={pausePlay} >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Stack>
    );
}

export default VideoComp;