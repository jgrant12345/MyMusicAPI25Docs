import {
  Header,
  Description,
} from '../GettingStartedStyles.js/GettingStartedStyles';
import Badge from '../Badge/Badge';
import { Parameters } from '../Parameters/Parameters';
import '../../Views/App.css';
import { Routes } from '../Routes/Routes';
import Table from '../Table/Table';
import { TableContainer } from '../Table/TableStyles';
import { GridContainer , RouteAndAttributes, TableGridContainer,  Container, SampleTable } from './APIDetailsStyles';
export function APIDetails(props) {
  console.log(props.scrollid)
  console.log(props.ParameterList)
  return (
    <Container id = {props.scrollId}>
      <Header>{props.Header}</Header>
      End Points
      <hr />
      {/* make my grid here */}
      <GridContainer className = "test">
        <RouteAndAttributes>
      <Routes RouteName = {props.RouteName}/>
      <br />
      <Parameters ParameterList = {props.ParameterList}/>
      </RouteAndAttributes>
      <TableGridContainer>
      <TableContainer >
        <Table header="Sample Endpoint" body= {props.sampleEndPointResponse} />
      </TableContainer>
      </TableGridContainer>

      <SampleTable>
      <Table header="Sample Response" body={props.sampleOutPutResponse} />
      </SampleTable>
      
      </GridContainer>

    </Container>
  );
}
