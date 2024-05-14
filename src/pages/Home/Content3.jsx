import styled from "styled-components";
import Content3_2 from "./Content3_2";

const Content3Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 80%;
  max-width: 110rem;
`;
const Content3_1 = styled.div`
  display: flex;
  gap: 8rem;
  @media ${({ theme }) => theme.device.tablet_large} {
    flex-direction: column;
  }
`;
const ClearCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h4 {
    font-size: ${(props) => props.theme.fontSize.title_4};
    font-weight: bold;
  }
  > p {
    line-height: 150%;
    font-size: ${(props) => props.theme.fontSize.content_16};
    font-weight: 600;
    color: rgb(107, 132, 131);
  }
  > button {
    position: relative;

    border: none;
    justify-content: flex-start;
    width: fit-content;
    padding: 1.2rem 1.7rem 1rem 0;
    border-bottom: 0.3rem solid ${(props) => props.theme.color.naturalGreen};

    background-color: transparent;
    color: ${(props) => props.theme.color.naturalGreen};
    font-weight: bold;

    transition: 0.3s;

    &:after {
      content: ">";
      position: absolute;
      opacity: 0;

      right: 2rem;
      transition: 0.2s;
    }
    &:hover {
      padding-right: 1.5rem;
      padding-left: 1.2rem;
      color: white;
      background-color: ${(props) => props.theme.color.naturalGreen};
    }

    &:hover:after {
      opacity: 1;
      right: 0px;
    }
  }
`;

export default function Content3() {
  return (
    <Content3Wrapper>
      <Content3_1>
        <ClearCard>
          <h4>Medical Aid</h4>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Nulla quis lorem ut libero malesuada feugiat.
          </p>
          <button>CAMPAIGNS</button>
        </ClearCard>
        <ClearCard>
          <h4>Hunger Aid</h4>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Nulla quis lorem ut libero malesuada feugiat.
          </p>
          <button>CAMPAIGNS</button>
        </ClearCard>
        <ClearCard>
          <h4>Education</h4>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Nulla quis lorem ut libero malesuada feugiat.
          </p>
          <button>CAMPAIGNS</button>
        </ClearCard>
      </Content3_1>
      <Content3_2 />
    </Content3Wrapper>
  );
}
