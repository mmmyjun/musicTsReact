import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import TvList from './TvList.tsx';

import { getTvList } from '@/request/api';

function TvPage() {
    const [searchValue, setSearchValue] = useState('');
    const [tvLists, setTvLists] = useState([]); // [{}]
    const [loadingList, setLoadingList] = useState(false);

    const getListData = () => {
        setLoadingList(true);
        getTvList(searchValue).then((res) => {
            console.log('res:', res);
            const { code, msg, data } = res;
            if (code === 0) {
                setTvLists(data);
            } else {
                console.log('msg:', msg);
            }
        }).finally(() => {
            setLoadingList(false);
        });
    }
    const searchIt = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('searchValue:', searchValue);
        getListData();
    }

    useEffect(() => {
        if (searchValue) {
            getListData();
        }
    }, []);

    return (
        <Box className="tv-page-container">
            <Box className="tv-page-inner">
                <Box className="search-container" textAlign="center" padding={1}>
                    <form onSubmit={searchIt} style={{
                        'display': 'flex',
                        'justifyContent': 'center',
                        'alignItems': 'center',
                    }}>
                        <TextField
                            size='small'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            label='搜索影视'
                            variant="outlined"
                            id="outlined-start-adornment" />

                        <Button sx={{
                            marginLeft: 1
                        }} variant="contained" disabled={loadingList} onClick={searchIt} startIcon={<SearchIcon />}>搜索</Button>
                    </form>
                </Box>
                <Box className="tv-list-container" sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {loadingList ? <CircularProgress /> : <TvList lists={tvLists} />}
                </Box>
            </Box>
        </Box>
    );
}

export default TvPage;