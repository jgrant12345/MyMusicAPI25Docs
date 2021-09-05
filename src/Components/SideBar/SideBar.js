import React, { useState } from "react";
import "./SideBarStyles.js"
import { SideBarContentsContainer } from "./SideBarStyles.js";
import { SideBarContents } from "./SideBarContents";

export default function SideBar(props) {
  return (
    <SideBarContentsContainer>
      <input />
      {SideBarContents.map((element) => {
        const route = "/" + element;
        return (
          <div><a key={route + "/"} href={route}>
            {element}
          </a></div>
        );
      })}
    </SideBarContentsContainer>
  );
}
