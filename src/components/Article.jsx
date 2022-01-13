import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

function Article(props) {
  return (
    <SingleArticle>
      <SharedActor>
        <a href="/">
          <img src={props.article.actor.image} alt="" />
          <div>
            <span>{props.article.actor.title}</span>
            <span>{props.article.actor.description}</span>
            <span>
              {props.article.actor.date.toDate().toLocaleDateString()}
            </span>
          </div>
        </a>
        <button>...</button>
      </SharedActor>
      <Description>{props.article.description}</Description>
      <SharedIMG>
        <a href="/">
          {!props.article.sharedIMG && props.article.video ? (
            <ReactPlayer width={"100%"} url={props.article.video} />
          ) : (
            props.article.sharedIMG && (
              <img src={props.article.sharedIMG} alt="" />
            )
          )}
        </a>
      </SharedIMG>
      <SocialCount>
        <li>
          <button>
            <img
              src="https://media.istockphoto.com/vectors/thumbs-up-icon-like-vector-id1149214194?k=20&m=1149214194&s=612x612&w=0&h=ZHqz_o4lnvKXoSf2ctBzy0PvBiJyyA_PlHOPV_2VZLw="
              alt=""
            />
            <img
              src="http://cdn.shopify.com/s/files/1/0598/5581/products/emoji01_large.jpg?v=1527191728"
              alt=""
            />
            <span>75</span>
          </button>
        </li>
        <li>
          <a href="/">{props.article.comments} comments</a>
        </li>
      </SocialCount>
      <SocialActions>
        <button>
          <img
            src="https://media.istockphoto.com/vectors/thumbs-up-icon-like-vector-id1149214194?k=20&m=1149214194&s=612x612&w=0&h=ZHqz_o4lnvKXoSf2ctBzy0PvBiJyyA_PlHOPV_2VZLw="
            alt=""
          />
          <span>like</span>
        </button>
        <button>
          <img
            src="https://icon-library.com/images/free-comment-icon/free-comment-icon-24.jpg"
            alt=""
          />
          <span>comments</span>
        </button>
        <button>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <span>share</span>
        </button>
        <button>
          <img
            src="https://png.pngtree.com/element_our/md/20180620/md_5b29c1e7b8dd3.jpg"
            alt=""
          />
          <span>send</span>
        </button>
      </SocialActions>
    </SingleArticle>
  );
}

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

const SingleArticle = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
  margin-bottom: 30px;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;

    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: black;
        }

        &:nth-child(2) {
          font-size: 12px;
        }
        &:nth-child(3) {
          font-size: 12px;
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    font-size: 20px;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  font-size: 14px;
  text-align: left;
`;

const SharedIMG = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: white;

  img {
    object-fit: contain;
    width: 95%;
    height: 95%;
    padding: 5px;
  }
`;

const SocialCount = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  list-style: none;
  button {
    background-color: white;
    border: none;
  }

  li {
    margin-right: 5px;
    font-size: 15px;
    button {
      display: flex;
      border: none;
      background-color: white;
    }
  }

  img {
    width: 25px;
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: blue;
    border: none;
    margin-left: 8px;
    background-color: white;

    &:hover {
      background-color: #f0f0f0;
    }

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }

    img {
      width: 30px;
    }
  }
`;

export default Article;
