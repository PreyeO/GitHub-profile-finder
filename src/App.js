import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Repos from "./Pages/Repositories/Repos";
import TestError from "./Pages/ErrorTesting/TestError"
import ErrorBoundary from "./Components/Errors/ErrorBoundary";
import ErrorPage from "./Pages/404ErrorPage/ErrorPage";
import React, { useState, useEffect, createContext, Fragment } from "react";
import RepoContent from "./Components/RepoContents/RepoContent";
import Landing from "./Pages/LandingPage/Landing";



export const UserFetchData = createContext();

function App() {

  
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  
    const fetchData=async()=> {
      setIsLoading(true);
      const res = await fetch("https://api.github.com/users/PreyeO/repos");
      res
        .json()
        .then((res) => setDatas(res))

        .then((isLoading) => setIsLoading(false))
        .catch((error) => setError(error.message));
        console.log(error, isLoading)
    }
 
   
    useEffect(()=>{
      fetchData();
    },[])
  
  
  

  return (
  <Fragment>
    

      <ErrorBoundary>
     
       
        <Router> 
  
           <UserFetchData.Provider value={datas}> 
            <Routes>
            <Route path="/" element={<Landing/>} />
              <Route path="/home" element={<Home />} />
              <Route path="/repos" element={<Repos />} />
              <Route path="/repos/:content" element={<RepoContent />} />
              <Route path="/testerror" element={<TestError />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            </UserFetchData.Provider>
        </Router>
      </ErrorBoundary>
    </Fragment>
  )
}

export default App;
