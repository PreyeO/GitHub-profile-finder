import React, { useState, useContext, Fragment } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ReactPaginate from "react-paginate";
import { UserFetchData } from "../../App";
import { useFetchData } from "./useFetch";
import { Link } from "react-router-dom";

const ReposData = () => {
  let datas = useContext(UserFetchData);

  const { isLoading } = useFetchData("https://api.github.com/users/PreyeO");

  const [pageNumber, setPageNumber] = useState(0);

  const reposPerPage = 3;
  const pageVisited = pageNumber * reposPerPage;
  const displayReposData = datas.slice(pageVisited, pageVisited + reposPerPage);

  const pageCounter = Math.ceil(datas.length / reposPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Fragment>
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

      <div className="repos-container">
        {datas &&
          displayReposData.map((item) => (
            <div key={item.id} className="repos-card">
              <div className="repos-name">
                <h5>Name:</h5>
                <h1>{item.name}</h1>
              </div>
              <div className="repos-btns">
                <Link to={`${item.id}`}>
                  <button>more</button>
                </Link>
              </div>
            </div>
          ))}
      </div>

      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCounter}
        onPageChange={changePage}
        containerClassName={"pagination-btns"}
        previousClassName={"prev-btn"}
        nextClassName={"next-btn"}
        disabledClassName={"disabled-btn"}
        activeClassName={"active-btn"}
      />
    </Fragment>
  );
};

export default ReposData;
