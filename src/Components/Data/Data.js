
import { useFetchData } from "./useFetch";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import { BiLocationPlus, BiCalendar, BiCalendarEdit, BiLinkExternal } from "react-icons/bi";






const Data = () => {


  const { isLoading, data} = useFetchData("https://api.github.com/users/PreyeO");



  const now = new Date();

  return (
    <section>
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

      <div className="image">
        <div key={data.id}>
          <div className="home-links">
        <a href={data.html_url} target="_blank"  rel="noreferrer" ><BiLinkExternal /></a>
        
        </div>
        <div className="profile-pic">
        <img src={data.avatar_url}target="_blank" alt="" />
        </div>
      </div>
    
      <div className="name"><h1>{data.name}</h1></div>
      <h4 className="login">@{data.login}</h4>
      <div className="location">
      <div>
          <BiLocationPlus /><h5>{data.location}</h5>
          </div>
          <div>
          <BiCalendar /> <h5>Joined {now.getMonth(data.created_at) - 5}/
          {now.getDay(data.created_at) + 1}/{now.getFullYear(data.created_at)}</h5>
          </div>
          <div>
         
          <BiCalendarEdit /><h5>Updated {now.getMonth(data.updated_at) + 1}/
          {now.getDay(data.updated_at) - 2}/{now.getFullYear(data.updated_at)}</h5>
          </div>
      </div>
      <div className="bio"><p>{data.bio}</p></div>

      <div className="buttons">
        <Link to="/repos"><button>
            <span className="counts" id="count-link">{data.public_repos}</span>
            <h4>Repositories</h4>
          </button></Link>

        <button>
          <span className="counts">{data.followers}</span>
          <h4>Followers</h4>
        </button>
        <button>

          <span className="counts">{data.following}</span>
          <h4>Following</h4>
        </button>
      </div>
      </div>
     
    </section>
  );
};

export default Data;
