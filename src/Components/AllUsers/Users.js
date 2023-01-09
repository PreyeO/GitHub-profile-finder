import {motion} from 'framer-motion'
import React from 'react'
import classes from '../AllUsers/Users.module.css'
import { useFetchData } from '../Data/useFetch';
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";


const Users = ({users}) => {

  const { isLoading } = useFetchData("https://api.github.com/users");


  return (
    <>
    <div>  
    {isLoading ? (
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    ) : null}
  </div>
    <div  style={{color:'white'}} className={classes.users_container}>
      
    {users && users.map((user, idx) => user?.login && (
      <motion.div key= {idx} className={classes.users_card}animate={{ x:0}} initial={{x:-1000}}transition={{type:"tween", duration:1}}>
        <img src={user?.avatar_url} alt={user?.login} />
        <h2>{user?.login}</h2>
        <div className={classes.btn_content}>
        <button>
            <span>{user?.public_repos}</span>
            <h4>Repositories</h4>
          </button>
        
        <button>
          <span>{user?.followers}</span>
          <h4>Followers</h4>
        </button>

        <button>

   <span>{user?.following}</span>
      <h4>Following</h4>
    </button>
    </div>
    <div className={classes.more_btn}>
    <a href={user?.html_url} target="_blank"  rel="noreferrer" ><button>see more</button></a>
        </div>
       
      </motion.div>
    ))}
    
    </div>
    </>
  )
}

export default Users
