import React from "react";
import Table from "react-bootstrap/Table";

const BookingHistory = () => {
  return (
    <div style={{ width: "80%", margin: "12px" }}>
      <Table striped bordered hover variant="dark" className="">
        <thead>
          <tr>
            <th>Locker size</th>
            <th>Check-in time</th>
            <th>Check-out time</th>
            <th>Total Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default BookingHistory;
