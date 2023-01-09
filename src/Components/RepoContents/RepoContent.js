import { UserFetchData } from "../../App";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "../Styles/RepoContent.css";
import { BiLinkExternal, BiStar, BiCodeBlock } from "react-icons/bi";
import CloseIcon from "../Icons/CloseIcon";

const RepoContent = () => {
  const { content } = useParams();

  const datas = useContext(UserFetchData);

  const repoInfo = datas.find((item) => item.id === parseInt(content));

  return (
    <>
      <CloseIcon />
      <div className="repo-container">
        <div className="repo-card">
          <div className="repo-link">
            <a href={repoInfo?.html_url} target="_blank" rel="noreferrer">
              <BiLinkExternal />
            </a>
          </div>
          <div className="repo-name">
            <h5>Name:</h5>
            <h1>{repoInfo?.name}</h1>
          </div>
          <div className="repo-description">
            <h5>Description:</h5>
            {repoInfo?.description}
          </div>

          <div className="repo-info">
            <div className="repo-star">
              <BiStar style={{ color: " #33E5BB" }} /> Star
              <div className="repo-langs">{repoInfo?.stargazers_count}</div>
            </div>
            <div className="repo-lang">
              <BiCodeBlock style={{ color: " #33E5BB" }} /> Language
              <div className="repo-langs">{repoInfo?.language}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepoContent;
