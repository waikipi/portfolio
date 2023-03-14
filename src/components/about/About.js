import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal.js";
import {Box} from "@mui/material";
import {info} from "../../info/Info.js";


export default function About() {

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>About me<span className={Style.green}></span></span><br/><br/>
                {info.bio}
            </p>
        </>
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>Skills <span
                className={Style.green}></span> </span> </p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
        </>
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>Addicted to<span
                className={Style.green}></span></span></p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}