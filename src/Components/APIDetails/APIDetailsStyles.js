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
  grid-template-columns: 55% 1% 12%;
  grid-template-rows: 150px 200px;
  `
  
  ;

  export const RouteAndAttributes = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;

  `
  ;
  export const TableGridContainer = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;
`
  ;

  export const Container = styled.div`
  margin-bottom: 100px;
  `
  ;

  export const SampleTable = styled.div`
  grid-column: 3/4;
  grid-row: 2-3;
  `
  ;


