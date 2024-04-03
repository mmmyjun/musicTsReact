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

import SkipNextIcon from '@mui/icons-material/SkipNext';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

import Slider from '@mui/material/Slider';

import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import SettingsIcon from '@mui/icons-material/Settings';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Fade from '@mui/material/Fade';

const StyledVideo = styled('video')({
    width: '100%',
    height: '100%',
    display: 'block',
});
function VideoComp({ currentUrl, changeToNextOne, nextUrl, isFullScreen, changeToggleFullscreen }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [cacheWidth, setCacheWidth] = useState<number>(0);

    const videoRef = useRef(null);
    const hlsRef = useRef(null);

    const [volume, setVolume] = useState(50);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [timer, setTimer] = useState<any>(null);
    const [showOtherWhenIsPlay, setShowOtherWhenIsPlay] = useState(true);
    const [hasSetVideo, setHasSetVideo] = useState(false);
    const listenKeyboard = (e) => {
        if (e.keyCode === 32) {
            e.preventDefault();
            if (!videoRef.current.paused) {
                pausePlay(e);
            } else {
                startPlay(e);
            }
        }
        if (e.keyCode === 37) {
            minus10();
        }
        if (e.keyCode === 39) {
            add10();
        }
        if (e.keyCode === 38) {
            e.preventDefault();
            if (videoRef.current.volume <= 0.9) {
                changeVolume(e, videoRef.current.volume * 100 + 10);
            }
        }
        if (e.keyCode === 40) {
            e.preventDefault();
            if (videoRef.current.volume >= 0.1) {
                changeVolume(e, videoRef.current.volume * 100 - 10);
            }
        }
    }
    useEffect(() => {
        hlsRef.current = new Hls();
        return () => {
            hlsRef.current.destroy();
            document.removeEventListener('keydown', listenKeyboard);
        }
    }, []);
    useEffect(() => {
        if (Hls.isSupported()) {
            if (currentUrl) {
                hlsRef.current.loadSource(currentUrl);
                hlsRef.current.attachMedia(videoRef.current);
                if (!hasSetVideo) {
                    // 监听空格键、左右键、上下键
                    document.addEventListener('keydown', listenKeyboard);
                    setHasSetVideo(true);
                    videoRef.current.volume = 0.5;
                }
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
        setPlaybackRate(videoRef.current.playbackRate);
        startPlay(e);
    }
    const timeUpdate = (e: any) => {
        setCurrentTime(videoRef.current.currentTime);
    }
    const errorPlay = (e: any) => {
        console.log('errorPlay', e);
        setIsPlaying(false);
    }

    const [showMute, setShowMute] = useState(false);
    const startPlay = async (e: any) => {
        console.log('startPlay', e);
        try {
            await videoRef.current.play();
            setIsPlaying(true);
        } catch (error) {
            if (error.name === 'NotAllowedError') {
                setShowMute(true);
                videoRef.current.muted = true;
                console.log('startPlay NotAllowedError:', error);
                setTimeout(startPlay, 0);
            }
        }

    }
    const endPlay = (e: any) => {
        console.log('endPlay', e);
        changeToNextOne();
    }
    const pausePlay = (e: any) => {
        console.log('pausePlay', e);
        videoRef.current.pause();
        setIsPlaying(false);
    }

    const minus10 = () => {
        if (videoRef.current.currentTime < 10) return;
        setCurrentTime(videoRef.current.currentTime - 10);
        videoRef.current.currentTime -= 10;
    }
    const add10 = () => {
        if (videoRef.current.currentTime + 10 >= videoRef.current.duration) return;
        setCurrentTime(videoRef.current.currentTime + 10);
        videoRef.current.currentTime += 10;
    }

    const skipToNext = () => {
        changeToNextOne();
    }

    const changeVolume = (e: Event, newValue: number | number[]) => {
        setVolume(newValue as number);
        videoRef.current.volume = newValue / 100 as number;
    }

    const changeCurrentTime = (e, value) => {
        console.log('changeCurrentTime', e, value);
        setCurrentTime(value);
        videoRef.current.currentTime = value;
    }
    const changeVolumeMute = () => {
        if (volume > 0) {
            setVolume(0);
            videoRef.current.volume = 0;
        } else {
            setVolume(50);
            videoRef.current.volume = 0.5;
        }
    }

    const togglePictureInPicture = () => {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        } else {
            videoRef.current.requestPictureInPicture();
        }
    }

    const hoverVideo = () => {
        setShowOtherWhenIsPlay(true);
        if (isPlaying) {
            if (timer) clearTimeout(timer);
            setTimer(setTimeout(() => {
                setShowOtherWhenIsPlay(false);
            }, 5000));
        }
    }

    return (
        <>
            <Stack className="video-comp-container" position="relative" >
                <Stack onMouseMove={hoverVideo} onClick={hoverVideo} className="video-comp" direction="row" alignItems="center" position="relative" sx={{
                    width: '100%',
                    height: isFullScreen ? '100vh' : 'calc(100vh - 60px)',
                    backgroundColor: 'black',
                    color: '#fff'
                }}>
                    <Fade in={showOtherWhenIsPlay} timeout={1000}><Stack position="absolute" left={6} zIndex={100}><IconButton color="inherit" onClick={minus10}><Replay10Icon fontSize='large' /></IconButton></Stack></Fade>
                    <IconButton sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 100,
                    }} color="inherit" onClick={isPlaying ? pausePlay : startPlay}>{isPlaying ? <Fade in={showOtherWhenIsPlay} timeout={1000}><PauseOutlinedIcon sx={{ width: '66px', height: '66px' }} /></Fade> : <PlayArrowOutlinedIcon sx={{ width: '66px', height: '66px' }} />}</IconButton>
                    <StyledVideo ref={videoRef} src={currentUrl}
                        onProgress={propgressEvent} onLoadedMetadata={loadedmetadata} onDurationChange={durationchange}
                        preload="auto" onTimeUpdate={timeUpdate} onError={errorPlay} onPlay={startPlay} onEnded={endPlay}
                        onPause={pausePlay} >
                    </StyledVideo>
                    <Fade in={showOtherWhenIsPlay} timeout={1000}><Stack position="absolute" right={6} zIndex={100}>{currentTime < duration - 10 && <IconButton color="inherit" onClick={add10}><Forward10Icon fontSize='large' /></IconButton>}</Stack></Fade>

                </Stack>

                {showMute && <Stack>取消静音</Stack>}

                <Fade in={showOtherWhenIsPlay} timeout={1000}>
                    <Stack className="video-control" position="absolute" bottom={0} alignItems="center" sx={{
                        width: '100%',
                        height: '70px',
                        color: '#fff'
                    }}>
                        <Stack direction="row" alignItems="center" width='100%'>
                            <Stack direction="row" alignItems="center" paddingX={2}><span>{TotalSToMmss(currentTime)}</span></Stack>
                            <TvProgress currentTime={currentTime} duration={duration} cacheWidth={cacheWidth} changeCurrentTime={changeCurrentTime} />
                            <Stack direction="row" alignItems="center" paddingX={2}><span>{TotalSToMmss(duration)}</span></Stack>
                        </Stack>

                        <Stack direction="row" alignItems="center" className='beblow-video-progress' justifyContent="space-between" width='100%'>
                            <Stack direction="row" alignItems="center">
                                <IconButton color="inherit" sx={{ marginLeft: '6px' }} onClick={isPlaying ? pausePlay : startPlay}>{isPlaying ? <PauseOutlinedIcon /> : <PlayArrowOutlinedIcon />}</IconButton>
                                {nextUrl && <Stack direction="row" alignItems="center">
                                    <IconButton color="inherit" onClick={skipToNext}><SkipNextIcon /></IconButton>
                                </Stack>
                                }
                                <Stack direction="row" alignItems="center">
                                    <IconButton color="inherit" onClick={changeVolumeMute}>{volume > 0 ? <VolumeUpIcon /> : <VolumeOffIcon />}</IconButton>
                                    <Slider
                                        sx={{ width: 100 }}
                                        value={typeof volume === 'number' ? volume : 0}
                                        onChange={changeVolume}
                                        valueLabelDisplay="auto"
                                        size="small"
                                        max={100}
                                    />
                                </Stack>
                            </Stack>

                            <Stack direction="row" alignItems="center" mr={1}>
                                <Stack direction="row" alignItems="center">
                                    <IconButton color="inherit" onClick={changeToggleFullscreen}>{isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}</IconButton>
                                </Stack>
                                {/* <Stack direction="row" alignItems="center">
                                    <IconButton color="inherit" ><FileDownloadIcon /></IconButton>
                                </Stack> */}
                                <Stack direction="row" alignItems="center">
                                    <IconButton color="inherit" onClick={togglePictureInPicture}><PictureInPictureAltIcon /></IconButton>
                                </Stack>
                                {/* <Stack direction="row" alignItems="center">
                                    <IconButton color="inherit" ><SettingsIcon /></IconButton>
                                </Stack> */}
                            </Stack>
                        </Stack>
                    </Stack>
                </Fade>
            </Stack>
        </>
    );
}

export default VideoComp;