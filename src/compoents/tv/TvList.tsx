import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { purple } from '@mui/material/colors';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';


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
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    padding: 1,
                                    '&:hover': {
                                        color: 'red'
                                    }
                                }

                            }>{item.name}</Box>
                            <Grid container className="tv-list-item-inner">
                                {
                                    item.data.map((im, ix) => {
                                        return (
                                            <Grid key={'inner' + ix} sx={{ p: 1 }} xs={12} sm={6} md={3}>
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
                                                                onError={(e) => e.target.src = 'https://media-online.netlify.app/api/video/5f9e3e3e3e3e3e3e3e3e3e3e?type=poster'}
                                                            />
                                                        </Stack>
                                                        <Stack paddingLeft={1} position="relative" minWidth="200px" width="100%" >
                                                            <Box color="mediumpurple" fontSize={20} p={1} className="tv-list-item-inner-item-title">{im.name}</Box>
                                                            <Stack direction="row" spacing={2} >
                                                                <Stack className="tv-list-item-inner-item-type" flexDirection="row" alignItems="center">
                                                                    <Chip size='small' label={im.type} color="primary" />
                                                                    <Box className="tv-list-item-inner-item-note" marginLeft={1}>{im.note}</Box>
                                                                </Stack>
                                                               
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