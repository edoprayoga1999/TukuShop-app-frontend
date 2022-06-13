/* eslint-disable indent */
import React from "react";

export default function DetailTransaction(props) {
  return (
    <div className="content" hidden={props.hidden ? "" : "hidden"}>
      <div className="order">
        <h2>Order detail</h2>
        <hr
          style={{
            border: "1px solid #9B9B9B",
            height: "1px",
            backgroundColor: "#9B9B9B",
            width: "100%",
          }}
        />
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
          }}
          className="table-order"
        >
          <tr>
            <td style={{ width: "30%", fontWeight: "500" }}>Invoice</td>
            <td style={{ width: "70%" }}>n029e0wjdincj-djivns-sdjvin22</td>
          </tr>
          <tr>
            <td style={{ width: "30%", fontWeight: "500" }}>Payment</td>
            <td style={{ width: "70%" }}>gopay</td>
          </tr>
          <tr>
            <td style={{ width: "30%", fontWeight: "500" }}>Status</td>
            <td style={{ width: "70%" }}>waiting</td>
          </tr>
          <tr>
            <td style={{ width: "30%", fontWeight: "500" }}>Total Price</td>
            <td style={{ width: "70%" }}>300.000</td>
          </tr>
          <tr>
            <td style={{ width: "30%", fontWeight: "500" }}>Created at</td>
            <td style={{ width: "70%" }}>20 juni 2022</td>
          </tr>
          <tr>
            <td style={{ width: "30%", fontWeight: "500" }}>Product</td>
            <td style={{ width: "70%" }}>recall tas tas tas</td>
          </tr>
          <tr>
            <td style={{ width: "30%", fontWeight: "500" }}>Address</td>
            <td style={{ width: "70%" }}>Land of dawn</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
