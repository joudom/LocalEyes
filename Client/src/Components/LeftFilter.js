import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const LeftFilter = () => {
  return (

    <div style={{ display: 'flex', height: '50vh', top: '7vh', position: '-webkit-sticky', position: 'sticky' }}>
      <CDBSidebar textColor="white" backgroundColor="gray" toggled="false">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>Filters</a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="wallet">Price</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tshirt">Clothing</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="gamepad">Electronics</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="utensils">Food</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="shopping-cart">General</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Locals</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  );
};


/* <Nav defaultActiveKey="/home" className="flex-column" id='sidebar'>
<Nav.Link href="/home">Active</Nav.Link>
<Nav.Link eventKey="link-1">Link</Nav.Link>
<Nav.Link eventKey="link-2">Link</Nav.Link>
<Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
</Nav>
  )
} */

// <div className='sidebar'>
//     <nav id="sidebar">
//     <div class="sidebar-header">
//         <h3>Bootstrap Sidebar</h3>
//     </div>

//     <ul class="list-unstyled components">
//         <p>Dummy Heading</p>
//         <li class="active">
//             <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
//             <ul class="collapse list-unstyled" id="homeSubmenu">
//                 <li>
//                     <a href="#">Home 1</a>
//                 </li>
//                 <li>
//                     <a href="#">Home 2</a>
//                 </li>
//                 <li>
//                     <a href="#">Home 3</a>
//                 </li>
//             </ul>
//         </li>
//         <li>
//             <a href="#">About</a>
//         </li>
//         <li>
//             <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
//             <ul class="collapse list-unstyled" id="pageSubmenu">
//                 <li>
//                     <a href="#">Page 1</a>
//                 </li>
//                 <li>
//                     <a href="#">Page 2</a>
//                 </li>
//                 <li>
//                     <a href="#">Page 3</a>
//                 </li>
//             </ul>
//         </li>
//         <li>
//             <a href="#">Portfolio</a>
//         </li>
//         <li>
//             <a href="#">Contact</a>
//         </li>
//     </ul>
// </nav>
// </div>
// )
// }

export default LeftFilter;