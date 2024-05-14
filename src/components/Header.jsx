/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 99;
  transition: height 0.5s ease;
  background-color: white;
  height: ${(props) =>
    props.$isScrolled ? "5rem" : props.theme.height.header};
  width: 100%;
  padding: 0 4rem;

  font-family: "Poppins", sans-serif;
  font-weight: 500;

  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 2.3rem;
  font-weight: 600;
`;

const NavBar = styled.ul`
  display: flex;
  gap: 2rem;

  font-size: ${(props) => props.theme.fontSize.navBar};
`;

export default function Header() {
  // 현재페이지 로고 변경
  const [currentLogo, setCurrentLogo] = useState(
    localStorage.getItem("currentPage") || "Home"
  );
  const onClickedMenu = (e) => {
    localStorage.setItem("currentPage", e.target.innerText);
    setCurrentLogo(localStorage.getItem("currentPage"));

    // 맨 위로 돌아옴
    window.scrollTo(0, 0);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 움직임
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log(window.scrollY);
      if (scrollTop > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <HeaderWrapper $isScrolled={isScrolled}>
      <Logo>NGO {currentLogo}</Logo>
      <NavBar>
        <li>Landing</li>
        <li>Events</li>
        <li>Contact</li>
        <li>About</li>
        <li>Blog</li>
        <Link to={`/volunteer`} onClick={onClickedMenu}>
          Volunteer
        </Link>
        <Link to={`/`} onClick={onClickedMenu}>
          Home
        </Link>
      </NavBar>
    </HeaderWrapper>
  );
}
