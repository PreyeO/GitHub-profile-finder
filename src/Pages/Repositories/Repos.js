import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import ReposData from '../../Components/Data/ReposData'
import Logo from '../../Components/Logo/Logo';
import "./Repos.css";


const Repos = () => {

  return (
    <Fragment>
      <Helmet>
        <title>Repositories</title>
        <meta name='description' content="List of Repositories in my github" />
        <link rel='canonical' href="/repos" />
      </Helmet> 
       <Logo />
      <div className='repos'>
      <ReposData />
  
  </div>
  </Fragment>
  )


}

export  default Repos