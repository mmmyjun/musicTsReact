import Box from '@mui/material/Box';


function VideoComp() {
    return (
        <Box className="video-comp">
            <video controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Box>
    );
}

export default VideoComp;