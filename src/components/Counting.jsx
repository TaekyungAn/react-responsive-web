/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useRef } from "react";
import styled from "styled-components";
import useCountUp from "../Hooks/useCountUp";
import useConvert from "../Hooks/useConvert";

const CountingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
`;
const Count = styled.div`
  font-size: ${(props) => props.theme.fontSize.title_2};
  font-weight: bold;
  color: ${(props) => props.theme.color.darkGreen};
`;
const Name = styled.div`
  font-size: ${(props) => props.theme.fontSize.content_14};
  font-weight: bold;

  color: ${(props) => props.theme.color.orange};
`;

export default function Counting({ ...props }) {
  return (
    <CountingWrapper>
      <Count>{useCountUp(Number(props.number), 0, 2000)}</Count>
      <Name>{props.name}</Name>
    </CountingWrapper>
  );
}
