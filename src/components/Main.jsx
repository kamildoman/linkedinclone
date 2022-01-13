import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PostModal from "./PostModal";
import { getArticlesAPI } from "../actions";
import Article from "./Article";

function Main(props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    props.getArticles();
  }, []);

  function handleShowModal() {
    setShowModal(!showModal);
  }
  return (
    <Container>
      <ShareBox>
        <div>
          {props.user && props.user.photoURL ? (
            <img src={props.user.photoURL} alt="" />
          ) : (
            <img src="images/user.svg" alt="" />
          )}
          <button
            onClick={() => {
              handleShowModal();
            }}
          >
            Start a post
          </button>
        </div>
        <div>
          <button>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/149px-Picture_icon_BLACK.svg.png"
              alt=""
            />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-icon.png" alt="" />
            <span>Video</span>
          </button>
          <button>
            <img
              src="https://cdn.icon-icons.com/icons2/2518/PNG/512/calendar_event_icon_151492.png"
              alt=""
            />
            <span>Event</span>
          </button>
          <button>
            <img
              src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/001/514/original/article-content.png"
              alt=""
            />
            <span>Article</span>
          </button>
        </div>
      </ShareBox>
      <Content>
        {props.loading && <img src="/images/spinner.svg" alt="" />}
      </Content>
      <div>
        {props.articles.map((article, key) => (
          <Article key={key} article={article} />
        ))}
      </div>

      {showModal && <PostModal handleShowModal={handleShowModal} />}
    </Container>
  );
}

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 25%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: gray;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      cursor: pointer;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
          width: 20px;
        }
        span {
          color: blue;
        }
      }
    }
  }
`;

const Content = styled.div`
  text-align: center;
  img {
    width: 30px;
  }
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
