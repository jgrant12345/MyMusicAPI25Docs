import {
  Header,
  Description,
} from '../GettingStartedStyles.js/GettingStartedStyles';
import Badge from '../Badge/Badge';
import { Parameters } from '../Parameters/Parameters';
import { Routes } from '../Routes/Routes';
import Table from '../Table/Table';
import { TableContainer } from '../Table/TableStyles';
import { GridContainer , RouteAndAttributes, TableGridContainer,  Container } from './APIDetailsStyles';
export function APIDetails(props) {
  console.log(props.ParameterList)
  return (
    <Container>
      <Header>{props.Header}</Header>
      End Points
      <hr />
      {/* make my grid here */}
      <GridContainer>
        <RouteAndAttributes>
      <Routes RouteName = {props.RouteName}/>
      <br />
      <Parameters ParameterList = {props.ParameterList}/>
      </RouteAndAttributes>
      <TableGridContainer>
      <TableContainer>
        <Table header="Response" body="body" />
      </TableContainer>
      </TableGridContainer>
      </GridContainer>

    </Container>
  );
}
