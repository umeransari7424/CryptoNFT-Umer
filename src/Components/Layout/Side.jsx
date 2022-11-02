import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Sideb from '../Utils/Sideb';


function Side() {

  return (
    <div className='sidebar py-5'>
      <div className="container-fluid px-3">

      
<div className="row py-4">
  <h2>Filter</h2>
</div>
      <ProSidebarProvider>
      <Sideb/>
        </ProSidebarProvider>
      </div>
      
      
    </div>
  );
}

export default Side;