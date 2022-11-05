import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import Side from "../Elements/Side";
// import Divider from "@material-ui/core/Divider";

function Sideb() {
  return (
    <div>
      <div className="row py-4 px-2 ">
        <h2 style={{ color: "white" }}>Explore</h2>
      </div>
      <div className="row">
        <div className="col-md-3 py-2 sidebarcolomn">
          <ProSidebarProvider>
            <Sidebar className="mx-3">
              <Menu>
                <SubMenu label="Listing Type ">
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> Buy Now{" "}
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> Auction{" "}
                  </MenuItem>
                </SubMenu>

                <SubMenu label="Curation">
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> Curated{" "}
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> Non-Curated{" "}
                  </MenuItem>
                </SubMenu>

                <SubMenu label="Price">
                  <MenuItem> $</MenuItem>
                  <MenuItem>
                    {" "}
                    <input type="text" placeholder="Minimum" />{" "}
                  </MenuItem>
                  <MenuItem>-</MenuItem>
                  <MenuItem>
                    <input type="text" placeholder="Maximum" />
                  </MenuItem>
                </SubMenu>
                <SubMenu label="Collections">
                  <MenuItem></MenuItem>
                  <MenuItem> </MenuItem>
                </SubMenu>
                <SubMenu label="Chains">
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> Crypto.org Chain{" "}
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> Cronos{" "}
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> Ethereum{" "}
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> Polygon{" "}
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> Solona{" "}
                  </MenuItem>
                </SubMenu>
                <SubMenu label="Catagories">
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> Art{" "}
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> Celebrities{" "}
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> Gaming{" "}
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> sport{" "}
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> Music{" "}
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <input type="checkbox" /> Crypto{" "}
                  </MenuItem>
                </SubMenu>
              </Menu>
            </Sidebar>
          </ProSidebarProvider>
        </div>
        <div className="col-md-9">
          <Side />
        </div>
      </div>
    </div>
  );
}

export default Sideb;
