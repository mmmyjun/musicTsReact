import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';


function TvDetail() {
    const params = useParams();
    const { id } = params;
    return (
        <Box className="tv-detail-container">
            详情页开发中id是: {id}
        </Box>
    );
}

export default TvDetail;