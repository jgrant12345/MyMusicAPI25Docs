import { Header, Description } from "../GettingStartedStyles.js/GettingStartedStyles"
import Badge from "../Badge/Badge";
import { Attributes } from "../Attributes/Attributes";
import { Routes } from "../Routes/Routes";
import Table from "../Table/Table";
export function Bands(){
    return(
        <div id = "Bands">
        <Header>Bands</Header>
        End Points
        <hr />
       <Routes />
       <br />
       <Attributes RouteName = "https://mymusicapi25/herokuapp.com/v1/bands/{BandName}"/>

        <Table header="Response" body="body" />
        </div>
    )
}