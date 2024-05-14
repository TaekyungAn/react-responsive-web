import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;

  color: rgb(102, 102, 102);

  background-color: black;
  height: fit-content;
  width: 100%;
  padding: 2rem 10rem;
  font-size: 1.4rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 70%;
    @media ${({ theme }) => theme.device.tablet_large} {
      flex-direction: column-reverse;
      gap: 1rem;
    }
  }
`;

const PageInfo = styled.div`
  b {
    font-weight: bold;
  }
`;

const SocialIcon = styled.ul`
  display: flex;
  gap: 2rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <div>
        <PageInfo>
          <span>
            Designed by <b>Elegant Themes</b> | Powered by <b>WordPress</b>
          </span>
        </PageInfo>
        <SocialIcon>
          <li>
            <a href="#">facebook</a>
          </li>
          <li>
            <a href="#">twitter </a>
          </li>
          <li>
            <a href="#">wifi </a>
          </li>
        </SocialIcon>
      </div>
    </FooterWrapper>
  );
}
