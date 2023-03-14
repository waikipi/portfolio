import React from 'react';
import Navbar from "./Navbar.js";
import Home from "./home/Home.js";
import About from "./about/About.js";
import Portfolio from "./portfolio/Portfolio.js";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";

export default function BaseLayout() {

   return (
      <Box>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/portfolio'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/projects'} element={<Portfolio/>}/>
               </Routes>
            </Grid>
         </Grid>
      </Box>
   )
}

