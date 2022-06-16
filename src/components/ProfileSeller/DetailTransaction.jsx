/* eslint-disable indent */
import React, { useEffect } from "react";
import moment from "moment";

export default function DetailTransaction(props) {
	const data = props.data;
	const idr = new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
	});
	useEffect(() => {}, []);

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
						<td style={{ width: "70%" }}>{data.invoice}</td>
					</tr>
					<tr>
						<td style={{ width: "30%", fontWeight: "500" }}>Payment</td>
						<td style={{ width: "70%" }}>{data.payment_method}</td>
					</tr>
					<tr>
						<td style={{ width: "30%", fontWeight: "500" }}>Status</td>
						{data.status == 1 && <td style={{ width: "70%" }}>new</td>}
						{data.status == 2 && <td style={{ width: "70%" }}>packed</td>}
						{data.status == 3 && <td style={{ width: "70%" }}>sent</td>}
						{data.status == 4 && <td style={{ width: "70%" }}>completed</td>}
						{data.status == 0 && <td style={{ width: "70%" }}>cancelled</td>}
					</tr>
					<tr>
						<td style={{ width: "30%", fontWeight: "500" }}>Total Price</td>
						<td style={{ width: "70%" }}>{idr.format(data.total)}</td>
					</tr>
					<tr>
						<td style={{ width: "30%", fontWeight: "500" }}>Created at</td>
						<td style={{ width: "70%" }}>
							{moment(data.date).format("DD MMMM YYYY")}
						</td>
					</tr>
					<tr>
						<td style={{ width: "30%", fontWeight: "500" }}>Product</td>
						<td style={{ width: "70%" }}>{data.product_name}</td>
					</tr>
					<tr>
						<td style={{ width: "30%", fontWeight: "500" }}>Recipient Name</td>
						<td style={{ width: "70%" }}>{data.recipient_name}</td>
					</tr>
					<tr>
						<td style={{ width: "30%", fontWeight: "500" }}>Recipient Phone</td>
						<td style={{ width: "70%" }}>{data.recipient_phone}</td>
					</tr>
					<tr>
						<td style={{ width: "30%", fontWeight: "500" }}>Address</td>
						<td style={{ width: "70%" }}>{data.address}</td>
					</tr>
				</table>
			</div>
		</div>
	);
}
