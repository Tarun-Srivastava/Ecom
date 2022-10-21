import Announcement from '../Components/Announcement'
import React from 'react'
import Navbar from '../Components/Navbar'
import { Slider } from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import styled from "styled-components"


const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home

