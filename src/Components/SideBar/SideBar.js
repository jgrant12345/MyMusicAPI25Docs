import React, { useState } from 'react';
import './SideBarStyles.js';
import { SideBarContentsContainer, SideBarInput, ContentLinks, ContentLinksBounds } from './SideBarStyles.js';
import { SideBarContents } from './SideBarContents';

export default function SideBar(props) {
  const [SideBar, setSideBar] = useState("");

  return (
    <SideBarContentsContainer>
      <SideBarInput />
      {SideBarContents.map((element) => {
        const route = '/' + element;
        return (
          <ContentLinksBounds key={route + '/'}>
            <ContentLinks  href={route}>
              {element}
            </ContentLinks>
          </ContentLinksBounds>
        );
      })}
    </SideBarContentsContainer>
  );
}
