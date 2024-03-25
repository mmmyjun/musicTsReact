import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import LinearProgress from '@mui/material/LinearProgress';
import Tooltip from '@mui/material/Tooltip';

export default function TvProgress({ currentTime, duration, cacheWidth }) {
    return <Stack className="video-progress-container">
    <LinearProgress variant="determinate" value={cacheWidth} />
    <Tooltip title={currentTime} placement="top">
        <Slider value={currentTime} max={duration} />
    </Tooltip>
</Stack>
}