import React from 'react'
import Data from '../../Components/Data/Data'
import NavBar from '../../Components/NavBar/NavBar'
import "./Home.css"
import Charts from "../../Components/Assets/CHARTS.PNG"
import Stat from "../../Components/Assets/stat.PNG"
import DocumentTitle from 'react-document-title'

const Home = () => {
  return (
    <DocumentTitle title= "Home Page">
    <main className='main'>
    <nav>
       <NavBar />
       </nav>
       <section className='home'>
    <div className='home-card'>
    <Data /> 
    </div>
    <div className='chart-image'>
    <span className='span-chart'><img src={Stat} alt ="" /></span>
    <span className='span-chart'><img src={Charts} alt ="" /></span>
    </div>
    </section>
    <footer className='footer'>
    <h5>&copy; 2022 Preye Omusuku PDev<span className='logo-span'> {`/>`}</span>, All rights reserved</h5>
    </footer>
    </main>
    </DocumentTitle>
 
  )
}

export default Home
