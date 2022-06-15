import React, {useEffect, useState} from "react";
import Navbar from "../../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
// import { addAddress } from "../../../redux/action/address";
// import { createTransaction } from "../../../redux/action/transaction";
import { getMyCart } from "../../../redux/action/cart";
import { getMyAddress } from "../../../redux/action/myAddress";

import { Code } from "react-content-loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { 
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from "reactstrap";
import Style from "../../../assets/styles/Checkout.module.css";

export default function Checkout() {
	const dispatch = useDispatch();
	const myAddress = useSelector((state) => state.myAddress);
	const listCart = useSelector((state) => state.myCart);
	const [formAddress, setFormAddress] = useState({
		label: "",
		recipientName: "",
		recipientPhone: "",
		address: "",
		city: "",
		postalCode: "",
		isPrimary: false
	});
	const token = localStorage.getItem("token");
	const [paymentWindow, setPaymentWindow] = useState(false);
	const [addressWindow, setAddressWindow] = useState(false);
	const [newAddressWindow, setNewAddressWindow] = useState(false);
	const [editAddressWindow, setEditAddressWindow] = useState(false);
	const paymentToggler = () => {
		setPaymentWindow(!paymentWindow);
	};
	const addressToggler = () => {
		setAddressWindow(!addressWindow);
	};
	const newAddressToggler = () => {
		setNewAddressWindow(!newAddressWindow);
		setAddressWindow(!addressWindow);
	};
	const totalPrice = (data) => {
		let price = 0;
		for (let i = 0; i < data.length; i++) {
			const priceNow = data[i].dataCart.cartqty * parseInt(data[i].dataCart.productprice);
			price += priceNow;
		}
		return price;
	};
	const editAddressToggler = (item) => {
		if (item) {
			setFormAddress({
				label: item.label,
				recipientName: item.recipient_name,
				recipientPhone: item.recipient_phone,
				address: item.address,
				city: item.city,
				postalCode: item.postal_code,
				isPrimary: item.is_primary
			});
		}
		setEditAddressWindow(!editAddressWindow);
		setAddressWindow(!addressWindow);
	};
	useEffect(() => {
		document.title = "TukuShop - Checkout";
		dispatch(getMyAddress());
		dispatch(getMyCart(token));
	}, []);
	return (<>
		<div className="d-flex flex-column container-fluid align-items-center" style={{ padding: "0px" }}>
			<Navbar login={token} />
			<div className="d-flex flex-column mb-5" style={{ width: "80%" }}>
				<h2 className="mb-4">Checkout</h2>
				<div className="row">
					<div className="col-lg-8 col-md-12">
						<div className="d-flex flex-column w-100">
							<h6 className="mb-4">Shipping Address</h6>
							{myAddress.isLoading ?
								(<Code />)
								: myAddress.isError ?
									(<div>Error</div>)
									: myAddress.data.length > 0 ?
										myAddress.data.map((item, index) => (
											item.is_primary ? (<div key={index} className="d-flex flex-column w-100 mb-4"
												style={{ padding: "24px", borderRadius: "5px", boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)" }}
											>
												<h6>{item.recipient_name}</h6>
												<p className="mb-4">
													{`[${item.label}] ${item.address},  ${item.city}, ${item.postal_code}, (HP: ${item.recipient_phone})`}
												</p>
												<button onClick={() => { addressToggler(); }} style={{ width: "200px", padding: "8px", backgroundColor: "#FFF", color: "#9B9B9B", border: "1px solid #9B9B9B", borderRadius: "25px" }}>
									Choose another address
												</button>
											</div>) : null
										))
										: (<div>Error</div>)
							}
							{listCart.isLoading ? 
								(<Code />)
								: listCart.isError ? 
									(<div>Error</div>)
									: listCart.data.length > 0 ?
										listCart.data.map((item, index) => (
											<div key={index} className="w-100 mb-4"
												style={{ padding: "24px", borderRadius: "5px", boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)" }}
											>
												<div className="d-flex align-items-center w-100">
													<input type="checkbox" style={{ marginRight: "25px" }} />
													<div className="row w-100">
														<div className="col-lg-7 col-md-12 mb-4">
															<div className="d-flex align-items-center w-100">
																<div
																	style={{ height: "100px", width: "100px", marginRight: "15px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: "url('https://drive.google.com/uc?export=view&id="+ item.productImages[0]?.photo +"')", borderRadius: "10px" }}
																/>
																<div className="d-flex flex-column">
																	<h6>{item.dataCart.productname}</h6>
																	<small style={{ color: "#9B9B9B" }}>{item.dataCart.storename}</small>
																</div>
															</div>
														</div>
														<div className="col-lg-5 col-md-12">
															<div className="d-flex align-items-center w-100 h-100">
																<div className="d-flex align-items-center">
																	<button style={{ borderRadius: "50%", border: "none" }}>
																		<FontAwesomeIcon icon={faMinus} />
																	</button>
																	<h6 className="mx-4 my-auto">1</h6>
																	<button style={{ borderRadius: "50%", border: "none" }}>
																		<FontAwesomeIcon icon={faPlus} />
																	</button>
																</div>
																<h6 style={{ marginLeft: "auto", marginRight: "0px" }}>
																	{new Intl.NumberFormat("id-ID", {
																		style: "currency",
																		currency: "IDR",
																		minimumFractionDigits: 0,
																	}).format(parseInt(item.dataCart.productprice) * item.dataCart.cartqty)
																	}
																</h6>
															</div>
														</div>
													</div>
												</div>
											</div>
										)) : null
							}
						</div>
					</div>
					<div className="col-lg-4 col-md-12">
						<div className="d-flex flex-column w-100">
							<div className="d-flex flex-column w-100"
								style={{ padding: "24px", borderRadius: "5px", boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)" }}
							>
								<h6 style={{ marginBottom : "30px" }}>Shopping summary</h6>
								<div className="d-flex w-100">
									<h6 style={{ color: "#9B9B9B" }}>Order</h6>
									<h6 style={{ marginLeft: "auto", marginRight: "0px" }}>
										{listCart.isLoading ? "Counting..." : 
											listCart.error === "data not found" ? new Intl.NumberFormat("id-ID", {
												style: "currency",
												currency: "IDR",
												minimumFractionDigits: 0,
											}).format(totalPrice(0)) : 
												listCart.isError ? "Error" : 
													listCart.data.length > 0 ? new Intl.NumberFormat("id-ID", {
														style: "currency",
														currency: "IDR",
														minimumFractionDigits: 0,
													}).format(totalPrice(listCart.data)) : null }
									</h6>
								</div>
								<div className="d-flex w-100">
									<h6 style={{ color: "#9B9B9B" }}>Delivery</h6>
									<h6 style={{ marginLeft: "auto", marginRight: "0px" }}>
										{new Intl.NumberFormat("id-ID", {
											style: "currency",
											currency: "IDR",
											minimumFractionDigits: 0,
										}).format(parseInt(5000))
										}
									</h6>
								</div>
								<hr style={{ height: "1px", color: "#9B9B9B" }} />
								<div className="d-flex w-100 mb-3">
									<h6>Shopping summary</h6>
									<h6 style={{ marginLeft: "auto", marginRight: "0px" }}>
										{listCart.isLoading ? "Counting..." : 
											listCart.error === "data not found" ? new Intl.NumberFormat("id-ID", {
												style: "currency",
												currency: "IDR",
												minimumFractionDigits: 0,
											}).format(0) : 
												listCart.isError ? "Error" : 
													listCart.data.length > 0 ? new Intl.NumberFormat("id-ID", {
														style: "currency",
														currency: "IDR",
														minimumFractionDigits: 0,
													}).format(totalPrice(listCart.data) + 5000) : null }
									</h6>
								</div>
								<button
									style={{ padding: "8px", color: "#FFF", backgroundColor: "#2AA952", border: "none", borderRadius: "25px" }}
									onClick={() => { paymentToggler(); }}
								>
									Select Payment
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* // payment modal */}
			<Modal
				toggle={paymentToggler}
				isOpen={paymentWindow}
			>
				<ModalHeader toggle={paymentToggler}>
					Payment
				</ModalHeader>
				<ModalBody style={{ minHeight: "60vh" }}>
					<h6 className="mb-4">Payment method</h6>
					<div className="d-flex w-100 align-items-center mb-4">
						<div className="d-flex" style={{ width: "30%" }}>
							<img src="/gopay.png" alt="gopay" style={{ width: "80px", height: "20px" }} />
						</div>
						<h6 className="my-auto">Gopay</h6>
						<input className="my-auto" type="radio" name="payment" id="gopay" style={{ marginLeft: "auto" }} />
					</div>
					<div className="d-flex w-100 align-items-center mb-4">
						<div className="d-flex" style={{ width: "30%" }}>
							<img src="/pos-indonesia.png" alt="pos" style={{ width: "60px", height: "40px" }} />
						</div>
						<h6 className="my-auto">Pos Indonesia</h6>
						<input className="my-auto" type="radio" name="payment" id="pos" style={{ marginLeft: "auto" }} />
					</div>
					<div className="d-flex w-100 align-items-center mb-4">
						<div className="d-flex" style={{ width: "30%" }}>
							<img src="/mastercard.png" alt="mastercard" style={{ width: "55px", height: "40px" }} />
						</div>
						<h6 className="my-auto">Mastercard</h6>
						<input className="my-auto" type="radio" name="payment" id="mastercard" style={{ marginLeft: "auto" }} />
					</div>
					<hr />
					<h6 className="mb-3">Shopping summary</h6>
					<div className="d-flex w-100">
						<h6 style={{ color: "#9B9B9B" }}>Order</h6>
						<h6 style={{ marginLeft: "auto" }}>$ 40.0</h6>
					</div>
					<div className="d-flex w-100">
						<h6 style={{ color: "#9B9B9B" }}>Delivery</h6>
						<h6 style={{ marginLeft: "auto" }}>$ 5.0</h6>
					</div>
				</ModalBody>
				<ModalFooter style={{ boxShadow: "0px -8px 10px rgba(217, 217, 217, 0.25)" }}>
					<div className="d-flex align-items-center w-100">
						<div className="d-flex flex-column">
							<h6>Shopping summary</h6>
							<h6>$ 45.0</h6>
						</div>
						<button style={{ border: "none", borderRadius: "25px", backgroundColor: "#2AA952", color: "#FFF", padding: "8px", width: "160px", marginLeft: "auto" }}>Buy</button>
					</div>
				</ModalFooter>
			</Modal>
			{/* // address modal */}
			<Modal
				toggle={addressToggler}
				isOpen={addressWindow}
				className={Style.modalAddress}
			>
				<ModalHeader toggle={addressToggler} style={{ borderBottom: "none" }} />
				<ModalBody style={{ minHeight: "60vh" }}>
					<h3 className="text-center" style={{ marginBottom: "30px" }}>Choose another address</h3>
					<h5 onClick={() => { newAddressToggler(); }} style={{ width: "100%", textAlign: "center", padding: "35px", color: "#9B9B9B", border: "1px dashed #9B9B9B", borderRadius: "10px", marginBottom: "35px" }}> Add new address </h5>
					{myAddress.isLoading ?
						(<Code />)
						: myAddress.isError ? 
							(<div>Error</div>)
							: myAddress.data.length > 0 ? 
								myAddress.data.map((item, index) => (
									<div key={index} className="d-flex flex-column w-100 mb-4" style={{ padding: "30px", border: "1px solid #DB3022", borderRadius: "5px" }}>
										<h6>{item.recipient_name}</h6>
										<p>
											{`[${item.label}] ${item.address},  ${item.city}, ${item.postal_code}, (HP: ${item.recipient_phone})`}
										</p>
										<h6 style={{ color: "#DB3022" }}>Delete address</h6>
										{!item.is_primary ? (<h6>Make primary</h6>) : null}
										<h6 onClick={() => { editAddressToggler(item); }} style={{ color: "#DB3022" }}>Change address</h6>
									</div>
								)) : null
					}
				</ModalBody>
			</Modal>
			{/* // new address modal */}
			<Modal
				toggle={newAddressToggler}
				isOpen={newAddressWindow}
				className={Style.modalAddress}
			>
				<ModalHeader toggle={newAddressToggler} style={{ borderBottom: "none" }} />
				<ModalBody style={{ minHeight: "60vh" }}>
					<h3 className="text-center" style={{ marginBottom: "30px" }}>Add new address</h3>
					<div className="row">
						<div className="col-12 mb-4">
							<p style={{ color: "#9B9B9B" }}>Save address as (ex : home address, office address)</p>
							<input type="text" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} placeholder="Rumah" />
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>Recipient&apos;s name</p>
							<input type="text" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} />
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>Recipient&apos;s telephone number</p>
							<input type="number" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} />
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>Address</p>
							<input type="text" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} />
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>Postal code</p>
							<input type="number" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} />
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>City or Subdistrict</p>
							<input type="text" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} />
						</div>
					</div>
					<div className="d-flex align-items-center">
						<input style={{ marginRight: "15px" }} type="checkbox" />
						<p className="my-auto" style={{ color: "#9B9B9B" }}>Make it the primary address</p>
					</div>
				</ModalBody>
				<ModalFooter>
					<button
						onClick={() => { newAddressToggler(); }}
						style={{ padding: "8px 60px", border: "1px solid #9B9B9B", color: "#9B9B9B", backgroundColor: "#FFF", borderRadius: "25px" }}>
						Cancel
					</button>
					<button
						onClick={() => { newAddressToggler(); }}
						style={{ padding: "8px 60px", border: "none", color: "#FFF", backgroundColor: "#32C33B", borderRadius: "25px" }}>
						Save
					</button>
				</ModalFooter>
			</Modal>
			{/* edit address modal */}
			<Modal
				toggle={editAddressToggler}
				isOpen={editAddressWindow}
				className={Style.modalAddress}
			>
				<ModalHeader toggle={editAddressToggler} style={{ borderBottom: "none" }} />
				<ModalBody style={{ minHeight: "60vh" }}>
					<h3 className="text-center" style={{ marginBottom: "30px" }}>Edit address</h3>
					<div className="row">
						<div className="col-12 mb-4">
							<p style={{ color: "#9B9B9B" }}>Save address as (ex : home address, office address)</p>
							<input type="text" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} placeholder="Rumah" value={formAddress.label}
								onChange={(e) => { setFormAddress({...formAddress, label: e.target.value}); }}
							/>
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>Recipient&apos;s name</p>
							<input type="text" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} value={formAddress.recipientName}
								onChange={(e) => { setFormAddress({...formAddress, recipientName: e.target.value}); }}
							/>
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>Recipient&apos;s telephone number</p>
							<input type="number" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} value={formAddress.recipientPhone}
								onChange={(e) => { setFormAddress({...formAddress, recipientPhone: e.target.value}); }}
							/>
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>Address</p>
							<input type="text" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} value={formAddress.address}
								onChange={(e) => { setFormAddress({...formAddress, address: e.target.value}); }}
							/>
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>Postal code</p>
							<input type="number" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} value={formAddress.postalCode}
								onChange={(e) => { setFormAddress({...formAddress, postalCode: e.target.value}); }}
							/>
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>City or Subdistrict</p>
							<input type="text" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} value={formAddress.city}
								onChange={(e) => { setFormAddress({...formAddress, city: e.target.value}); }}
							/>
						</div>
					</div>
					<div className="d-flex align-items-center">
						<input style={{ marginRight: "15px" }} type="checkbox"
							checked={formAddress.isPrimary ? true : false}
							onChange={() => { setFormAddress({...formAddress, isPrimary: !formAddress.isPrimary}); }}
						/>
						<p className="my-auto" style={{ color: "#9B9B9B" }}>Make it the primary address</p>
					</div>
				</ModalBody>
				<ModalFooter>
					<button
						onClick={() => { editAddressToggler(); }}
						style={{ padding: "8px 60px", border: "1px solid #9B9B9B", color: "#9B9B9B", backgroundColor: "#FFF", borderRadius: "25px" }}>
						Cancel
					</button>
					<button
						onClick={() => { editAddressToggler(); }}
						style={{ padding: "8px 60px", border: "none", color: "#FFF", backgroundColor: "#32C33B", borderRadius: "25px" }}>
						Save
					</button>
				</ModalFooter>
			</Modal>
		</div>
	</>);
}
