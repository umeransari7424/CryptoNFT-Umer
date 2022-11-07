import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import Side from "../Elements/Side";
// import Divider from "@material-ui/core/Divider";


function Sideb() {
  
  return (
    <div className="sideb ">
      <div className="container-fluid px-3">
        <div className="row py-4 droprow">
          <h2 style={{ color: "white" }}>Explore</h2>
        </div>
        <div className="row ">
          <div className="col-md-3 py-2 sidebarcolomn ">
          <ProSidebarProvider>
              <Sidebar className="mx-3 droprow2">
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
            <div className="row py-2 droprow">
              <div className="dropdown-g d-flex justify-content-end">
                <div className="dropdown ">
                  <button
                    className="btn btn-secondary dropdown-toggle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <CgArrowsExchangeAltV size={"30px"} />
                    <b>Sort By</b>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div> &nbsp; &nbsp; 
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autocomplete="off"
                    checked
                  />
                  <label className="btn btn-outline-primary" for="btnradio1">
                    <img src="Assets/four.svg" alt="" />
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autocomplete="off"
                  />
                  <label class="btn btn-outline-primary" for="btnradio2">
                  <img src="Assets/nine.svg" alt="" />
                  </label>
                </div>
              </div>
            </div>
            <Side />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sideb;
