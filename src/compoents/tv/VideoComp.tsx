import Stack from '@mui/material/Stack';
import { useState, useRef, useEffect } from 'react';
import Hls from 'hls.js';
import { styled } from '@mui/material/styles';

const StyledVideo = styled('video')({
    width: '100%',
    height: '100%',
    display: 'block',
});
function VideoComp({ currentUrl, currentTime, duration, volume, isPlaying }) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const videoRef = useRef(null);
    const hlsRef = useRef(null);
    useEffect(() => {
        hlsRef.current = new Hls();
    }, []);
    useEffect(() => {
        if (Hls.isSupported()) {
            if (currentUrl) {
                hlsRef.current.loadSource(currentUrl);
                hlsRef.current.attachMedia(videoRef.current);
            }
        }
        else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
            if (currentUrl) {
                videoRef.current.src = currentUrl;
            }
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
            backgroundColor: 'black',
        }}>
            <StyledVideo ref={videoRef} controls src={currentUrl}
                onProgress={propgressEvent} onLoadedMetadata={loadedmetadata} onDurationChange={durationchange}
                preload="auto" onTimeUpdate={timeUpdate} onError={errorPlay} onPlay={startPlay} onEnded={endPlay}
                onPause={pausePlay} >
            </StyledVideo>
        </Stack>
    );
}

export default VideoComp;