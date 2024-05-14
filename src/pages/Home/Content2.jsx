import styled from "styled-components";
import theme from "../../style/theme";
import ColoredBg from "../../components/ColoredBg";
import Button from "../../components/Button";
// import YouTube from "react-youtube";
import Youtube from "../../components/Youtube";

const Content2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  z-index: 97;

  width: 80%;
  max-width: 110rem;
  height: fit-content;
  h3 {
    font-size: ${(props) => props.theme.fontSize.title_3};
    text-align: center;
    font-weight: 500;

    line-height: 120%;
  }
  @media ${({ theme }) => theme.device.tablet_large} {
    h3 {
      font-size: ${(props) => props.theme.fontSize.title_4};
    }
  }
`;

const Content2_1 = styled.div`
  gap: 2rem;
`;
const FlexDiv = styled.div`
  display: flex;
  gap: 4rem;
  @media ${({ theme }) => theme.device.tablet_large} {
    flex-direction: column;
    h2 {
      font-size: ${(props) => props.theme.fontSize.title_32};
    }
  }
`;
const Content_FEATURED = styled.div`
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  h2 {
    font-size: ${(props) => props.theme.fontSize.title_2};
  }
  @media ${({ theme }) => theme.device.tablet_large} {
    h2 {
      font-size: ${(props) => props.theme.fontSize.title_32};
    }
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

const Content2_2 = styled.div`
  position: relative;
  padding-bottom: 56.25% /* 16:9 */;
  padding-top: 25;
  background-color: blue;
`;

export default function Content2() {
  return (
    <Content2Wrapper>
      <Content2_1>
        <ColoredBg $bgColor={theme.color.naturalGreen} direction="row">
          <FlexDiv>
            <Content_FEATURED>
              <div>FEATURED</div>
              <h2>Food Drive</h2>
              <p>
                Praesent sapien lacus, molestie vitae arcu in, elementum congue
                justo. Aenean aliquam semper velit eu pretium. Suspendisse
                mattis luctus quam nec vehicula. Donec scelerisque tristique
                metus a vestibulum.
              </p>
            </Content_FEATURED>
            <ColoredBg
              $bgColor="white"
              height="100%"
              color="black"
              $padding="3rem"
              $gap="3rem"
            >
              <h3>
                Praesent sapien lacus, molestie vitae arcu in, elementum con
              </h3>
              <Button $bgFilled>MAKE A DONATION</Button>
            </ColoredBg>
          </FlexDiv>
        </ColoredBg>
      </Content2_1>
      <Content2_2>
        {/* <YouTube
          videoId="FkQuawiGWUw"
          opts={{
            width: "600",
            height: "400",
            playerVars: {
              autoplay: 0, //자동재생 O
              rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
              modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
            },
          }}
        /> */}
        <Youtube youtubeId="FkQuawiGWUw" />
      </Content2_2>
    </Content2Wrapper>
  );
}
