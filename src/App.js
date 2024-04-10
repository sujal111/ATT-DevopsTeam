// App.js
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import SearchBox from './SearchBox'; // Assuming SearchBox is exported from './SearchBox'
import Sidebar from './Sidebar'; // Import Sidebar component

import attLogo from './att_logo.png'; // Import AT&T logo
import './App.css';


function App() {
  const [showCreatePromoDialog, setShowCreatePromoDialog] = useState(false);

  const handleShowCreatePromoDialog = () => {
    setShowCreatePromoDialog(!showCreatePromoDialog);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img loading="lazy" src={attLogo} alt="AT&T Logo" style={{ width: '120px' }} /> {/* Adjust width as needed */}
          </a>
        </div>
      </nav>

      <Sidebar /> {/* Include the Sidebar component here */}

      <div style={{ marginLeft: '250px', height: '100vh' }}> {/* Adjust marginLeft according to the width of the sidebar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            {/* Navbar content */}
          </div>
        </nav>

        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <Button
            label="CREATE"
            icon="pi pi-plus"
            className="p-button-white mr-2"
            style={{ fontSize: '13px' }} // Adjust icon size
            onClick={handleShowCreatePromoDialog}
          />
          <Button
            label="HOME"
            className="p-button-text"
            style={{ color: '#0072c6' }} // Adjust text color
          />
        </div>

        {/* <SearchBox /> */}
      </div>
    </div>
  );
}

export default App;
