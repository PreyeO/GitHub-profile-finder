import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Users from "../../Components/AllUsers/Users";
import classes from "../LandingPage/Landing.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DocumentTitle from "react-document-title";

const Welcome = () => {
  const [users, setUsers] = useState();
  const baseUrl = "https://api.github.com/users";
  const user = useRef("");

  const findUser = async () => {
    if (user.current.value !== "") {
      const { data } = await axios.get(baseUrl + "/" + user.current.value);
      setUsers(() => [data]);
      user.current.value = "";
    }
  };

  useEffect(() => {
    findUser();
  }, [setUsers]);

  return (
    <DocumentTitle title="GitHub Profile Finder">
      <div className={classes.welcome}>
        <div className={classes.users_header}>
          <img
            src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
            alt=""
          />
          <h1>GitHub Users</h1>
        </div>

        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -1000 }}
          transition={{ delay: 1, type: "tween", duration: 1 }}
          className={classes.owner}
        >
          <h3>Wanna checkout my Github?</h3>
          <span>👉</span>
          <Link to="/home">
            <motion.button whileHover={{ scale: 2 }}>click</motion.button>
          </Link>
        </motion.div>

        <motion.div
          animate={{ x: 0 }}
          initial={{ x: 1000 }}
          transition={{ delay: 1, type: "tween", duration: 1 }}
          className={classes.random_user}
        >
          <h3>
            Need to find a github user? <span>👇</span>
          </h3>
        </motion.div>

        <motion.div
          animate={{ y: 0 }}
          initial={{ y: 1000 }}
          transition={{ delay: 1, type: "tween", duration: 1 }}
          className={classes.welcome_page}
        >
          <input type="text" placeholder="Enter github username" ref={user} />

          <button onClick={findUser}>search</button>
        </motion.div>

        <Users users={users} />

        <motion.footer
          animate={{ y: 0 }}
          initial={{ y: 1000 }}
          transition={{ delay: 1, type: "tween", duration: 1 }}
          className={classes.welcome_footer}
        >
          <h5>
            &copy; 2022 Preye Omusuku PDev
            <span className="logo-span"> {`/>`}</span>, All rights reserved
          </h5>
        </motion.footer>
      </div>
    </DocumentTitle>
  );
};

export default Welcome;
