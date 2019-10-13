import React, { useState, useEffect } from "react";

// SERVICES
import staffService from './services/staffService';

function App() {
  const [staffs, setstaffs] = useState(null);

  useEffect(() => {
    if(!staffs) {
      getStaffs();
    }
  })

  const getStaffs = async () => {
    let res = await staffService.getAll();
    console.log(res);
    setstaffs(res);
  }

  const renderStaff = staff => {
    return (
      <li key={staff._id} className="list__item staff">
        <h3 className="staff__name">{staff.name}</h3>
        <p className="staff__description">{staff.description}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(staffs && staffs.length > 0) ? (
          staffs.map(staff => renderStaff(staff))
        ) : (
          <p>No staff found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
