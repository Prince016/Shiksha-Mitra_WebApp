import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./history.css";

const History = () => {
  return (
    <div className="history-table">
      {/* <Table  striped bordered hover size="sm">
        <thead  >
          <tr>
            <th>#</th>
            <th>Class Details</th>
            <th>Mentor/Mentee</th>
            <th>Resources Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <div>
                <p>
                  <b> Subject :</b> <span>Computer Networks</span>
                </p>
                <p>
                  <b> Topic :</b> <span>Computer Networks</span>
                </p>
                <p>
                  <b> Day : </b> <span>Monday</span>
                </p>
                <p>
                  <b> Time :</b> <span> 2:30 - 3:30 PM </span>
                </p>
                <p>
                  <b> Status :</b> <span> Done </span>
                </p>
              </div>
            </td>
            <td>Otto</td>
            <td>
              {" "}
              <p>
                {" "}
                <Link target="_blank" to="https://www.google.co.in/">
                  {" "}
                  Materials{" "}
                </Link>{" "}
              </p>
            </td>
          </tr>
        
          
        </tbody>
      </Table> */}

      <table id="customers">
        <tr>
          <th>S.NO</th>
          <th>Class Details</th>
          <th>Mentor/Mentee</th>
          <th>Resources Link</th>
        </tr>

        <tr>
          <td className="countCell"></td>
          <td>
            <table id="classDetail-table">
              <tr>
                {/* <th  style={{backgroundColor:"transparent", color:"black"}}> Subject </th> */}
                <th>
                  <b> Subject </b>
                </th>
                <th>:</th>
                <th>Computer Networks</th>
              </tr>
              <tr>
                <th>
                  <b> Topic </b>
                </th>
                <th>:</th>
                <th> this is topic</th>
              </tr>
              <tr>
                <th>
                  <b> Day </b>
                </th>
                <th>:</th>
                <th> Monday </th>
              </tr>
              <tr>
                <th>
                  <b> Time </b>
                </th>
                <th>:</th>
                <th> 2:30 - 3:30 PM </th>
              </tr>
              <tr>
                <th>
                  <b> Status </b>
                </th>
                <th>:</th>
                <th> Done </th>
              </tr>
            </table>

            
          </td>
          <td>Rahul</td>
          <td>
            {" "}
            <p>
              {" "}
              <Link target="_blank" to="https://www.google.co.in/">
                {" "}
                Materials{" "}
              </Link>{" "}
            </p>
          </td>
        </tr>
        <tr>
          <td className="countCell"></td>
          <td>
            <table id="classDetail-table">
              <tr>
                {/* <th  style={{backgroundColor:"transparent", color:"black"}}> Subject </th> */}
                <th>
                  <b> Subject </b>
                </th>
                <th>:</th>
                <th>Computer Networks</th>
              </tr>
              <tr>
                <th>
                  <b> Topic </b>
                </th>
                <th>:</th>
                <th> this is topic</th>
              </tr>
              <tr>
                <th>
                  <b> Day </b>
                </th>
                <th>:</th>
                <th> Monday </th>
              </tr>
              <tr>
                <th>
                  <b> Time </b>
                </th>
                <th>:</th>
                <th> 2:30 - 3:30 PM </th>
              </tr>
              <tr>
                <th>
                  <b> Status </b>
                </th>
                <th>:</th>
                <th> Done </th>
              </tr>
            </table>

            
          </td>
          <td>Rahul</td>
          <td>
            {" "}
            <p>
              {" "}
              <Link target="_blank" to="https://www.google.co.in/">
                {" "}
                Materials{" "}
              </Link>{" "}
            </p>
          </td>
        </tr>
        <tr>
          <td className="countCell"></td>
          <td>
            <table id="classDetail-table">
              <tr>
                {/* <th  style={{backgroundColor:"transparent", color:"black"}}> Subject </th> */}
                <th>
                  <b> Subject </b>
                </th>
                <th>:</th>
                <th>Computer Networks</th>
              </tr>
              <tr>
                <th>
                  <b> Topic </b>
                </th>
                <th>:</th>
                <th> this is topic</th>
              </tr>
              <tr>
                <th>
                  <b> Day </b>
                </th>
                <th>:</th>
                <th> Monday </th>
              </tr>
              <tr>
                <th>
                  <b> Time </b>
                </th>
                <th>:</th>
                <th> 2:30 - 3:30 PM </th>
              </tr>
              <tr>
                <th>
                  <b> Status </b>
                </th>
                <th>:</th>
                <th> Done </th>
              </tr>
            </table>

            
          </td>
          <td>Rahul</td>
          <td>
            {" "}
            <p>
              {" "}
              <Link target="_blank" to="https://www.google.co.in/">
                {" "}
                Materials{" "}
              </Link>{" "}
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default History;
