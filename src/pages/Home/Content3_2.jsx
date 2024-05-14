import styled from "styled-components";
import theme from "../../style/theme";
import ColoredBg from "../../components/ColoredBg";
import Button from "../../components/Button";

const Content3_2Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  @media ${({ theme }) => theme.device.tablet_large} {
    flex-direction: column;
  }
  h2 {
    font-size: ${(props) => props.theme.fontSize.title_2};
    @media ${({ theme }) => theme.device.tablet_large} {
      font-size: ${(props) => props.theme.fontSize.title_32};
    }
  }
`;
const Content_BROWSE = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  align-items: flex-start;
  width: 100%;

  div {
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize.button};
    color: black;
  }
`;

const Content_JOIN = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  align-items: flex-start;
  width: 100%;
  div {
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize.button};
    color: ${(props) => props.theme.color.orange};
  }
`;

export default function Content3_2() {
  return (
    <Content3_2Wrapper>
      <ColoredBg $bgColor={theme.color.orange}>
        <Content_BROWSE>
          <div>BROWSE EVENTS</div>
          <h2>Look for an event near you!</h2>
          <Button $bgEmpty color="white">
            VIEW CALENDAR
          </Button>
        </Content_BROWSE>
      </ColoredBg>

      <ColoredBg $bgColor={theme.color.lighterDarkGreen}>
        <Content_JOIN>
          <div>JOIN</div>
          <h2>Want to become a regular?</h2>
          <Button $bgEmpty color={theme.color.orange}>
            GET IN TOUCH
          </Button>
        </Content_JOIN>
      </ColoredBg>
    </Content3_2Wrapper>
  );
}
