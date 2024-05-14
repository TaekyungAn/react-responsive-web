/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const StyledBtn = styled.button`
  position: relative;

  padding: 15px 24px;
  border-radius: 30px;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.button};
  border: 1px solid ${(props) => props.color};

  width: ${(props) => props.width};
  min-width: 16rem;
  color: ${(props) => props.color || props.theme.color.orange};
  background-color: transparent;
  border-color: ${(props) => props.color || props.theme.color.orange};
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.color.orange};
  }

  ${(props) =>
    props.$bgEmpty &&
    css`
      color: ${(props) => props.color || props.theme.color.orange};
      background-color: transparent;
      border-color: ${(props) => props.color || props.theme.color.orange};
      &:hover {
        color: white;
        background-color: ${(props) => props.theme.color.orange};
      }
    `}

  ${(props) =>
    props.$bgFilled &&
    css`
      color: white;
      background-color: ${(props) => props.color || props.theme.color.orange};
      border-color: ${(props) => props.color || props.theme.color.orange};
    `}

    >span {
    position: absolute;
    right: 20%;
  }

  transition: 0.3s;

  &:after {
    content: ">";
    position: absolute;
    opacity: 0;
    top: 14px;
    right: 20px;
    transition: 0.3s;
  }

  &:hover:after {
    opacity: 1;
    right: 10px;
  }
`;

export default function Button({ children, ...props }) {
  return <StyledBtn {...props}>{children}</StyledBtn>;
}
