import React, { useState } from 'react';
import './SideBarStyles.js';
import {
  SideBarContentsContainer,
  SideBarInput,
  ContentLinks,
  ContentLinksBounds,
  SideBarInputContainer,
} from './SideBarStyles.js';
import { SideBarContents } from './SideBarContents';

export default function SideBar(props) {
  const [sideBarInput, setSideBarInput] = useState(' ');
  let filteredContent = SideBarContents.filter((element) => {
    if (sideBarInput === ' ') return SideBarContents;
    else {
      return element.toLowerCase().startsWith(sideBarInput.toLowerCase());
    }
  });
  return (
    <SideBarContentsContainer>
      <SideBarInputContainer>
      <SideBarInput
        onChange={(event) => setSideBarInput(event.target.value)}
        placeholder="Search"
      />
      </SideBarInputContainer>
      {filteredContent.map((element) => {
        const link = '#' + element;
        return (
          <ContentLinksBounds key={link}>
            <ContentLinks href={link}>{element}</ContentLinks>
          </ContentLinksBounds>
        );
      })}
    </SideBarContentsContainer>
  );
}
