import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function LeftSide(props) {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a href="/">
            <Photo />
            <Link>
              Welcome {props.user ? props.user.displayName : "there"}!
            </Link>
          </a>
          <a href="/">
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a href="/">
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a href="/">
          <span>Groups</span>
        </a>
        <a href="/">
          <span>
            Events <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a href="/">
          <span>Follow Hashtags</span>
        </a>
        <a href="/">
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
}

const Container = styled.div`
  grid-area: leftside;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 15px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 25%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/photo.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid gray;
  margin: -30px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: blue;
  margin-top: 6px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  cursor: pointer;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.15);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 15px;
        line-height: 1.4;

        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0, 8);
  padding: 12px;
  font-size: 15px;
  cursor: pointer;
  display: block;
  text-align: left;
  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 15px 0 15px;
  text-align: left;
  display: flex;
  font-size: 15px;
  flex-direction: column;
  cursor: pointer;
  a {
    color: black;
    padding: 4px 12px 4px 12px;

    &:hover {
      color: blue;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);
