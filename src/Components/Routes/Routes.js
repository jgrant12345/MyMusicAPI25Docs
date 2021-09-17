import { MyRoute } from "./RouteStyles"
import Badge from "../Badge/Badge"
import { FlexBox } from "./RouteStyles"
export function Routes(props){
    return(
        <FlexBox>
            <span> <Badge /> </span>
        <MyRoute>https://mymusicapi25. herokuapp.com/v1/bands/&#123;BandName&#125; </MyRoute>
        </FlexBox>
    )
}