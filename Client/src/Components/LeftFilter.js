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
      <CDBSidebar textColor="white" backgroundColor="gray" toggled="false">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Filters
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem
                icon="wallet"
                value="price"
                onClick={() => setCategory("price")}
              >
                Price
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem
                icon="tshirt"
                value="clothing"
                onClick={() => setCategory("clothing")}
              >
                Clothing
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem
                icon="gamepad"
                onClick={() => setCategory("electronics")}
              >
                Electronics
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem
                icon="utensils"
                value="food"
                onClick={() => setCategory("food")}
              >
                Food
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem
                icon="shopping-cart"
                value="general"
                onClick={() => setCategory("general")}
              >
                General
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" onClick={() => setCategory("")}>
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
