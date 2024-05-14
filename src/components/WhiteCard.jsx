/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "./Button";

const WhiteCardWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;

  background-color: white;
  border-radius: 2rem;
  padding: 2rem;
  line-height: 2.4rem;
  > img {
    width: 8rem;
    margin: 1rem 0;
  }
  > h3 {
    font-size: ${(props) => props.theme.fontSize.title_4};
    font-weight: bold;
  }
  p {
    font-size: ${(props) => props.theme.fontSize.content_16};
  }
`;

export default function WhiteCard({ ...props }) {
  return (
    <WhiteCardWrapper>
      <img src={props.src} alt={props.alt} />
      <h3>{props.titleText}</h3>
      <p>{props.contentText}</p>
      <div>
        <Button>{props.buttonText}</Button>
      </div>
    </WhiteCardWrapper>
  );
}
