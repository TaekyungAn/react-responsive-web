import styled from "styled-components";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import { useEffect } from "react";

const HomeWrapper = styled.div`
  background-color: ${(props) => props.theme.color.bgBeige};

  p {
  }
  div {
    display: flex;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  padding-bottom: 5rem;
`;

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HomeWrapper>
      <ContentWrapper>
        <Content1 />
        <Content2 />
        <Content3 />
      </ContentWrapper>
    </HomeWrapper>
  );
}
