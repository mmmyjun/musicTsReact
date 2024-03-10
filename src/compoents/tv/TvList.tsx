import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { purple } from '@mui/material/colors';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';


function getBotaUrl(btoaUrl: string) {
    let tempBUrl = btoaUrl;
    if (btoaUrl.endsWith('==')) {
        tempBUrl = btoaUrl.slice(0, -2);
    } else if (btoaUrl.endsWith('=')) {
        tempBUrl = btoaUrl.slice(0, -1);
    } else {
        tempBUrl = btoaUrl;
    }
    return tempBUrl;

}
function getPosterUrl(btoaUrl: string) {
    let tempBUrl = getBotaUrl(btoaUrl);
    return `https://media-online.netlify.app/api/video/${tempBUrl}?type=poster`
}


export default function TvList({ lists }) {
    const [tilteColor, setTitleColor] = useState('purple');
    return (
        <Box className="tv-list-container">
            {
                lists.map((item, index) => {
                    return (
                        <Box key={index} className="tv-list-item-container" mb={2}>
                            <Box sx={
                                {
                                    color: tilteColor,
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    padding: '10px 0',
                                    '&:hover': {
                                        color: 'red'
                                    }
                                }

                            }>{item.name}</Box>
                            <Grid container className="tv-list-item-inner">
                                {
                                    item.data.map((im, ix) => {
                                        return (
                                            <Grid sx={{ p: 1 }} xs={12} sm={6} md={4}>
                                                <Link href={"/tvDetail/" + getBotaUrl(btoa(item.key + '|' + im.id))} underline="none" target="_blank">
                                                    <Stack sx={{
                                                        cursor: 'pointer',
                                                    }} position="relative" component={Card} direction="row" key={index + ix} className="tv-list-item-inner-item-container">
                                                        <Stack>
                                                            <CardMedia
                                                                sx={{ width: 120, aspectRatio: 2 / 3 }}
                                                                component="img"
                                                                image={getPosterUrl(btoa(item.key + '|' + im.id))}
                                                                alt={im.name}
                                                            />
                                                        </Stack>
                                                        <Stack paddingLeft={1}>
                                                            <Box color="mediumpurple" fontSize={22} className="tv-list-item-inner-item-title">{im.name}</Box>
                                                            <Stack direction="row" spacing={2} >
                                                                <Box className="tv-list-item-inner-item-type">{im.type}</Box>
                                                                <Box className="tv-list-item-inner-item-note">{im.note}</Box>
                                                            </Stack>
                                                            <Box sx={{
                                                                position: 'absolute',
                                                                bottom: 0,
                                                                right: 0,
                                                                padding: '5px 10px',
                                                            }} className="tv-list-item-inner-item-date">{im.last}</Box>
                                                        </Stack>
                                                    </Stack>
                                                </Link>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    )
                })
            }
        </Box>
    )
}