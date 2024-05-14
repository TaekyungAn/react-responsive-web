import styled from "styled-components";
import ColoredBg from "../../components/ColoredBg";
import Button from "../../components/Button";
import AManWithHeart from "../../assets/Illustrations/ngo-illustration-8.png";
import { FlexDiv } from "./Content2";

const Content1_1 = styled.div`
  width: 100%;

  position: relative;
  /* top: ${(props) => props.theme.height.header}; */
  padding-top: ${(props) => props.theme.height.header};
  background-color: ${(props) => props.theme.color.darkGreen};
`;

const Content_VOLUNTEER = styled.div`
  width: 60%;
  max-width: 55rem;
  h2 {
    font-size: ${(props) => props.theme.fontSize.title_1};
  }
  div {
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize.button};
    color: ${(props) => props.theme.color.orange};
  }
  p {
    padding: 2rem 0;
    line-height: 200%;

    font-size: ${(props) => props.theme.fontSize.content_18};
  }
`;

const Content_ManImg = styled.div`
  width: 60%;
  @media ${({ theme }) => theme.device.tablet_large} {
    width: 100%;
  }

  max-width: 60rem;
  img {
    width: 100%;
    object-fit: fill;
  }
`;

export default function Content1() {
  return (
    <Content1_1>
      <ColoredBg
        $flexDirection="row"
        $padding="10rem"
        $gap="4rem"
        $borderRadius="0 0 2rem 2rem"
      >
        <FlexDiv>
          <Content_VOLUNTEER>
            <div>VOLUNTEER</div>
            <h2>Become a volunteer or help out with an event</h2>
            <p>
              Vivamus eu sem et enim sagittis placerat quis et sem. Suspendisse
              imperdiet condimentum eleifend. Mauris tempus dignissim molestie.
              Quisque tempus aliquam.
            </p>
            <Button $bgEmpty>GET IN TOUCH</Button>
          </Content_VOLUNTEER>
          <Content_ManImg>
            <img src={AManWithHeart} alt="a man with a heart" />
          </Content_ManImg>
        </FlexDiv>
      </ColoredBg>
    </Content1_1>
  );
}
