import Stack from '@mui/material/Stack';
import { useState, useRef, useEffect } from 'react';
import Hls from 'hls.js';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import Replay10Icon from '@mui/icons-material/Replay10';
import Forward10Icon from '@mui/icons-material/Forward10';

import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { TotalSToMmss } from '@/utils/format-time';

import TvProgress from './TvProgress';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

import Slider from '@mui/material/Slider';

const StyledVideo = styled('video')({
    width: '100%',
    height: '100%',
    display: 'block',
});
function VideoComp({ currentUrl }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [cacheWidth, setCacheWidth] = useState<number>(0);

    const videoRef = useRef(null);
    const hlsRef = useRef(null);

    const [isFullScreen, setIsFullScreen] = useState(false);
    const [volume, setVolume] = useState(0.5);
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

    const propgressEvent = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        const buffered = videoRef.current.buffered!;
        let bufferedEnd: number;
        try {
            bufferedEnd = buffered.end(buffered.length - 1);
        }
        catch (err) {
            bufferedEnd = 0;
        }
        setCacheWidth((bufferedEnd / duration) * 100);
    }
    const loadedmetadata = (e: any) => {
    }
    const durationchange = (e: any) => {
        setDuration(videoRef.current.duration);
    }
    const timeUpdate = (e: any) => {
        setCurrentTime(videoRef.current.currentTime);
    }
    const errorPlay = (e: any) => {
        console.log('errorPlay', e);
        setIsPlaying(false);
    }
    const startPlay = (e: any) => {
        console.log('startPlay', e);
        videoRef.current.play();
        setIsPlaying(true);
    }
    const endPlay = (e: any) => {
        console.log('endPlay', e);
    }
    const pausePlay = (e: any) => {
        console.log('pausePlay', e);
        videoRef.current.pause();
        setIsPlaying(false);
    }

    const minus10 = () => {
        setCurrentTime(currentTime - 10);
        videoRef.current.currentTime -= 10;
    }
    const add10 = () => {
        setCurrentTime(currentTime + 10);
        videoRef.current.currentTime += 10;
    }

    const changeVolume = (e: Event, newValue: number | number[]) => {
        console.log('changeVolume', e, newValue);
        setVolume(newValue as number);
        videoRef.current.volume = newValue as number;
    }

    const changeCurrentTime = (e, value) => {
        console.log('changeCurrentTime', e, value);
        setCurrentTime(value);
        videoRef.current.currentTime = value;
    }

    return (
        <>
            <Stack className="video-comp-container">
                <Stack className="video-comp" direction="row" alignItems="center" position="relative" sx={{
                    width: '100%',
                    height: 'calc(100vh - 60px)',
                    backgroundColor: 'black',
                    color: '#fff'
                }}>
                    <Stack position="absolute" left={6} zIndex={100}><IconButton color="inherit" onClick={minus10}><Replay10Icon fontSize='large' /></IconButton></Stack>
                    <StyledVideo ref={videoRef} src={currentUrl}
                        onProgress={propgressEvent} onLoadedMetadata={loadedmetadata} onDurationChange={durationchange}
                        preload="auto" onTimeUpdate={timeUpdate} onError={errorPlay} onPlay={startPlay} onEnded={endPlay}
                        onPause={pausePlay} >
                    </StyledVideo>
                    <Stack position="absolute" right={6} zIndex={100}>{currentTime < duration - 10 && <IconButton color="inherit" onClick={add10}><Forward10Icon fontSize='large' /></IconButton>}</Stack>

                </Stack>

                <Stack className="video-control" justifyContent="space-between" alignItems="center" sx={{
                    width: '100%',
                    height: '70px',
                    backgroundColor: 'black',
                    color: '#fff'
                }}>
                    <TvProgress currentTime={currentTime} duration={duration} cacheWidth={cacheWidth} changeCurrentTime={changeCurrentTime} />
           
                    <Stack direction="row" alignItems="center">
                        <IconButton color="inherit" onClick={ isPlaying ? pausePlay : startPlay}>{isPlaying ? <PauseOutlinedIcon /> : <PlayArrowOutlinedIcon />}</IconButton>
                        <Stack direction="row" alignItems="center">
                            <span>{TotalSToMmss(currentTime)} / {TotalSToMmss(duration)}</span>
                        </Stack>

                        <Stack direction="row" alignItems="center">
                            <IconButton color="inherit">{ volume > 0 ? <VolumeUpIcon /> : <VolumeOffIcon />}</IconButton>
                            <Slider
                                sx={{ width: 100 }}
                                value={typeof volume === 'number' ? volume : 0}
                                onChange={changeVolume}
                                valueLabelDisplay="auto"
                                size="small"
                            />
                            {/* <Stack direction="row" alignItems="center">
                                <span>{volume}</span>
                            </Stack> */}
                        </Stack>
                        {/* <Stack direction="row" alignItems="center">
                            <IconButton color="inherit" onClick={() => setIsFullScreen(!isFullScreen)}>{isFullScreen ? '退出全屏' : '全屏'}</IconButton>
                        </Stack> */}
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default VideoComp;