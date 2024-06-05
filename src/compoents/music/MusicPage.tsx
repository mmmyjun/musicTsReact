import React, { useState } from 'react';
import {
  Route,
  Link,
  Routes,
  Outlet
} from "react-router-dom";
import Box from '@mui/material/Box';

import Page from './CustomInput';

function MusicPage() {
  return (
    <Box className="musicPage">
      <Page />
      音乐开发中..
    </Box>
  );
}

export default MusicPage;
