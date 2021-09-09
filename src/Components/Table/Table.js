import React from "react";
import { TableHeader, TableData, TableStyle, Code } from "./TableStyles";
export default function Table(props) {
    const { header, body }  = props 
    return (
        <div>
            {header} {body}
        <TableStyle>
            <TableHeader>Response</TableHeader>
            <tr>
                <TableData><Code>height {"\n"} jkljskd</Code></TableData>
            </tr>
        </TableStyle>
        </div>
    )
} 