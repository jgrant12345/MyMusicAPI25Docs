import { MyRoute } from "./RouteStyles"
import Badge from "../Badge/Badge"
import { FlexBox } from "./RouteStyles"
export function Routes(props){
    return(
        <FlexBox>
            <span> <Badge /> </span>
        <MyRoute>{props.RouteName}</MyRoute>
        </FlexBox>
    )
}