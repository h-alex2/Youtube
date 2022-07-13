import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import YouTube_Logo_2017 from "src/images/YouTube_Logo_2017.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faUser,
  faVideo,
  faBell,
  faBars
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  // const onSearch = async (termFromSearchBar) => {
  //   const response = await axios('/api/search', {
  //     params: {
  //       search_query: termFromSearchBar
  //     },
  //   })
  //   setVideos(response.data)
  //   console.log(response);
  // }

  const onSearch = async (value) => {
    const response = await axios('/api/search')
    setVideos(response.data);
    navigate("/result");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    onSearch(value);
  }

  const refresh = () => {
    navigate("/");
  }

  return (
    <HeaderContainer>
      <LeftContainer>
        <FontAwesomeIcon onClick={refresh} icon={faBars} className="icon" />
          <img
            onClick={refresh}
            className="youtube-logo"
            src={YouTube_Logo_2017}
            alt="Youtube logo"
          />
      </LeftContainer>
      <SearchContainer>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            onChange={handleChange}
            // value={value}
            type="search"
            name="q"
            placeholder="Search"
            aria-label="Search"
          />
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </SearchContainer>
      <MenuIcon>
        <FontAwesomeIcon icon={faVideo} className="icons" />
        {/* <FontAwesomeIcon icon={faGrid} className="icons" /> */}
        <FontAwesomeIcon icon={faBell} className="icons" />
        <FontAwesomeIcon icon={faUser} className="avatar" />
      </MenuIcon>
    </HeaderContainer>
  )
};

const HeaderContainer = styled.div`
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.8rem;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .youtube-logo {
    cursor: pointer;
    height: 20px;
    object-fit: contain;
    margin-left: 30px;
  }

  .icon {
    cursor: pointer;
    transform: scale(1.5, 1.2);
  }
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0 1 700px;
  margin: 0 2rem;

  form {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    flex-grow: 1;
  };

  input {
    width: 80%;
    /* height: auto; */
    font-size: inherit;
    padding: .6em;
    border: 1px solid #D5D5D5;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  };

  button {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border: 1px solid #D5D5D5;
    background-color: #f8f8f8;
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    cursor: pointer;
  };
`

const MenuIcon = styled.div`
  display: flex;
  justify-content: row;
  min-width: 225px;
  align-items: center;
  justify-content: flex-end;

  .icons {
    transform: scale(1.2);
    margin-right: 30px;
    margin-left: 5px;
  };

  .avatar {
    transform: scale(1.2);
    margin-right: 20px;
    margin-left: 5px;
  };
`

export default Header;