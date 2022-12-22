import { React, useState } from "react";
import { NavLink } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";


const LeftFilter = ({ setCategory }) => {
 
  return (
    <div
      style={{ display: "flex", height: "100vh", top: "0", position: "sticky" }}
    >
      <CDBSidebar textColor="white" backgroundColor="gray" toggled={(!false)}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <span
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Filters
          </span>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink>
              <CDBSidebarMenuItem
                icon="tshirt"
                value="clothing"
                onClick={() => setCategory("Clothing")}
              >
                Clothing
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink>
              <CDBSidebarMenuItem
                icon="gamepad"
                onClick={() => setCategory("Electronics")}
              >
                Electronics
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink>
              <CDBSidebarMenuItem
                icon="utensils"
                value="food"
                onClick={() => setCategory("Food")}
              >
                Food
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink>
              <CDBSidebarMenuItem
                icon="shopping-cart"
                value="general"
                onClick={() => setCategory("General")}
              >
                General
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink>
              <CDBSidebarMenuItem icon="box" onClick={() => setCategory("")}>
                All
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default LeftFilter;
