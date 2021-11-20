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
          <tr>
            <Code> {body} </Code>
          </tr>
          </tbody>
      </TableStyle>
  );
}
