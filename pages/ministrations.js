import React from 'react'
import WithStyles from '../components/WithStyles'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ctl from "@netlify/classnames-template-literals";
import { motion, Variants } from "framer-motion";
import Imagine2 from "../components/Imagine2";
import Choir from '../components/Choir';

const Ministrations = () => {



    return (

        <>
          <Imagine2 bigTitle={'Around-The-Clock Ministration'} hidden={''} />
          <Choir />

        </>
    )
}

export default Ministrations