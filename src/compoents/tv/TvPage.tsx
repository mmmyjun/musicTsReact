import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import TvList from './TvList.tsx';

import { getTvList } from '../../request/api.js';

var obj  ={
    "code": 0,
    "data": [
        {
            "key": "d",
            "name": "优质资源库",
            "rating": 4.5,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 1
            },
            "data": [
                {
                    "last": "2022-07-31 08:03:33",
                    "id": 23143,
                    "tid": 12,
                    "name": "少年天子",
                    "type": "国产剧",
                    "dt": "1080zyk",
                    "note": "全40集"
                }
            ]
        },
        {
            "key": "x",
            "name": "加菲猫影视",
            "rating": 4.4,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 50,
                "recordcount": 1
            },
            "data": [
                {
                    "last": "2023-11-02 11:02:57",
                    "id": 27016,
                    "tid": 15,
                    "name": "少年天子",
                    "type": "国产剧",
                    "dt": "dplayer",
                    "note": "第40集"
                }
            ]
        },
        {
            "key": "h1",
            "name": "海外看资源站",
            "rating": 4.2,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 1
            },
            "data": [
                {
                    "last": "2023-12-06 15:16:02",
                    "id": 95807,
                    "tid": 122,
                    "name": "少年天子",
                    "type": "国产剧",
                    "dt": "haiwaikan",
                    "note": "40集全"
                }
            ]
        },
        {
            "key": "1",
            "name": "无尽资源",
            "rating": 4,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 1
            },
            "data": [
                {
                    "last": "2023-05-16 18:02:37",
                    "id": 52784,
                    "tid": 13,
                    "name": "少年天子",
                    "type": "国产剧",
                    "dt": "wjm3u8",
                    "note": "全40集"
                }
            ]
        },
        {
            "key": "8",
            "name": "红牛资源",
            "rating": 4,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 2
            },
            "data": [
                {
                    "last": "2023-12-29 19:12:03",
                    "id": 82730,
                    "tid": 30,
                    "type": "短剧",
                    "dt": "hnyun,hnm3u8",
                    "note": "第81-93集完结",
                    "name": "少年天子"
                },
                {
                    "last": "2023-07-22 15:48:02",
                    "id": 76935,
                    "tid": 12,
                    "type": "国产剧",
                    "dt": "hnyun,hnm3u8",
                    "note": "第40集完结",
                    "name": "少年天子"
                }
            ]
        },
        {
            "key": "j",
            "name": "极速资源",
            "rating": 4,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 2
            },
            "data": [
                {
                    "last": "2023-12-29 19:21:01",
                    "id": 48481,
                    "tid": 38,
                    "type": "短剧",
                    "dt": "jsyun,jsm3u8",
                    "note": "第81-93集完结",
                    "name": "少年天子"
                },
                {
                    "last": "2023-07-22 15:56:01",
                    "id": 42628,
                    "tid": 20,
                    "type": "内地剧",
                    "dt": "jsyun,jsm3u8",
                    "note": "第40集完结",
                    "name": "少年天子"
                }
            ]
        },
        {
            "key": "h2",
            "name": "火狐资源",
            "rating": 4,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 2
            },
            "data": [
                {
                    "last": "2023-12-29 19:18:02",
                    "id": 72465,
                    "tid": 38,
                    "type": "短剧",
                    "dt": "hhyun,hhm3u8",
                    "note": "第81-93集完结",
                    "name": "少年天子"
                },
                {
                    "last": "2023-07-22 15:54:02",
                    "id": 67970,
                    "tid": 20,
                    "type": "内地剧",
                    "dt": "hhyun,hhm3u8",
                    "note": "第40集完结",
                    "name": "少年天子"
                }
            ]
        },
        {
            "key": "5",
            "name": "金鹰资源",
            "rating": 4,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 2
            },
            "data": [
                {
                    "last": "2023-12-29 19:15:02",
                    "id": 51402,
                    "tid": 30,
                    "type": "短剧",
                    "dt": "jinyingyun,jinyingm3u8",
                    "note": "第81-93集完结",
                    "name": "少年天子"
                },
                {
                    "last": "2023-07-22 15:55:02",
                    "id": 45579,
                    "tid": 20,
                    "type": "内地剧",
                    "dt": "jinyingyun,jinyingm3u8",
                    "note": "第40集完结",
                    "name": "少年天子"
                }
            ]
        },
        {
            "key": "z",
            "name": "最大资源网",
            "rating": 4,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 1
            },
            "data": [
                {
                    "last": "2023-08-21 15:47:05",
                    "id": 34477,
                    "tid": 23,
                    "name": "一口气看完少年天子",
                    "type": "影视解说",
                    "dt": "zuidam3u8,http",
                    "note": "HD"
                }
            ]
        },
        {
            "key": "b",
            "name": "光速资源",
            "rating": 4,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 2
            },
            "data": [
                {
                    "last": "2023-12-29 19:16:02",
                    "id": 106244,
                    "tid": 31,
                    "type": "短剧",
                    "dt": "gsyun,gsm3u8",
                    "note": "第81-93集完结",
                    "name": "少年天子"
                },
                {
                    "last": "2023-07-22 15:54:02",
                    "id": 100409,
                    "tid": 13,
                    "type": "大陆剧",
                    "dt": "gsyun,gsm3u8",
                    "note": "第40集完结",
                    "name": "少年天子"
                }
            ]
        },
        {
            "key": "q",
            "name": "奇虎资源",
            "rating": 4,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 1
            },
            "data": [
                {
                    "last": "2023-12-09 22:56:17",
                    "id": 19831,
                    "tid": 13,
                    "name": "少年天子",
                    "type": "国产剧",
                    "dt": "qhyun,qhm3u8",
                    "note": "更新40"
                }
            ]
        },
        {
            "key": "e",
            "name": "快车资源网",
            "rating": 4,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 1
            },
            "data": [
                {
                    "last": "2023-12-10 02:46:56",
                    "id": 95304,
                    "tid": 12,
                    "name": "少年天子",
                    "type": "国产剧",
                    "dt": "kcyun,kcm3u8",
                    "note": "更新40"
                }
            ]
        },
        {
            "key": "y1",
            "name": "樱花资源",
            "rating": 4,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 1
            },
            "data": [
                {
                    "last": "2023-05-18 11:00:07",
                    "id": 78540,
                    "tid": 13,
                    "name": "少年天子",
                    "type": "国产剧",
                    "dt": "yhm3u8",
                    "note": "全40集"
                }
            ]
        },
        {
            "key": "s",
            "name": "速播资源",
            "rating": 4,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 2
            },
            "data": [
                {
                    "last": "2023-12-29 19:20:10",
                    "id": 51969,
                    "tid": 27,
                    "type": "短剧",
                    "dt": "subyun,subm3u8",
                    "note": "第81-93集完结",
                    "name": "少年天子"
                },
                {
                    "last": "2023-11-26 04:50:01",
                    "id": 45052,
                    "tid": 14,
                    "type": "大陆剧",
                    "dt": "subyun,subm3u8",
                    "note": "第40集完结",
                    "name": "少年天子"
                }
            ]
        },
        {
            "key": "e2",
            "name": "ikun资源",
            "rating": 4,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 1
            },
            "data": [
                {
                    "last": "2024-02-02 13:08:02",
                    "id": 52338,
                    "tid": 45,
                    "name": "少年天子",
                    "type": "爽文短剧",
                    "dt": "ikm3u8",
                    "note": "全集"
                }
            ]
        },
        {
            "key": "13",
            "name": "39影视",
            "rating": 4,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 1
            },
            "data": [
                {
                    "last": "2023-07-23 02:32:18",
                    "id": 50742,
                    "tid": 13,
                    "name": "少年天子",
                    "type": "国产剧",
                    "dt": "subom3u8,hnm3u8,wjm3u8",
                    "note": "第40集完结"
                }
            ]
        },
        {
            "key": "2",
            "name": "淘片资源采集网",
            "rating": 3.9,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 30,
                "recordcount": 1
            },
            "data": [
                {
                    "last": "2022-09-10 00:00:00",
                    "id": 70804,
                    "tid": 15597568,
                    "name": "少年天子",
                    "type": "电视剧/国产剧",
                    "dt": "tpm3u8",
                    "note": " "
                }
            ]
        },
        {
            "key": "19",
            "name": "百度云资源",
            "rating": 3.9,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 1
            },
            "data": [
                {
                    "last": "2023-12-10 04:19:08",
                    "id": 75172,
                    "tid": 13,
                    "name": "少年天子",
                    "type": "大陆剧",
                    "dt": "dbyun,dbm3u8",
                    "note": "更新40"
                }
            ]
        },
        {
            "key": "12",
            "name": "卧龙资源站",
            "rating": 3.9,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 30,
                "recordcount": 1
            },
            "data": [
                {
                    "last": "2022-04-18 10:54:16",
                    "id": 41558,
                    "tid": 12,
                    "name": "少年天子",
                    "type": "国产剧",
                    "dt": "wolong",
                    "note": "全40集"
                }
            ]
        },
        {
            "key": "49",
            "name": "49资源网",
            "rating": 3.8,
            "page": {
                "page": 1,
                "pagecount": 1,
                "pagesize": 20,
                "recordcount": 1
            },
            "data": [
                {
                    "last": "2023-08-14 21:52:51",
                    "id": 9856,
                    "tid": 22,
                    "name": "少年天子",
                    "type": "国产剧",
                    "dt": "49zyw",
                    "note": "全40集"
                }
            ]
        },
        {
            "key": "l2",
            "name": "乐视资源",
            "rating": 3.7,
            "page": {
                "page": 1,
                "pagecount": 1780,
                "pagesize": 20,
                "recordcount": 35588
            },
            "data": [
                {
                    "last": "2024-03-05 20:39:01",
                    "id": 44699,
                    "tid": 26,
                    "type": "大陆综艺",
                    "dt": "leshi",
                    "note": "更新至20240305期上",
                    "name": "半熟恋人 第三季"
                },
                {
                    "last": "2024-03-05 20:27:01",
                    "id": 44969,
                    "tid": 22,
                    "type": "国产剧",
                    "dt": "leshi",
                    "note": "更新至12集",
                    "name": "江河日上"
                },
                {
                    "last": "2024-03-05 19:57:01",
                    "id": 24700,
                    "tid": 26,
                    "type": "大陆综艺",
                    "dt": "leshi",
                    "note": "更新至20240304期",
                    "name": "一站到底2023"
                },
                {
                    "last": "2024-03-05 19:27:01",
                    "id": 44702,
                    "tid": 22,
                    "type": "国产剧",
                    "dt": "leshi",
                    "note": "更新至14集",
                    "name": "紫川·光明三杰"
                },
                {
                    "last": "2024-03-05 19:27:01",
                    "id": 44700,
                    "tid": 4,
                    "type": "欧美剧",
                    "dt": "leshi",
                    "note": "更新至03集",
                    "name": "幕府将军"
                },
                {
                    "last": "2024-03-05 18:54:02",
                    "id": 40237,
                    "tid": 4,
                    "type": "欧美剧",
                    "dt": "leshi",
                    "note": "更新至10集",
                    "name": "海上密室谋杀案"
                },
                {
                    "last": "2024-03-05 18:54:02",
                    "id": 32481,
                    "tid": 30,
                    "type": "台湾剧",
                    "dt": "leshi",
                    "note": "更新至89集",
                    "name": "爱的荣耀"
                },
                {
                    "last": "2024-03-05 18:54:01",
                    "id": 14844,
                    "tid": 30,
                    "type": "台湾剧",
                    "dt": "leshi",
                    "note": "更新至218集",
                    "name": "天道2023"
                },
                {
                    "last": "2024-03-05 17:39:01",
                    "id": 45025,
                    "tid": 22,
                    "type": "国产剧",
                    "dt": "leshi",
                    "note": "更新至10集",
                    "name": "别对我动心"
                },
                {
                    "last": "2024-03-05 17:39:01",
                    "id": 44858,
                    "tid": 22,
                    "type": "国产剧",
                    "dt": "leshi",
                    "note": "更新至14集",
                    "name": "永安梦"
                },
                {
                    "last": "2024-03-05 17:39:01",
                    "id": 44859,
                    "tid": 22,
                    "type": "国产剧",
                    "dt": "leshi",
                    "note": "更新至14集",
                    "name": "飞驰人生热爱篇"
                },
                {
                    "last": "2024-03-05 17:36:02",
                    "id": 43802,
                    "tid": 26,
                    "type": "大陆综艺",
                    "dt": "leshi",
                    "note": "更新至20240305期",
                    "name": "一万元舞台"
                },
                {
                    "last": "2024-03-05 16:15:02",
                    "id": 45419,
                    "tid": 36,
                    "type": "日剧",
                    "dt": "leshi",
                    "note": "更新至86集",
                    "name": "飞舞吧！"
                },
                {
                    "last": "2024-03-05 16:06:01",
                    "id": 45400,
                    "tid": 50,
                    "type": "韩国伦理",
                    "dt": "leshi",
                    "note": "正片",
                    "name": "情慾谬思2"
                },
                {
                    "last": "2024-03-05 16:06:01",
                    "id": 45404,
                    "tid": 10,
                    "type": "剧情片",
                    "dt": "leshi",
                    "note": "正片",
                    "name": "天鹅挽歌"
                },
                {
                    "last": "2024-03-05 16:06:01",
                    "id": 45407,
                    "tid": 50,
                    "type": "韩国伦理",
                    "dt": "leshi",
                    "note": "正片",
                    "name": "性爱微积分"
                },
                {
                    "last": "2024-03-05 16:06:01",
                    "id": 45409,
                    "tid": 51,
                    "type": "日本伦理",
                    "dt": "leshi",
                    "note": "正片",
                    "name": "性爱对决：酒店争霸战"
                },
                {
                    "last": "2024-03-05 16:06:01",
                    "id": 45410,
                    "tid": 10,
                    "type": "剧情片",
                    "dt": "leshi",
                    "note": "正片",
                    "name": "天才枪手"
                },
                {
                    "last": "2024-03-05 16:06:01",
                    "id": 45411,
                    "tid": 50,
                    "type": "韩国伦理",
                    "dt": "leshi",
                    "note": "正片",
                    "name": "性爱六人行"
                },
                {
                    "last": "2024-03-05 16:06:01",
                    "id": 45412,
                    "tid": 10,
                    "type": "剧情片",
                    "dt": "leshi",
                    "note": "正片",
                    "name": "天堂爱"
                }
            ]
        },
        {
            "key": "sn",
            "name": "索尼资源",
            "rating": 3.7,
            "page": {
                "page": 1,
                "pagecount": 3087,
                "pagesize": 20,
                "recordcount": 61731
            },
            "data": [
                {
                    "last": "2024-03-05 20:37:31",
                    "id": 64563,
                    "tid": 17,
                    "type": "港剧",
                    "dt": "snm3u8",
                    "note": "更新至07集",
                    "name": "再见枕边人国语"
                },
                {
                    "last": "2024-03-05 20:37:20",
                    "id": 64564,
                    "tid": 17,
                    "type": "港剧",
                    "dt": "snm3u8",
                    "note": "更新至07集",
                    "name": "再见枕边人粤语"
                },
                {
                    "last": "2024-03-05 20:37:06",
                    "id": 39470,
                    "tid": 17,
                    "type": "港剧",
                    "dt": "snm3u8",
                    "note": "更新至2224集",
                    "name": "爱·回家之开心速递"
                },
                {
                    "last": "2024-03-05 20:29:44",
                    "id": 63432,
                    "tid": 14,
                    "type": "欧美剧",
                    "dt": "snm3u8",
                    "note": "更新至04集",
                    "name": "海军罪案调查处第二十一季"
                },
                {
                    "last": "2024-03-05 20:04:07",
                    "id": 65418,
                    "tid": 11,
                    "type": "剧情片",
                    "dt": "snm3u8",
                    "note": "HD",
                    "name": "极速搏杀"
                },
                {
                    "last": "2024-03-05 20:02:23",
                    "id": 64917,
                    "tid": 13,
                    "type": "国产剧",
                    "dt": "snm3u8",
                    "note": "更新至12集",
                    "name": "江河日上"
                },
                {
                    "last": "2024-03-05 19:54:47",
                    "id": 64703,
                    "tid": 26,
                    "type": "日韩综艺",
                    "dt": "snm3u8",
                    "note": "更新至02集",
                    "name": "洪锡天的宝石盒2"
                },
                {
                    "last": "2024-03-05 19:54:25",
                    "id": 62282,
                    "tid": 16,
                    "type": "日剧",
                    "dt": "snm3u8",
                    "note": "更新至06集",
                    "name": "爱在热气沸腾中"
                },
                {
                    "last": "2024-03-05 19:41:56",
                    "id": 65417,
                    "tid": 6,
                    "type": "动作片",
                    "dt": "snm3u8",
                    "note": "HD",
                    "name": "花千骨电影版"
                },
                {
                    "last": "2024-03-05 19:35:57",
                    "id": 65349,
                    "tid": 31,
                    "type": "欧美动漫",
                    "dt": "snm3u8",
                    "note": "更新至02集",
                    "name": "明日之城"
                },
                {
                    "last": "2024-03-05 19:33:36",
                    "id": 39536,
                    "tid": 27,
                    "type": "港台综艺",
                    "dt": "snm3u8",
                    "note": "更新至20240303期",
                    "name": "效廉出发吧"
                },
                {
                    "last": "2024-03-05 19:33:15",
                    "id": 62590,
                    "tid": 27,
                    "type": "港台综艺",
                    "dt": "snm3u8",
                    "note": "更新至20240302期",
                    "name": "花甲少年趣旅行第四季"
                },
                {
                    "last": "2024-03-05 19:32:59",
                    "id": 55584,
                    "tid": 27,
                    "type": "港台综艺",
                    "dt": "snm3u8",
                    "note": "更新至20240304期",
                    "name": "哈啰你有事吗"
                },
                {
                    "last": "2024-03-05 19:32:39",
                    "id": 31491,
                    "tid": 27,
                    "type": "港台综艺",
                    "dt": "snm3u8",
                    "note": "更新至20240304期",
                    "name": "全民星攻略"
                },
                {
                    "last": "2024-03-05 19:32:08",
                    "id": 31510,
                    "tid": 27,
                    "type": "港台综艺",
                    "dt": "snm3u8",
                    "note": "更新至20240302期",
                    "name": "医师好辣"
                },
                {
                    "last": "2024-03-05 19:05:43",
                    "id": 64676,
                    "tid": 13,
                    "type": "国产剧",
                    "dt": "snm3u8",
                    "note": "更新至14集",
                    "name": "紫川·光明三杰"
                },
                {
                    "last": "2024-03-05 18:59:40",
                    "id": 64916,
                    "tid": 13,
                    "type": "国产剧",
                    "dt": "snm3u8",
                    "note": "更新至09集",
                    "name": "唐人街探案2 剧场版"
                },
                {
                    "last": "2024-03-05 18:24:52",
                    "id": 65416,
                    "tid": 6,
                    "type": "动作片",
                    "dt": "snm3u8",
                    "note": "HD",
                    "name": "阿盖尔：神秘特工"
                },
                {
                    "last": "2024-03-05 18:23:06",
                    "id": 61851,
                    "tid": 14,
                    "type": "欧美剧",
                    "dt": "snm3u8",
                    "note": "更新至06集",
                    "name": "新版佐罗"
                },
                {
                    "last": "2024-03-05 18:13:21",
                    "id": 60814,
                    "tid": 14,
                    "type": "欧美剧",
                    "dt": "snm3u8",
                    "note": "全8集",
                    "name": "呼叫助产士第十三季"
                }
            ]
        },
        {
            "key": "0",
            "name": "新浪资源",
            "rating": 3.6,
            "page": {
                "page": 1,
                "pagecount": 2685,
                "pagesize": 20,
                "recordcount": 53694
            },
            "data": [
                {
                    "last": "2024-03-05 20:55:02",
                    "id": 106128,
                    "tid": 4,
                    "type": "综艺",
                    "dt": "xlyun,xlm3u8",
                    "note": "第20240305期",
                    "name": "无限超越班 第二季"
                },
                {
                    "last": "2024-03-05 20:15:03",
                    "id": 106371,
                    "tid": 13,
                    "type": "大陆剧",
                    "dt": "xlyun,xlm3u8",
                    "note": "第10集",
                    "name": "别对我动心"
                },
                {
                    "last": "2024-03-05 20:10:02",
                    "id": 106611,
                    "tid": 6,
                    "type": "动作片",
                    "dt": "xlyun,xlm3u8",
                    "note": "正片",
                    "name": "花千骨电影版"
                },
                {
                    "last": "2024-03-05 20:10:02",
                    "id": 106610,
                    "tid": 24,
                    "type": "短剧",
                    "dt": "xlyun,xlm3u8",
                    "note": "第61-81集完结",
                    "name": "保安老爸是大佬"
                },
                {
                    "last": "2024-03-05 19:50:02",
                    "id": 106608,
                    "tid": 24,
                    "type": "短剧",
                    "dt": "xlyun,xlm3u8",
                    "note": "第61-85集完结",
                    "name": "恰似一道暖阳光"
                },
                {
                    "last": "2024-03-05 19:45:02",
                    "id": 106609,
                    "tid": 24,
                    "type": "短剧",
                    "dt": "xlyun,xlm3u8",
                    "note": "第61-80集完结",
                    "name": "穿成反派的炮灰妻子"
                },
                {
                    "last": "2024-03-05 19:45:02",
                    "id": 104741,
                    "tid": 16,
                    "type": "欧美剧",
                    "dt": "xlyun,xlm3u8",
                    "note": "第5集",
                    "name": "法律与秩序 第二十三季"
                },
                {
                    "last": "2024-03-05 19:45:02",
                    "id": 104737,
                    "tid": 16,
                    "type": "欧美剧",
                    "dt": "xlyun,xlm3u8",
                    "note": "第5集",
                    "name": "法律与秩序：特殊受害者 第二十五季"
                },
                {
                    "last": "2024-03-05 19:25:02",
                    "id": 106607,
                    "tid": 16,
                    "type": "欧美剧",
                    "dt": "xlyun,xlm3u8",
                    "note": "第6集",
                    "name": "无耻之徒(美版) 第六季"
                },
                {
                    "last": "2024-03-05 19:15:29",
                    "id": 106352,
                    "tid": 13,
                    "type": "大陆剧",
                    "dt": "xlyun,xlm3u8",
                    "note": "第9集",
                    "name": "唐人街探案2"
                },
                {
                    "last": "2024-03-05 19:15:26",
                    "id": 95658,
                    "tid": 3,
                    "type": "动漫",
                    "dt": "xlyun,xlm3u8",
                    "note": "第57集",
                    "name": "我竟被女魔头豢养了"
                },
                {
                    "last": "2024-03-05 19:15:22",
                    "id": 106242,
                    "tid": 13,
                    "type": "大陆剧",
                    "dt": "xlyun,xlm3u8",
                    "note": "第14集",
                    "name": "紫川·光明三杰"
                },
                {
                    "last": "2024-03-05 19:15:20",
                    "id": 106606,
                    "tid": 13,
                    "type": "大陆剧",
                    "dt": "xlyun,xlm3u8",
                    "note": "第33集完结",
                    "name": "荣归"
                },
                {
                    "last": "2024-03-05 19:10:02",
                    "id": 103497,
                    "tid": 5,
                    "type": "纪录片",
                    "dt": "xlyun,xlm3u8",
                    "note": "第63集",
                    "name": "法治天下"
                },
                {
                    "last": "2024-03-05 19:00:02",
                    "id": 104461,
                    "tid": 16,
                    "type": "欧美剧",
                    "dt": "xlyun,xlm3u8",
                    "note": "第6集",
                    "name": "佐罗"
                },
                {
                    "last": "2024-03-05 19:00:02",
                    "id": 103891,
                    "tid": 16,
                    "type": "欧美剧",
                    "dt": "xlyun,xlm3u8",
                    "note": "第8集",
                    "name": "呼叫助产士 第十三季"
                },
                {
                    "last": "2024-03-05 18:55:02",
                    "id": 106605,
                    "tid": 3,
                    "type": "动漫",
                    "dt": "xlyun,xlm3u8",
                    "note": "第12集完结",
                    "name": "路人女主的养成方法 第二季"
                },
                {
                    "last": "2024-03-05 18:55:02",
                    "id": 106604,
                    "tid": 7,
                    "type": "爱情片",
                    "dt": "xlyun,xlm3u8",
                    "note": "正片",
                    "name": "最后的爱，最初的爱"
                },
                {
                    "last": "2024-03-05 18:55:02",
                    "id": 106253,
                    "tid": 4,
                    "type": "综艺",
                    "dt": "xlyun,xlm3u8",
                    "note": "第2期",
                    "name": "洪锡天的宝石盒2"
                },
                {
                    "last": "2024-03-05 18:55:02",
                    "id": 104105,
                    "tid": 16,
                    "type": "欧美剧",
                    "dt": "xlyun,xlm3u8",
                    "note": "第10集",
                    "name": "海上密室谋杀案"
                }
            ]
        },
        {
            "key": "h7",
            "name": "虎牙资源",
            "rating": 3.6,
            "page": {
                "page": 1,
                "pagecount": 2627,
                "pagesize": 20,
                "recordcount": 52524
            },
            "data": [
                {
                    "last": "2024-03-05 20:15:01",
                    "id": 52688,
                    "tid": 30,
                    "type": "短剧",
                    "dt": "hyyun,hym3u8",
                    "note": "第61-81集完结",
                    "name": "保安老爸是大佬"
                },
                {
                    "last": "2024-03-05 20:15:01",
                    "id": 52687,
                    "tid": 9,
                    "type": "动作片",
                    "dt": "hyyun,hym3u8",
                    "note": "正片",
                    "name": "花千骨电影版"
                },
                {
                    "last": "2024-03-05 19:45:02",
                    "id": 52686,
                    "tid": 30,
                    "type": "短剧",
                    "dt": "hyyun,hym3u8",
                    "note": "第61-85集完结",
                    "name": "恰似一道暖阳光"
                },
                {
                    "last": "2024-03-05 19:45:02",
                    "id": 52685,
                    "tid": 30,
                    "type": "短剧",
                    "dt": "hyyun,hym3u8",
                    "note": "第61-80集完结",
                    "name": "穿成反派的炮灰妻子"
                },
                {
                    "last": "2024-03-05 19:45:02",
                    "id": 50820,
                    "tid": 3,
                    "type": "欧美剧",
                    "dt": "hyyun,hym3u8",
                    "note": "第5集",
                    "name": "法律与秩序 第二十三季"
                },
                {
                    "last": "2024-03-05 19:45:02",
                    "id": 50815,
                    "tid": 3,
                    "type": "欧美剧",
                    "dt": "hyyun,hym3u8",
                    "note": "第5集",
                    "name": "法律与秩序：特殊受害者 第二十五季"
                },
                {
                    "last": "2024-03-05 19:30:02",
                    "id": 52684,
                    "tid": 3,
                    "type": "欧美剧",
                    "dt": "hyyun,hym3u8",
                    "note": "第6集",
                    "name": "无耻之徒(美版) 第六季"
                },
                {
                    "last": "2024-03-05 19:20:02",
                    "id": 52683,
                    "tid": 20,
                    "type": "内地剧",
                    "dt": "hyyun,hym3u8",
                    "note": "第33集完结",
                    "name": "荣归"
                },
                {
                    "last": "2024-03-05 19:20:02",
                    "id": 52431,
                    "tid": 20,
                    "type": "内地剧",
                    "dt": "hyyun,hym3u8",
                    "note": "第9集",
                    "name": "唐人街探案2"
                },
                {
                    "last": "2024-03-05 19:20:02",
                    "id": 52320,
                    "tid": 20,
                    "type": "内地剧",
                    "dt": "hyyun,hym3u8",
                    "note": "第14集",
                    "name": "紫川·光明三杰"
                },
                {
                    "last": "2024-03-05 19:20:02",
                    "id": 41869,
                    "tid": 24,
                    "type": "中国动漫",
                    "dt": "hyyun,hym3u8",
                    "note": "第57集",
                    "name": "我竟被女魔头豢养了"
                },
                {
                    "last": "2024-03-05 19:15:02",
                    "id": 49573,
                    "tid": 16,
                    "type": "记录片",
                    "dt": "hyyun,hym3u8",
                    "note": "第63集",
                    "name": "法治天下"
                },
                {
                    "last": "2024-03-05 19:05:02",
                    "id": 50539,
                    "tid": 3,
                    "type": "欧美剧",
                    "dt": "hyyun,hym3u8",
                    "note": "第6集",
                    "name": "佐罗"
                },
                {
                    "last": "2024-03-05 19:05:02",
                    "id": 49968,
                    "tid": 3,
                    "type": "欧美剧",
                    "dt": "hyyun,hym3u8",
                    "note": "第8集",
                    "name": "呼叫助产士 第十三季"
                },
                {
                    "last": "2024-03-05 18:55:02",
                    "id": 52682,
                    "tid": 30,
                    "type": "短剧",
                    "dt": "hyyun,hym3u8",
                    "note": "第81-91集完结",
                    "name": "我用读心术狠狠拿捏王爷"
                },
                {
                    "last": "2024-03-05 18:55:02",
                    "id": 52681,
                    "tid": 14,
                    "type": "剧情片",
                    "dt": "hyyun,hym3u8",
                    "note": "正片",
                    "name": "聊斋志异之瞳人语"
                },
                {
                    "last": "2024-03-05 18:55:02",
                    "id": 52680,
                    "tid": 10,
                    "type": "爱情片",
                    "dt": "hyyun,hym3u8",
                    "note": "正片",
                    "name": "最后的爱，最初的爱"
                },
                {
                    "last": "2024-03-05 18:55:02",
                    "id": 52679,
                    "tid": 25,
                    "type": "日本动漫",
                    "dt": "hyyun,hym3u8",
                    "note": "第12集完结",
                    "name": "路人女主的养成方法 第二季"
                },
                {
                    "last": "2024-03-05 18:55:02",
                    "id": 52331,
                    "tid": 27,
                    "type": "综艺",
                    "dt": "hyyun,hym3u8",
                    "note": "第2期",
                    "name": "洪锡天的宝石盒2"
                },
                {
                    "last": "2024-03-05 18:55:02",
                    "id": 50182,
                    "tid": 3,
                    "type": "欧美剧",
                    "dt": "hyyun,hym3u8",
                    "note": "第10集",
                    "name": "海上密室谋杀案"
                }
            ]
        },
        {
            "key": "1b",
            "name": "八戒采集",
            "rating": 1.8,
            "page": {
                "page": 1,
                "pagecount": 70,
                "pagesize": 20,
                "recordcount": 1397
            },
            "data": [
                {
                    "name": "紫川·光明三杰",
                    "last": "2024-03-05 19:36:53",
                    "id": 389664,
                    "tid": 12,
                    "type": "国产剧",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至14集"
                },
                {
                    "name": "唐人街探案2",
                    "last": "2024-03-05 19:35:45",
                    "id": 389665,
                    "tid": 12,
                    "type": "国产剧",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至9集"
                },
                {
                    "name": "幕府将军",
                    "last": "2024-03-05 19:34:07",
                    "id": 389666,
                    "tid": 17,
                    "type": "欧美剧",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至3集"
                },
                {
                    "name": "与凤飞",
                    "last": "2024-03-05 16:33:09",
                    "id": 389662,
                    "tid": 12,
                    "type": "国产剧",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至21集"
                },
                {
                    "name": "永安梦",
                    "last": "2024-03-05 16:23:10",
                    "id": 389661,
                    "tid": 12,
                    "type": "国产剧",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至14集"
                },
                {
                    "name": "小圆满",
                    "last": "2024-03-05 16:22:23",
                    "id": 389658,
                    "tid": 12,
                    "type": "国产剧",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至21集"
                },
                {
                    "name": "别对我动心",
                    "last": "2024-03-05 16:21:37",
                    "id": 389659,
                    "tid": 12,
                    "type": "国产剧",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至10集"
                },
                {
                    "name": "飞驰人生热爱篇",
                    "last": "2024-03-05 16:18:39",
                    "id": 389660,
                    "tid": 12,
                    "type": "国产剧",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至14集"
                },
                {
                    "name": "炼气十万年",
                    "last": "2024-03-05 10:33:49",
                    "id": 389656,
                    "tid": 91,
                    "type": "国产动漫",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至114集"
                },
                {
                    "name": "独步万古",
                    "last": "2024-03-05 10:25:31",
                    "id": 389655,
                    "tid": 91,
                    "type": "国产动漫",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至48集"
                },
                {
                    "name": "丹道至尊",
                    "last": "2024-03-05 10:18:44",
                    "id": 389654,
                    "tid": 91,
                    "type": "国产动漫",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至25集"
                },
                {
                    "name": "圣祖",
                    "last": "2024-03-05 10:03:55",
                    "id": 389653,
                    "tid": 91,
                    "type": "国产动漫",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至8集"
                },
                {
                    "name": "嫁东宫",
                    "last": "2024-03-05 09:56:58",
                    "id": 389652,
                    "tid": 12,
                    "type": "国产剧",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至15集"
                },
                {
                    "name": "灵剑尊",
                    "last": "2024-03-05 09:54:06",
                    "id": 389651,
                    "tid": 91,
                    "type": "国产动漫",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至468集"
                },
                {
                    "name": "武神主宰",
                    "last": "2024-03-05 09:44:44",
                    "id": 389650,
                    "tid": 91,
                    "type": "国产动漫",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至417集"
                },
                {
                    "name": "忍者神威",
                    "last": "2024-03-05 05:49:15",
                    "id": 389649,
                    "tid": 92,
                    "type": "日本动漫",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至4集"
                },
                {
                    "name": "假面骑士歌查德",
                    "last": "2024-03-05 05:06:02",
                    "id": 389648,
                    "tid": 92,
                    "type": "日本动漫",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至25集"
                },
                {
                    "name": "我被逐出队伍后过上慢生活第二季",
                    "last": "2024-03-05 04:51:10",
                    "id": 389647,
                    "tid": 92,
                    "type": "日本动漫",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至9集"
                },
                {
                    "name": "偶像失格",
                    "last": "2024-03-05 03:51:33",
                    "id": 389646,
                    "tid": 16,
                    "type": "日本剧",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至8集"
                },
                {
                    "name": "坡道上的红屋顶",
                    "last": "2024-03-05 03:41:06",
                    "id": 389645,
                    "tid": 16,
                    "type": "日本剧",
                    "dt": "bjyun,bjm3u8",
                    "note": "更新至1集"
                }
            ]
        }
    ],
    "msg": "成功"
};
const { code, msg, data } = obj;



function TvPage() {
    const [searchValue, setSearchValue] = useState('');
    const [tvLists, setTvLists] = useState(data); // [{}]
   

    const searchIt = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('searchValue:', searchValue);
    }

    useEffect(() => {
       // getTvList(searchValue).then((res) => {
        //     console.log('res:', res);
        //     const { code, msg, data } = res;
        //     if (code === 0) {
        //         setTvLists(data);
        //     } else {
        //         console.log('msg:', msg);
        //     }
        // });
    }, []);

    return (
        <Box className="tv-page-container">
            <Box className="tv-page-inner">
                <Box className="search-container" textAlign="center" padding={1}>
                    <form onSubmit={searchIt}>
                        <TextField
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            label='搜索影视'
                            variant="filled"
                            id="outlined-start-adornment" />
                    </form>
                </Box>
                <Box className="tv-list-container">
                    <TvList lists={ tvLists } />
                </Box>
            </Box>
        </Box>
    );
}

export default TvPage;