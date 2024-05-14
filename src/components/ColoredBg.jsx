import styled from "styled-components";

/* eslint-disable react/prop-types */
const StyledDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || "column"};
  justify-content: ${(props) => props.$justifyContent || "center"};
  align-items: ${(props) => props.$alignItems || "center"};
  gap: ${(props) => props.$gap};

  font-size: 1.4rem;
  padding: ${(props) => props.$padding || "6rem 4rem"};

  /* @media ${({ theme }) => theme.device.tablet_large2} {
    max-width: ${(props) => props.maxWidth};
  } */

  width: ${(props) => props.width || "100%"};

  height: ${(props) => props.height || "fit-content"};
  background-color: ${(props) => props.$bgColor || props.theme.color.darkGreen};
  color: ${(props) => props.color || "white"};

  border-radius: ${(props) => props.$borderRadius || "2rem"};
`;

export default function ColoredBg({ children, ...props }) {
  return <StyledDiv {...props}>{children}</StyledDiv>;
}
