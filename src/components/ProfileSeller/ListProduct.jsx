import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabPane, TabContent } from "reactstrap";
import searchIcon from "../../assets/images/magnifyingGlass.svg";


export default function ListProduct(props) {
	const [activeTab, setActiveTab] = useState("1");
	return (
		<div className="content" hidden={props.hidden ? "" : "hidden"}>
			<div className="product">
				<h2>My Product</h2>
				<Nav>
					<NavItem>
						<NavLink
							style={
								activeTab == "1"
									? {
										alignItems: "center",
										height: "40px",
										fontSize: "16px",
										fontWeight: "500",
										color: "#DB3022",
										border: "none",
										borderBottom: "3px solid #DB3022",
										width: "100px",
										textAlign: "center",
									}
									: {
										alignItems: "center",
										height: "40px",
										fontSize: "16px",
										fontWeight: "500",
										color: "#9B9B9B",
										border: "none",
										width: "100px",
										textAlign: "center",
									}
							}
							onClick={() => setActiveTab("1")}
						>
              All items
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							style={
								activeTab == "2"
									? {
										alignItems: "center",
										height: "40px",
										fontSize: "16px",
										fontWeight: "500",
										color: "#DB3022",
										border: "none",
										borderBottom: "3px solid #DB3022",
										width: "100px",
										textAlign: "center",
									}
									: {
										alignItems: "center",
										height: "40px",
										fontSize: "16px",
										fontWeight: "500",
										color: "#9B9B9B",
										border: "none",
										width: "100px",
										textAlign: "center",
									}
							}
							onClick={() => setActiveTab("2")}
						>
              Sold out
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							style={
								activeTab == "3"
									? {
										alignItems: "center",
										height: "40px",
										fontSize: "16px",
										fontWeight: "500",
										color: "#DB3022",
										border: "none",
										borderBottom: "3px solid #DB3022",
										width: "100px",
										textAlign: "center",
									}
									: {
										alignItems: "center",
										height: "40px",
										fontSize: "16px",
										fontWeight: "500",
										color: "#9B9B9B",
										border: "none",
										width: "100px",
										textAlign: "center",
									}
							}
							onClick={() => setActiveTab("3")}
						>
              Archived
						</NavLink>
					</NavItem>
				</Nav>

				<div
					className="d-flex align-items-center"
					style={{
						width: "50%",
						border: "1px solid #8E8E93",
						borderRadius: "25px",
						paddingLeft: "10px",
						paddingRight: "20px",
						margin: "20px 0px 10px 0px",
					}}
				>
					<input
						style={{
							width: "100%",
							border: "none",
							padding: "10px",
							borderRadius: "25px",
						}}
						type="text"
						placeholder="Search"
					/>
					<img src={searchIcon} />
				</div>
				<TabContent activeTab={activeTab}>
					<TabPane tabId="1" style={{ minHeight: "400px" }}>
						<table
							style={{
								borderCollapse: "collapse",
								width: "100%",
							}}
							className="table-order"
						>
							<tr style={{ backgroundColor: "#e5e5e5", color: "#9B9B9B" }}>
								<th style={{ width: "900px" }}>Product name</th>
								<th style={{ width: "100px" }}>Price</th>
								<th style={{ width: "100px" }}>Stock</th>
							</tr>
							<tr>
								<td>Recall tas tas tas</td>
								<td>100.000</td>
								<td>99</td>
							</tr>
						</table>
					</TabPane>
					<TabPane tabId="2" style={{ minHeight: "400px" }}>
						<table
							style={{
								borderCollapse: "collapse",
								width: "100%",
							}}
							className="table-order"
						>
							<tr style={{ backgroundColor: "#e5e5e5", color: "#9B9B9B" }}>
								<th style={{ width: "300px" }}>Invoice</th>
								<th style={{ width: "100px" }}>Status</th>
								<th style={{ width: "100px" }}>Payment</th>
								<th style={{ width: "150px" }}>Total Price:</th>
								<th style={{ width: "300px" }}>Created at</th>
								<th style={{ width: "100px" }}>Action</th>
							</tr>
							<tr>
								<td>n029e0wjdincj-djivns-sdjvin22</td>
								<td>waiting</td>
								<td>gopay</td>
								<td>300.000</td>
								<td>20 juni 2022</td>
								<td>
									<button
										style={{
											border: "1px solid #e5e5e5",
											borderRadius: "10px",
											backgroundColor: "#FFFFFF",
											color: "#9B9B9B",
											width: "100%",
											padding: "5px 10px",
										}}
									>
                    view
									</button>
								</td>
							</tr>
						</table>
					</TabPane>
					<TabPane tabId="3" style={{ minHeight: "400px" }}>
						<table
							style={{
								borderCollapse: "collapse",
								width: "100%",
							}}
							className="table-order"
						>
							<tr style={{ backgroundColor: "#e5e5e5", color: "#9B9B9B" }}>
								<th style={{ width: "300px" }}>Invoice</th>
								<th style={{ width: "100px" }}>Status</th>
								<th style={{ width: "100px" }}>Payment</th>
								<th style={{ width: "150px" }}>Total Price:</th>
								<th style={{ width: "300px" }}>Created at</th>
								<th style={{ width: "100px" }}>Action</th>
							</tr>
							<tr>
								<td>n029e0wjdincj-djivns-sdjvin22</td>
								<td>waiting</td>
								<td>gopay</td>
								<td>300.000</td>
								<td>20 juni 2022</td>
								<td>
									<button
										style={{
											border: "1px solid #e5e5e5",
											borderRadius: "10px",
											backgroundColor: "#FFFFFF",
											color: "#9B9B9B",
											width: "100%",
											padding: "5px 10px",
										}}
									>
                    view
									</button>
								</td>
							</tr>
						</table>
					</TabPane>
				</TabContent>
			</div>
		</div>
	);
}
