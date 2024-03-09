import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Avatar } from '@mui/material';

function getPosterUrl(btoaUrl: string) {
    let tempBUrl = btoaUrl;
    if (btoaUrl.endsWith('==')) {
        tempBUrl = btoaUrl.slice(0, -2);
    } else if (btoaUrl.endsWith('=')) {
        tempBUrl = btoaUrl.slice(0, -1);
    } else {
        tempBUrl = btoaUrl;
    }
    return `https://media-online.netlify.app/api/video/${tempBUrl}?type=poster`
}

export default function TvList({ lists }) {
    const [tilteColor, setTitleColor] = useState('purple');
    return (
        <Box className="tv-list-container">
            {
                lists.map((item, index) => {
                    return (
                        <Box key={index} className="tv-list-item-container">
                            <Box sx={
                                {
                                    color: tilteColor,
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    borderBottom: '1px solid #ccc',
                                    padding: '10px 0',
                                    '&:hover': {
                                        color: 'red'
                                    }
                                }

                            }>{item.name}</Box>
                            <Stack direction="row" spacing={2} className="tv-list-item-inner">
                                {
                                    item.data.map((im, ix) => {
                                        return (
                                            <Stack direction="row" key={index + ix} className="tv-list-item-inner-item-container">
                                                <Stack><Avatar variant="square" alt={im.name} src={getPosterUrl(btoa(item.key + '|' + im.id))} /></Stack>
                                                <Stack>
                                                    <Stack direction="row" justifyContent="flex-start" className="tv-list-item-inner-item-title">{im.name}</Stack>
                                                    <Stack direction="row" spacing={2} >
                                                        <Box className="tv-list-item-inner-item-type">{im.type}</Box>
                                                        <Box className="tv-list-item-inner-item-note">{im.note}</Box>
                                                    </Stack>
                                                    <Box className="tv-list-item-inner-item-date">{im.last}</Box>
                                                </Stack>
                                            </Stack>
                                        )
                                    })
                                }
                            </Stack>
                        </Box>
                    )
                })
            }
        </Box>
    )
}