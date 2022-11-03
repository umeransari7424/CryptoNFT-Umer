import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import Divider from "@material-ui/core/Divider";


function Sideb() {
  return (
    <div>
        <Sidebar className='mx-3'>
  <Menu>
    <SubMenu label="Listing Type " >
      <MenuItem> <input type="checkbox" /> Buy Now </MenuItem>
      <MenuItem> <input type="checkbox" /> Auction </MenuItem>
    </SubMenu>
   
    <SubMenu label="Curation">
      <MenuItem> <input type="checkbox" /> Curated </MenuItem>
      <MenuItem> <input type="checkbox" /> Non-Curated </MenuItem>
    </SubMenu>
    
    <SubMenu label="Price">
      <MenuItem> $</MenuItem>
      <MenuItem> <input type="text" placeholder='Minimum' />  </MenuItem>
      <MenuItem>-</MenuItem>
      <MenuItem><input type="text" placeholder='Maximum' /></MenuItem>
      
    </SubMenu>
    <SubMenu label="Collections">
      <MenuItem></MenuItem>
      <MenuItem> </MenuItem>
    </SubMenu>
    <SubMenu label="Chains">
      <MenuItem> <input type="checkbox" /> Crypto.org Chain </MenuItem>
      <MenuItem> <input type="checkbox" /> Cronos </MenuItem>
      <MenuItem> <input type="checkbox" /> Ethereum </MenuItem>
      <MenuItem> <input type="checkbox" /> Polygon </MenuItem>
      <MenuItem> <input type="checkbox" /> Solona </MenuItem>
    </SubMenu>
    <SubMenu label="Catagories">
      <MenuItem> <input type="checkbox" /> Art </MenuItem>
      <MenuItem> <input type="checkbox" /> Celebrities </MenuItem>
      <MenuItem> <input type="checkbox" /> Gaming  </MenuItem>
      <MenuItem> <input type="checkbox" /> sport </MenuItem>
      <MenuItem> <input type="checkbox" /> Music </MenuItem>
      <MenuItem> <input type="checkbox" /> Crypto </MenuItem>
    </SubMenu>

    
  </Menu>
</Sidebar>
    </div>
  )
}

export default Sideb;