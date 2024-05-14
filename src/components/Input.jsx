/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;

  padding: 1.6rem;
  font-size: ${(props) => props.theme.fontSize.content_14};

  border: none;
  border-radius: 1rem;

  background-color: ${(props) => props.theme.color.bgBeige};
  &:focus {
    background-color: white;
  }
`;

export default function Input({ ...props }) {
  return <StyledInput placeholder={props.placeHolder}></StyledInput>;
}
