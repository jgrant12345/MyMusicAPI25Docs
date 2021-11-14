import {
  Header,
  Description,
} from '../GettingStartedStyles.js/GettingStartedStyles';
import Badge from '../Badge/Badge';
import { Attributes } from '../Attributes/Attributes';
import { Routes } from '../Routes/Routes';
import Table from '../Table/Table';
import { TableContainer } from '../Table/TableStyles';
import { GridContainer , RouteAndAttributes, TableGridContainer } from './BandStyles';
export function Bands() {
  return (
    <div id="Bands">
      <Header>Bands</Header>
      End Points
      <hr />
      {/* make my grid here */}
      <GridContainer>
        <RouteAndAttributes>
      <Routes />
      <br />
      <Attributes RouteName="https://mymusicapi25/herokuapp.com/v1/bands/{BandName}" />
      </RouteAndAttributes>
      <TableGridContainer>
      <TableContainer>
        <Table header="Response" body="body" />
      </TableContainer>
      </TableGridContainer>
      </GridContainer>

    </div>
  );
}
