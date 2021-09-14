import { Header, Description } from "../GettingStartedStyles.js/GettingStartedStyles"
import Badge from "../Badge/Badge";
import Table from "../Table/Table";
export function Bands(){
    return(
        <div id = "Bands">
        <Header>Bands</Header>
       <Badge />
        <Table header="header" body="body" />
        </div>
    )
}