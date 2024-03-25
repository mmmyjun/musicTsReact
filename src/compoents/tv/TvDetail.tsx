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
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        let obj = {
            "last": "2022-07-31 08:03:33",
            "id": 23143,
            "tid": 12,
            "name": "少年天子",
            "subname": "少年天子之顺治王朝",
            "type": "国产剧",
            "pic": "https://pic1.imgyzzy.com/upload/vod/2022-07-30/16591127701.jpg",
            "lang": "国语",
            "area": "大陆",
            "year": 2003,
            "state": 0,
            "note": "全40集",
            "actor": "邓超,潘虹,郝蕾,王辉,何赛飞,霍思燕,李建义,李法曾,武利平,郑天庸,杨蓉,崔波,薛亦伦,王灵,李修蒙,卢勇,山鹰,张春年,李东翰",
            "director": "何培,刘恒",
            "des": "　　顺治皇帝福临（邓超 饰）少年在摄政睿亲王多尔衮和母亲孝庄太后（潘虹 饰）的一手扶持下登上皇位，整个少年时期都笼罩在多尔衮专制的阴影下，虽空有一身的抱负理想，却处处受限无法施展。命运被摆布于他人之手的福临在登基八年之际，自己的婚姻甚至也在孝庄皇后一手包办下完成，被迫迎娶了表妹博尔济吉特氏（郝蕾 饰）为皇后。而皇后高傲善妒的性子和年少的皇帝处处冲突，福临本就不喜欢自己的表妹，因此更加冷落了她。机缘巧合的福临认识了才女乌云珠（霍思燕 饰），对其渐生真情却因为自己的轻率而错失心爱之人，误把乌云珠捧手让给了弟弟果郡王博果尔为妻。而后少年皇帝以切磋文墨为由多次召见已是王妃的乌云珠，感情日深的二人终于再也无法脱离这早已身陷泥泞的爱情中，顺治帝力排众议，顶着多方压力迎娶了他的弟妻。但是甜蜜的生活没有持续多久，违背常伦已是让这段感情备受争议，而顺治帝对乌云珠的专宠更是引来了他人的因妒生恨。",
            "dataList": [
                {
                    "name": "1080zyk",
                    "urls": [
                        {
                            "label": "第01集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9127_947ee3a0/index.m3u8"
                        },
                        {
                            "label": "第02集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9125_fea9f835/index.m3u8"
                        },
                        {
                            "label": "第03集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9126_0904e204/index.m3u8"
                        },
                        {
                            "label": "第04集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9122_3836afe2/index.m3u8"
                        },
                        {
                            "label": "第05集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9123_24fd9fc5/index.m3u8"
                        },
                        {
                            "label": "第06集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9119_23fae559/index.m3u8"
                        },
                        {
                            "label": "第07集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9120_9b52b961/index.m3u8"
                        },
                        {
                            "label": "第08集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9121_9241f277/index.m3u8"
                        },
                        {
                            "label": "第09集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9124_c9189f7e/index.m3u8"
                        },
                        {
                            "label": "第10集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9117_550b1e1f/index.m3u8"
                        },
                        {
                            "label": "第11集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9118_aa6c5ae5/index.m3u8"
                        },
                        {
                            "label": "第12集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9115_a9cbcb9e/index.m3u8"
                        },
                        {
                            "label": "第13集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9116_a7a815b5/index.m3u8"
                        },
                        {
                            "label": "第14集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9114_80cb2692/index.m3u8"
                        },
                        {
                            "label": "第15集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9112_3e8ed823/index.m3u8"
                        },
                        {
                            "label": "第16集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9111_ce09a233/index.m3u8"
                        },
                        {
                            "label": "第17集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9110_6c3ab5b1/index.m3u8"
                        },
                        {
                            "label": "第18集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9109_7c2012ee/index.m3u8"
                        },
                        {
                            "label": "第19集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9108_27cb423d/index.m3u8"
                        },
                        {
                            "label": "第20集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9106_acde3ee8/index.m3u8"
                        },
                        {
                            "label": "第21集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9107_5627320f/index.m3u8"
                        },
                        {
                            "label": "第22集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9113_41d3a719/index.m3u8"
                        },
                        {
                            "label": "第23集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9105_9735443d/index.m3u8"
                        },
                        {
                            "label": "第24集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9101_f8cea9e2/index.m3u8"
                        },
                        {
                            "label": "第25集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9100_8043086f/index.m3u8"
                        },
                        {
                            "label": "第26集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9098_3bb50f78/index.m3u8"
                        },
                        {
                            "label": "第27集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9099_bb53efef/index.m3u8"
                        },
                        {
                            "label": "第28集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9095_1836a28c/index.m3u8"
                        },
                        {
                            "label": "第29集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9097_7ae6e0de/index.m3u8"
                        },
                        {
                            "label": "第30集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9096_2c5663f4/index.m3u8"
                        },
                        {
                            "label": "第31集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9093_b0a9aebc/index.m3u8"
                        },
                        {
                            "label": "第32集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9092_d3a7054f/index.m3u8"
                        },
                        {
                            "label": "第33集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9094_b7e5a418/index.m3u8"
                        },
                        {
                            "label": "第34集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9090_95819319/index.m3u8"
                        },
                        {
                            "label": "第35集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9089_11d53a1a/index.m3u8"
                        },
                        {
                            "label": "第36集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9087_a89e4ab2/index.m3u8"
                        },
                        {
                            "label": "第37集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9088_0f153f0f/index.m3u8"
                        },
                        {
                            "label": "第38集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9091_a185394d/index.m3u8"
                        },
                        {
                            "label": "第39集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9102_9838e6ea/index.m3u8"
                        },
                        {
                            "label": "第40集",
                            "url": "https://yzzy.play-cdn7.com/20220730/9082_2c741abf/index.m3u8"
                        }
                    ]
                }
            ],
            "prefer18": false,
            "proxy": false
        };
        setTvDetail(obj);
        const { pic, name, note: totalNumberOfEpisodes, subname, type, year, area, director, actor, des: briefIntroduction, dataList } = obj;
        setTvInfo({ pic, name, totalNumberOfEpisodes, subname, type, year, area, director, actor, briefIntroduction, dataList });
        setCurrentEpisodes(0);
        setCurrentUrl(dataList[0].urls[0].url);
        setIsLoading(false);

        // 图片、名称、集数、又名、类别、年份、地区、导演、演员、简介、播放列表
        // const { pic, name, note: totalNumberOfEpisodes, subname, type, year, area, director, actor, des: briefIntroduction, dataList } = obj;
        // getVideoInfoById(id).then((res) => {
        //     console.log('res:', res);
        //     const { code, msg, data } = res;
        //     if (code === 0) {
        //         setTvDetail(data);
        //         // 图片、名称、集数、又名、类别、年份、地区、导演、演员、简介、播放列表
        //         const { pic, name, note: totalNumberOfEpisodes, subname, type, year, area, director, actor, des: briefIntroduction, dataList } = data;
        //         setTvInfo({ pic, name, totalNumberOfEpisodes, subname, type, year, area, director, actor, briefIntroduction, dataList });
        //         setCurrentEpisodes(0);
        //         setCurrentUrl(dataList[0].urls[0].url);
        //         setIsLoading(false);
        //     } else {
        //         console.log('msg:', msg);
        //     }
        // });
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
                <VideoComp currentUrl={currentUrl} />

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