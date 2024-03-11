import Stack from '@mui/material/Stack';


function VideoComp() {
    return (
        <Stack className="video-comp" sx={{
            width: '80%',
            minWidth: '640px',
        }}>
            <video controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Stack>
    );
}

export default VideoComp;