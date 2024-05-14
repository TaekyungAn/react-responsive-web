import styled from "styled-components";
import Button from "./Button";
import ColoredBg from "./ColoredBg";

const FooterCoverWrapper = styled.div`
  width: 100%;
`;

const FooterCover_1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding: 0 15rem;

  /* width: 100rem; */
  @media ${({ theme }) => theme.device.tablet_large} {
    align-items: flex-start;
    padding: 0;
  }

  > h2 {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.title_2};

    @media ${({ theme }) => theme.device.tablet_large} {
      font-size: ${({ theme }) => theme.fontSize.title_32};
      text-align: start;
    }
  }
  > div {
    display: flex;
    gap: 5rem;
    font-size: 2.2rem;
    @media ${({ theme }) => theme.device.tablet_large} {
      flex-direction: column;
      align-items: flex-start;
    }

    > a {
    }
  }
`;

export default function FooterCover() {
  return (
    <FooterCoverWrapper>
      <ColoredBg $borderRadius="2rem 2rem 0 0" $padding="10rem">
        <FooterCover_1>
          <h2>
            Join our mission. Volunteer, Donate, Advocate. Get Started Today.
          </h2>
          <div>
            <a href="#">Email: hello@divingo.com</a>
            <span>Call Anytime: (235)-135-6213</span>
          </div>
          <div>
            <Button $bgFilled>BROWSE CAMPAIGN</Button>
            <Button $bgEmpty>GET INVOLVED</Button>
          </div>
        </FooterCover_1>
      </ColoredBg>
    </FooterCoverWrapper>
  );
}
