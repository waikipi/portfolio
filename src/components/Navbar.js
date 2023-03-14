import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info.js";

const links = [
    {
        name: 'Home',
        to: '/portfolio',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: 'Projects',
        to: '/projects',
        active: 'portfolio'
    }
]

export default function Navbar() {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/portfolio' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{padding: '0.5rem 0'}}>{link.name}</p>}
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}