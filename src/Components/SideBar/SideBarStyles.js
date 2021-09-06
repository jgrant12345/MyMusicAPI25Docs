import styled from 'styled-components';
export const SideBarContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items:left;



`;

export const SideBarInput = styled.input`
  height: 30px;
  margin-left: 5px;
`;

export const ContentLinks = styled.a`
  position:relative;
  text-decoration: none;
  &:hover {
    background-color:black;
  }
`;

export const ContentLinksBounds = styled.div`
  padding: 4%;

 
`;
