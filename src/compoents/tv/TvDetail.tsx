import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import VideoComp from './VideoComp';

function TvDetail() {
    const params = useParams();
    const { id } = params;
    return (
        <Box className="tv-detail-container">
            <VideoComp />
        </Box>
    );
}

export default TvDetail;