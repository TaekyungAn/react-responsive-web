/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 20rem;

  padding: 1.6rem;
  font-size: ${(props) => props.theme.fontSize.content_14};

  border: none;
  border-radius: 1rem;

  background-color: ${(props) => props.theme.color.bgBeige};
  &:focus {
    background-color: white;
    outline: none;
  }
`;

export default function TextArea({ ...props }) {
  return <StyledTextArea placeholder={props.placeHolder}></StyledTextArea>;
}
