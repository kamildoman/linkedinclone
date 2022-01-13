import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { postArticleAPI } from "../actions";

function PostModal(props) {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  function handleImageChange(event) {
    setShareImage(event.target.files[0]);
  }

  function handleEditorText(event) {
    setEditorText(event.target.value);
  }

  function switchAssetArea(area) {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  }

  function postArticle(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    const payload = {
      image: shareImage,
      video: videoLink,
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    props.handleShowModal();
    props.postArticle(payload);
  }

  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <button
            onClick={() => {
              props.handleShowModal();
            }}
          >
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </button>
        </Header>
        <SharedContent>
          <UserInfo>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} alt="" />
            ) : (
              <img src="images/user.svg" alt="" />
            )}
            <span>{props.user ? props.user.displayName : "name"}</span>
          </UserInfo>
          <Editor>
            <textarea
              onChange={(e) => {
                handleEditorText(e);
              }}
              value={editorText}
              placeholder="Your post"
              autoFocus={true}
            ></textarea>
            {assetArea === "image" ? (
              <UploadImage>
                <input
                  type="file"
                  accept="image/gif, image/jpeg, image/png"
                  name="image"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    handleImageChange(e);
                  }}
                />
                <p>
                  <label htmlFor="file" style={{ cursor: "pointer" }}>
                    Select an image to share
                  </label>
                </p>
                {shareImage && (
                  <img src={URL.createObjectURL(shareImage)} alt="" />
                )}
              </UploadImage>
            ) : (
              assetArea === "media" && (
                <>
                  <input
                    type="text"
                    placeholder="Input a video link"
                    value={videoLink}
                    onChange={(e) => setVideoLink(e.target.value)}
                  />
                  {videoLink && <ReactPlayer width={"100%"} url={videoLink} />}
                </>
              )
            )}
          </Editor>
        </SharedContent>
        <SharedCreation>
          <AttachAssets>
            <AssetButton onClick={() => switchAssetArea("image")}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/149px-Picture_icon_BLACK.svg.png"
                alt=""
              />
            </AssetButton>
            <AssetButton onClick={() => switchAssetArea("media")}>
              <img src="/images/video-icon.png" alt="" />
            </AssetButton>
          </AttachAssets>
          <ShareComment>
            <AssetButton>
              <img
                src="https://icon-library.com/images/free-comment-icon/free-comment-icon-24.jpg"
                alt=""
              />
              Anyone
            </AssetButton>
          </ShareComment>
          <PostButton
            disabled={!editorText}
            onClick={(event) => postArticle(event)}
          >
            Post
          </PostButton>
        </SharedCreation>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  animation: fadeIn 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  color: black;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 42px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    border: none;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    img {
      width: 30px;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  img {
    width: 40px;
    height: 40px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 8px;
  }
`;

const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 16px;
`;

const AssetButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  img {
    width: 20px;
  }
`;

const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.1);

  ${AssetButton} {
    img {
      margin-right: 5px;
    }
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${(props) => (props.disabled ? "gray" : "blue")};
  color: white;
  font-weight: 760;
  border: none;
  cursor: pointer;

  &:hover {
    background: gray;
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }

  input {
    width: 100%;
    height: 34px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
