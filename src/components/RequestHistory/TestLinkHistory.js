import React from 'react';
import { Table } from 'react-bootstrap';
import './RequestHistory.css'

const TestLinkHistory = () => {
  return (
    <>
      <div className="w-50 mt-4 text-center d-none d-md-block " >
    <Table  responsive="sm" bordered hover size="sm">
      <thead>
        <tr>
          <th className="px-4">Sr</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Hase</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>8:30 AM</td>
          <td>748</td>
          <td>7s7effkeurusue4</td>
        </tr>
        <tr>
          <td>2</td>
          <td>10:23 AM</td>
          <td>974</td>
          <td>sfe7r7sr4fer</td>
        </tr>
        <tr>
          <td>3</td>
          <td>11:10 AM</td>
          <td>874</td>
          <td>s4e7s8er</td>
        </tr>
      </tbody>
    </Table>
      </div>
      <div className=" mt-4 text-center d-md-none " >
    <Table  responsive="sm" bordered hover size="sm">
      <thead>
        <tr>
          <th className="px-4">Amount</th>
          <th>Hase</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>748</td>
          <td>7s7effkeurusue4</td>
        </tr>
        <tr>
          <td>974</td>
          <td>sfe7r7sr4fer</td>
        </tr>
        <tr>
          <td>874</td>
          <td>s4e7s8er</td>
        </tr>
      </tbody>
    </Table>
  </div>
    </>
  );
};

export default TestLinkHistory;