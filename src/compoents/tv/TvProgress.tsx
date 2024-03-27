import * as React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import LinearProgress from '@mui/material/LinearProgress';
import Tooltip from '@mui/material/Tooltip';

import { TotalSToMmss } from '@/utils/format-time';

import { Instance } from '@popperjs/core';


export default function TvProgress({ currentTime, duration, cacheWidth, changeCurrentTime }) {
    const positionRef = React.useRef<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });
    const popperRef = React.useRef<Instance>(null);
    const areaRef = React.useRef<HTMLDivElement>(null);

    const [tooltipTime, setTooltipTime] = React.useState<number>(0);

    const handleMouseMove = (event: React.MouseEvent) => {
        positionRef.current = { x: event.clientX, y: event.clientY };
        setTooltipTime(event.nativeEvent.offsetX / event.target.clientWidth * duration);

        if (popperRef.current != null) {
            popperRef.current.update();
        }
    };

    return <Stack className="video-progress-container" sx={{
        position: 'relative',
        width: '100%',
    }}>
        <LinearProgress variant="determinate" value={cacheWidth} />
        <Tooltip title={TotalSToMmss(tooltipTime)} placement="top" arrow
            PopperProps={{
                popperRef,
                anchorEl: {
                    getBoundingClientRect: () => {
                        return new DOMRect(
                            positionRef.current.x,
                            areaRef.current!.getBoundingClientRect().y,
                            0,
                            0,
                        );
                    },
                },
            }}
        >
            <Slider ref={areaRef}
                onMouseMove={handleMouseMove}
                step={0.01} value={currentTime} max={duration} onChange={changeCurrentTime} />
        </Tooltip>
    </Stack>
}