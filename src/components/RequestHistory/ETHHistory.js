import React from 'react';
import { Table } from "react-bootstrap";


const ETHHistory = () => {
  return (
    <>
      <div className="w-50 mt-4 text-center d-none d-md-block" >
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th className="px-4">Sr</th>
            <th>Time</th>
            <th className="px-4">Amount</th>
            <th>Hase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>12:30 AM</td>
            <td>487</td>
            <td>4s8er5s5fe57rjmxnfuewrurks</td>
          </tr>
          <tr>
            <td>2</td>
            <td>10:30 AM</td>
            <td>854</td>
            <td>sf7s7ers4e7r7wser</td>
          </tr>
          <tr>
            <td>3</td>
            <td>11:30 AM</td>
            <td>797</td>		
            <td>se4s7er7</td>
          </tr>
        </tbody>
      </Table>
      </div>
      <div className=" mt-4 text-center d-md-none" >
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Hase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>487</td>
            <td>4s8er5s5fe57rjmxnfuewrurks</td>
          </tr>
          <tr>
            <td>854</td>
            <td>sf7s7ers4e7r7wser</td>
          </tr>
          <tr>
            <td>797</td>		
            <td>se4s7er7</td>
          </tr>
        </tbody>
      </Table>
    </div>
    </>
  );
};

export default ETHHistory;