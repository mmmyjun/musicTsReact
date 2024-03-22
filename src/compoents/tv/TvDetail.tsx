import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import VideoComp from './VideoComp';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import { getVideoInfoById } from '@/request/api';

interface TvUrlProps {
    label: string;
    url: string;
}
interface TvDetailEpisodesProps {
    name: string;
    urls: TvUrlProps[];
}
interface TvDetailProps {
    pic: string;
    name: string;
    totalNumberOfEpisodes: string;
    subname: string;
    type: string;
    year: number;
    area: string;
    director: string;
    actor: string;
    briefIntroduction: string;
    dataList: TvDetailEpisodesProps[];
}


function TvDetail() {
    const params = useParams();
    const { id } = params;

    const [tvDetail, setTvDetail] = useState({}); // [{}]
    const [currentEpisodes, setCurrentEpisodes] = useState<number>(0);
    const [tvInfo, setTvInfo] = useState<TvDetailProps>();

    const [tabValue, setTabValue] = useState(0);
    const changeTab = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const [currentUrl, setCurrentUrl] = useState('');
    const [volume, setVolume] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getVideoInfoById(id).then((res) => {
            console.log('res:', res);
            const { code, msg, data } = res;
            if (code === 0) {
                setTvDetail(data);

                // 图片、名称、集数、又名、类别、年份、地区、导演、演员、简介、播放列表
                const { pic, name, note: totalNumberOfEpisodes, subname, type, year, area, director, actor, des: briefIntroduction, dataList } = data;
                setTvInfo({ pic, name, totalNumberOfEpisodes, subname, type, year, area, director, actor, briefIntroduction, dataList });
                setCurrentEpisodes(0);
                setCurrentUrl(dataList[0].urls[0].url);
                setIsLoading(false);
            } else {
                console.log('msg:', msg);
            }
        });
    }, []);

    if (isLoading) {
        return <Stack sx={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <CircularProgress />
        </Stack>
    }

    return (
        <Stack className="tv-detail-container" alignItems="center">
            <Stack sx={{
                width: '88%',
                maxWidth: '1200px'
            }}>
                <VideoComp currentUrl={currentUrl} volume={volume} isPlaying={isPlaying} />

                <Stack className='tv-except-video-container' sx={{
                    backgroundColor: 'aliceblue',
                }}>
                    <Box>
                        <Box sx={{
                            textAlign: 'center',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            p: 2,
                        }}> {tvInfo.name} - {tvInfo.dataList[0].urls[currentEpisodes].label || ''} </Box>

                        <Tabs value={tabValue} onChange={changeTab} centered>
                            <Tab label="简介" />
                            <Tab label="选集" />
                        </Tabs>

                        <Stack>
                            {
                                tabValue === 0 && <Stack direction="row">
                                    <CardMedia
                                        sx={{ width: 120, height: 180, p: 1 }}
                                        component="img"
                                        image={tvInfo.pic}
                                        alt={tvInfo.name}
                                    />
                                    <Stack sx={{
                                        p: 1,
                                    }}>
                                        <Box sx={{
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                            color: 'mediumpurple',
                                        }}>{tvInfo.name}</Box>
                                        <Box>{tvInfo.totalNumberOfEpisodes}</Box>

                                        <Box>又名: {tvInfo.subname}</Box>
                                        <Box>类别: {tvInfo.type}</Box>
                                        <Box>年份: {tvInfo.year}</Box>
                                        <Box>地区: {tvInfo.area}</Box>
                                        <Box>导演: {tvInfo.director}</Box>
                                        <Box>演员: {tvInfo.actor}</Box>
                                        <Box>简介: {tvInfo.briefIntroduction.trim()}</Box>
                                    </Stack>
                                </Stack>
                            }
                            {
                                tabValue === 1 && <Box>
                                    {
                                        tvInfo.dataList.map((item, index) => {
                                            return (
                                                <Box>
                                                    <Grid container className="tv-list-item-inner">
                                                        {
                                                            item.urls.map((im, ix) => {
                                                                return (
                                                                    <Grid textAlign="center" key={'episodes' + ix} sx={{ p: 1 }} xs={3} sm={2} md={1}>
                                                                        <Button key={'btn' + ix} variant={ix == currentEpisodes ? 'contained' : 'outlined'} onClick={() => {
                                                                            setCurrentEpisodes(ix);
                                                                            setCurrentUrl(im.url);
                                                                        }}>
                                                                            {im.label}
                                                                        </Button>
                                                                    </Grid>
                                                                );
                                                            })
                                                        }
                                                    </Grid>
                                                </Box>
                                            );
                                        })
                                    }
                                </Box>
                            }
                        </Stack>
                    </Box>
                </Stack>

            </Stack>
        </Stack>
    );
}

export default TvDetail;