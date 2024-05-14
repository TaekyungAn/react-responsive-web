import styled, { keyframes } from "styled-components";
import Content3_2 from "../Home/Content3_2";
import WhiteCard from "../../components/WhiteCard";
import AGreenTube from "../../assets/Icons/1x/dark/ngo-icon-dark-green13.png";
import AnExclamationMark from "../../assets/Icons/1x/dark/ngo-icon-dark-pink14.png";
import ShieldSign from "../../assets/Icons/1x/dark/ngo-icon-dark-green09.png";
import Counting from "../../components/Counting";
import ColoredBg from "../../components/ColoredBg";
import theme from "../../style/theme";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";

const Content2Wrapper = styled.div`
  position: relative;
  /* top: 85rem;
  left: 50%;
  transform: translate(-50%, 0%); */
  display: flex;
  flex-direction: column;
  gap: 6rem;

  width: 78%;
  max-width: 128rem; // 큰모니터에서 다시 고치기
  margin: 0 auto;
`;

const Content2_1 = styled.div`
  display: flex;
  gap: 4rem;
  @media ${({ theme }) => theme.device.tablet_large} {
    flex-direction: column;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Content2_2 = styled.div`
  display: flex;
  width: 100%;

  animation: ${fadeIn} 0.7s ease-in-out;
`;

const Content2_3 = styled.div``;

export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 5rem;
  padding: 6rem;

  @media ${({ theme }) => theme.device.tablet_large} {
    flex-direction: column;
    padding: 5rem 3rem;
    gap: 2rem;
  }
`;

const Content_CONTACT = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 2rem;

  h2 {
    font-size: ${(props) => props.theme.fontSize.title_2};
    color: ${(props) => props.theme.color.darkGreen};
    @media ${({ theme }) => theme.device.tablet_large} {
      font-size: ${(props) => props.theme.fontSize.title_32};
    }
  }
  div {
    font-weight: bold;
    color: ${(props) => props.theme.color.orange};
  }
  p {
    padding: 2rem 0;
    line-height: 150%;
    color: ${(props) => props.theme.color.darkGreen};

    font-size: ${(props) => props.theme.fontSize.content_18};
    @media ${({ theme }) => theme.device.tablet_large} {
      font-size: ${(props) => props.theme.fontSize.content_16};
    }
  }
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet_large} {
    gap: 2rem;
  }
`;

export default function Content2() {
  // const [isScrolled, setIsScrolled] = useState(false);
  // const targetRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const targetPosition = 1700; // 특정 컴포넌트의 상단 위치를 가져옵니다.
  //     if (scrollPosition >= targetPosition && !isScrolled) {
  //       setIsScrolled(true);
  //       console.log("스크롤이 특정 컴포넌트로 도달했습니다!");
  //       // 특정 위치에 도달했을 때 할 작업을 여기에 추가합니다.
  //     } else if (scrollPosition < targetPosition && isScrolled) {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isScrolled]);

  return (
    <Content2Wrapper>
      <Content3_2 />
      <Content2_1>
        <WhiteCard
          src={AGreenTube}
          titleText="Help comes in many packages"
          contentText="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus"
          buttonText="GET STARTED"
        />
        <WhiteCard
          src={AnExclamationMark}
          titleText="Volunteer and member resources"
          contentText="error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
          buttonText="VIEW RESOURCES"
        />
        <WhiteCard
          src={ShieldSign}
          titleText="Want to sponsor an event?"
          contentText="Exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"
          buttonText="LET US KNOW"
        />
      </Content2_1>
      <Content2_2>
        <Counting number="800000" name="DOLLARS RAISED" />
        <Counting number="89" name="VOLUNTEERS" />
        <Counting number="12" name="CITIES" />
        <Counting number="250" name="STAFF" />
      </Content2_2>
      <Content2_3>
        <ColoredBg
          $bgColor={theme.color.beige}
          $flexDirection="row"
          $gap="4rem"
          $padding="0"
        >
          <FlexDiv>
            <Content_CONTACT>
              <div>CONTACT</div>
              <h2>Contact us to get started</h2>
              <p>
                Praesent sapien lacus, molestie vitae arcu in, elementum congue
                justo. Aenean aliquam semper velit eu pretium. Suspendisse
                mattis luctus quam nec vehicula. Donec scelerisque tristique
                metus a vestibulum.
              </p>
            </Content_CONTACT>

            <ColoredBg
              $bgColor="white"
              $alignItems="end"
              $padding="4rem 3rem"
              $gap="4rem"
              $borderRadius="3rem"
            >
              <InputArea>
                <Input placeHolder="Name"></Input>
                <Input placeHolder="Email Address"></Input>
                <TextArea placeHolder="Meassage"></TextArea>
              </InputArea>
              <Button $bgFilled>SUBMIT</Button>
            </ColoredBg>
          </FlexDiv>
        </ColoredBg>
      </Content2_3>
    </Content2Wrapper>
  );
}
