import styled from "styled-components";
import Content1 from "./Content1";
import Content2 from "./Content2";
import { ContentWrapper } from "../Home/Home";

const VolunteerWrapper = styled.div`
  background-color: ${(props) => props.theme.color.bgBeige};
`;

export default function Volunteer() {
  return (
    <VolunteerWrapper>
      <ContentWrapper>
        <Content1 />
        <Content2 />
      </ContentWrapper>
    </VolunteerWrapper>
  );
}
