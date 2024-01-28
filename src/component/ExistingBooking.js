import React from "react";
import Table from "react-bootstrap/Table";

const ExistingBooking = () => {
  return (
    <div style={{ width: "80%", margin: "12px" }}>
      <Table striped bordered hover variant="dark" className="">
        <thead>
          <tr>
            <th>Locker size</th>
            <th>Check-in time</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ExistingBooking;
