import styled from 'styled-components';

export const SideBarContainer = styled.div`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  padding-left: 15px;
`;

export const RightSideContent = styled.div`
margin-left: 250px;
margin-top: 160px;
padding: 0px; 10px 0px 200px;
`;

export const VerticalLine = styled.div`
  border-left: 1.5px solid #d3d3d3;
  height: 100%;
  position: fixed;
  margin-left: 180px;
  top: 0;
  z-index:10;
`;
