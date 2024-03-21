import Stack from '@mui/material/Stack';
import { useState, useRef, useEffect } from 'react';
import Hls from 'hls.js';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import Replay10Icon from '@mui/icons-material/Replay10';
import Forward10Icon from '@mui/icons-material/Forward10';

const StyledVideo = styled('video')({
    width: '100%',
    height: '100%',
    display: 'block',
});
function VideoComp({ currentUrl, volume, isPlaying }) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

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
        setDuration(videoRef.current.duration);
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

    const minus10 = () => {
        // currentTime -= 10;
        setCurrentTime(currentTime - 10);
        videoRef.current.currentTime -= 10;
    }
    const add10 = () => {
        // currentTime += 10;
        setCurrentTime(currentTime + 10);
        videoRef.current.currentTime += 10;
    }

    return (
        <Stack className="video-comp" direction="row" alignItems="center" position="relative" sx={{
            width: '100%',
            height: 'calc(100vh - 60px)',
            backgroundColor: 'black',
            color: '#fff'
        }}>
            <Stack position="absolute" left={6} zIndex={100}><IconButton color="inherit" onClick={ minus10 }><Replay10Icon fontSize='large' /></IconButton></Stack>

            <StyledVideo ref={videoRef} controls src={currentUrl}
                onProgress={propgressEvent} onLoadedMetadata={loadedmetadata} onDurationChange={durationchange}
                preload="auto" onTimeUpdate={timeUpdate} onError={errorPlay} onPlay={startPlay} onEnded={endPlay}
                onPause={pausePlay} >
            </StyledVideo>

            <Stack position="absolute" right={6} zIndex={100}>{currentTime < duration - 10 && <IconButton color="inherit" onClick={ add10 }><Forward10Icon fontSize='large' /></IconButton>}</Stack>
        </Stack>
    );
}

export default VideoComp;