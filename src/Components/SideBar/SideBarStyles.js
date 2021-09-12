import styled from 'styled-components';
export const SideBarContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: left;
  
`;

export const SideBarInput = styled.input`
  position: relative;
  top 5px;
  left: 2px;
  margin-left: 5px;
  border: none;
  outline: none;
  background-color:#F5F5F5;
  &:focus {
    outline:none;
  }
`;

export const SideBarInputContainer = styled.div`
  background-color: #F5F5F5;
  height: 30px;
  border-radius: 10px;
`;

export const ContentLinks = styled.a`
  position: relative;
  text-decoration: none;
  color: #606060;
  font-size: 18px;
  &:hover {
    color: black;
  }
`;

export const ContentLinksBounds = styled.div`
  padding: 4%;
  padding-top: 15px;
`;
