import React from 'react';
import { TableHeader, TableData, TableStyle, Code } from './TableStyles';
export default function Table(props) {
  const { header, body } = props;
  return (
    <div>
      <TableStyle>
        <TableHeader>{header}</TableHeader>
        <tr>
          <TableData>
            <Code> {body} </Code>
          </TableData>
        </tr>
      </TableStyle>
    </div>
  );
}
