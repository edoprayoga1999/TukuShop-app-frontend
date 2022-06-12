import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import singa from "../../../assets/images/singa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
	faLocationDot,
	faBoxArchive,
	faPen,
} from "@fortawesome/free-solid-svg-icons";
import "../../../assets/styles/profile.css";
import EditProfileBuyer from "../../../components/profile/EditProfileBuyer";
import Address from "../../../components/profile/Address";
import Order from "../../../components/profile/Order";

export default function Profile() {
	useEffect(() => {
		document.title = "TukuShop - Category";
	}, []);
	const [profile, setprofile] = useState(true);
	const [address, setAddress] = useState(false);
	const [order, setOrder] = useState(false);
	const setContent = (item) => {
		if (item === "profile") {
			setprofile(true);
			setAddress(false);
			setOrder(false);
		}
		if (item === "address") {
			setprofile(false);
			setAddress(true);
			setOrder(false);
		}
		if (item === "order") {
			setprofile(false);
			setAddress(false);
			setOrder(true);
		}
	};
	return (
		<>
			<div
				className="profile d-flex flex-column container-fluid align-items-center"
				style={{ padding: "0px" }}
			>
				<Navbar login={false} />
				<div
					className="d-flex"
					style={{ width: "100%", height: "100vh", marginTop: "-50px" }}
				>
					<div
						className="d-flex flex-column"
						style={{
							width: "30%",
							backgroundColor: "#F5F5F5",
							justifyContent: "flex-start",
							alignItems: "flex-end",
							paddingTop: "50px",
						}}
					>
						<div
							className="d-flex"
							style={{
								width: "80%",
								marginBottom: "60px",
							}}
						>
							<img
								src={singa}
								style={{
									width: "70px",
									height: "70px",
									borderRadius: "50%",
									margin: "0px 30px 30px 0px",
								}}
							/>
							<div>
								<h4>Johanes Mikael</h4>
								<label
									style={{
										display: "flex",
										alignItems: "center",
										fontSize: "16px",
										fontWeight: "500",
										color: "#9B9B9B",
									}}
								>
									<FontAwesomeIcon
										icon={faPen}
										style={{
											color: "#9B9B9B",
											height: "20px",
											width: "20px",
											borderRadius: "50%",
											marginRight: "5px",
										}}
									/>
                  Ubah Profile
								</label>
							</div>
						</div>
						<div
							className="d-flex flex-column"
							style={{
								width: "80%",
							}}
						>
							<label
								style={
									profile
										? {
											display: "flex",
											alignItems: "center",
											height: "40px",
											margin: "10px 0px",
											fontSize: "16px",
											fontWeight: "500",
											color: "black",
										}
										: {
											display: "flex",
											alignItems: "center",
											height: "40px",
											margin: "10px 0px",
											fontSize: "16px",
											fontWeight: "500",
											color: "#9B9B9B",
										}
								}
								onClick={() => setContent("profile")}
							>
								<FontAwesomeIcon
									icon={faUser}
									style={{
										backgroundColor: "#456BF3",
										color: "#FFFFFF",
										height: "25px",
										width: "25px",
										borderRadius: "50%",
										marginRight: "20px",
										padding: "10px",
									}}
								/>
                My account
							</label>
							<label
								style={
									address
										? {
											display: "flex",
											alignItems: "center",
											height: "40px",
											margin: "10px 0px",
											fontSize: "16px",
											fontWeight: "500",
											color: "black",
										}
										: {
											display: "flex",
											alignItems: "center",
											height: "40px",
											margin: "10px 0px",
											fontSize: "16px",
											fontWeight: "500",
											color: "#9B9B9B",
										}
								}
								onClick={() => setContent("address")}
							>
								<FontAwesomeIcon
									icon={faLocationDot}
									style={{
										backgroundColor: "#F36F45",
										color: "#FFFFFF",
										height: "25px",
										width: "25px",
										borderRadius: "50%",
										marginRight: "20px",
										padding: "10px",
									}}
								/>
                Shipping Adress
							</label>
							<label
								style={
									order
										? {
											display: "flex",
											alignItems: "center",
											height: "40px",
											margin: "10px 0px",
											fontSize: "16px",
											fontWeight: "500",
											color: "black",
										}
										: {
											display: "flex",
											alignItems: "center",
											height: "40px",
											margin: "10px 0px",
											fontSize: "16px",
											fontWeight: "500",
											color: "#9B9B9B",
										}
								}
								onClick={() => setContent("order")}
							>
								<FontAwesomeIcon
									icon={faBoxArchive}
									style={{
										backgroundColor: "#F3456F",
										color: "#FFFFFF",
										height: "25px",
										width: "25px",
										borderRadius: "50%",
										marginRight: "20px",
										padding: "10px",
									}}
								/>
                My order
							</label>
						</div>
					</div>

					<EditProfileBuyer hidden={profile} />
					<Address hidden={address} />
					<Order hidden={order} />
				</div>
			</div>
		</>
	);
}
