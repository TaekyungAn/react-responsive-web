import styled from "styled-components";
import ColoredBg from "../../components/ColoredBg";
import theme from "../../style/theme";
import Button from "../../components/Button";

const Content1_1 = styled.div`
  width: 100%;

  position: relative;
  padding-top: ${(props) => props.theme.height.header};
  background-color: ${(props) => props.theme.color.grayGreen};
`;
const Content_DIVI = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: 100%;
  min-height: 50rem;
  width: 75%;
  h2,
  p {
    text-align: center;
  }
  h2 {
    font-size: ${(props) => props.theme.fontSize.title_1};
    @media ${({ theme }) => theme.device.tablet_large} {
      font-size: ${({ theme }) => theme.fontSize.title_40};
      @media ${({ theme }) => theme.device.tablet_small} {
        font-size: ${({ theme }) => theme.fontSize.title_24};
      }
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
    @media ${({ theme }) => theme.device.tablet_large} {
      font-size: ${({ theme }) => theme.fontSize.content_16};
    }
    @media ${({ theme }) => theme.device.tablet_small} {
      font-size: ${({ theme }) => theme.fontSize.content_14};
    }
  }

  @media ${({ theme }) => theme.device.tablet_large} {
    padding: 6rem 4rem;
    min-height: unset;
  }
  @media ${({ theme }) => theme.device.tablet_small} {
    padding: 3rem 4rem;
    min-height: unset;
    width: 100%;
  }
`;

export default function Content1() {
  return (
    <Content1_1>
      <ColoredBg $bgColor={theme.color.grayGreen} $borderRadius="0">
        <Content_DIVI>
          <div>DIVI</div>
          <h2>Welcome to Divi NGO</h2>
          <p>
            Praesent sapien lacus, molestie vitae arcu in, elementum congue
            justo. Aenean aliquam semper velit eu pretium. Suspendisse mattis
            luctus quam nec vehicula. Donec scelerisque tristique metus a
            vestibulum.
          </p>
          <Button $bgFilled color={theme.color.orange}>
            DONATE TO A CAUSE TODAY
          </Button>
        </Content_DIVI>
      </ColoredBg>
    </Content1_1>
  );
}
