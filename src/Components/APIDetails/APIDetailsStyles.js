import styled from 'styled-components';
import { Background } from '../Badge/BadgeStyles';
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: left;
  
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 10% 20%;
  grid-template-rows: 150px 230px;
  @media (max-width: 768px) {
    grid-template-columns: 200px;
    grid-template-rows: 100px 150px 100px 100px;
  }
  `
  
  ;

  export const RouteAndAttributes = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;

  @media (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 1/2;
    width: 450px;
  }

  `
  ;
  export const TableGridContainer = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;
  @media (max-width: 768px) {
    grid-column: 1/2;
    grid-row: 3/4;
  }
`
  ;

  export const Container = styled.div`
  margin-bottom: 100px;
  `
  ;

  export const SampleTable = styled.div`
  grid-column: 3/4;
  grid-row: 2-3;
  @media (max-width: 768px) {
    margin-top: 60px;
    grid-column: 1/2;
    grid-row: 4/5;
  }
  `
  ;


