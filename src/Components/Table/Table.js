import React from 'react';
import { TableHeader, TableData, TableStyle, Code } from './TableStyles';
export default function Table(props) {
  const { header, body } = props;
  return (
      <TableStyle>
        <thead>
          <tr>
        <TableHeader>{header}</TableHeader>
        </tr>
        </thead>
       <tbody>
          <TableData>
            <Code> {body} </Code>
          </TableData>
          </tbody>
      </TableStyle>
  );
}
