import React, {useEffect, useState} from "react";
import Navbar from "../../../components/Navbar";
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
	const editAddressToggler = () => {
		setEditAddressWindow(!editAddressWindow);
		setAddressWindow(!addressWindow);
	};
	useEffect(() => {
		document.title = "TukuShop - Checkout";
	}, []);
	return (<>
		<div className="d-flex flex-column container-fluid align-items-center" style={{ padding: "0px" }}>
			<Navbar login={token} />
			<div className="d-flex flex-column mb-5" style={{ width: "80%" }}>
				<h2 className="mb-4">Checkout</h2>
				<div className="row">
					<div className="col-lg-8 col-md-12">
						<div className="d-flex flex-column w-100">
							<h6 className="mb-4">Shipping Adress</h6>
							<div className="d-flex flex-column w-100 mb-4"
								style={{ padding: "24px", borderRadius: "5px", boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)" }}
							>
								<h6>Andreas Jane</h6>
								<p className="mb-4">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
								<button onClick={() => { addressToggler(); }} style={{ width: "200px", padding: "8px", backgroundColor: "#FFF", color: "#9B9B9B", border: "1px solid #9B9B9B", borderRadius: "25px" }}>
									Choose another address
								</button>
							</div>
							<div className="w-100 mb-4"
								style={{ padding: "24px", borderRadius: "5px", boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)" }}
							>
								<div className="d-flex align-items-center w-100">
									<input type="checkbox" style={{ marginRight: "25px" }} />
									<div className="row w-100">
										<div className="col-lg-7 col-md-12 mb-4">
											<div className="d-flex align-items-center w-100">
												<div
													style={{ height: "100px", width: "100px", marginRight: "15px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: "url('/tshirt.jpg')", borderRadius: "10px" }}
												/>
												<div className="d-flex flex-column">
													<h6>Men&apos;s formal suit - Black</h6>
													<small style={{ color: "#9B9B9B" }}>Zalora Cloth</small>
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
												<h6 style={{marginLeft: "auto", marginRight: "0px"}}>$ 20.0</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="w-100 mb-4"
								style={{ padding: "24px", borderRadius: "5px", boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)" }}
							>
								<div className="d-flex align-items-center w-100">
									<input type="checkbox" style={{ marginRight: "25px" }} />
									<div className="row w-100">
										<div className="col-lg-7 col-md-12 mb-4">
											<div className="d-flex align-items-center w-100">
												<div
													style={{ height: "100px", width: "100px", marginRight: "15px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: "url('/jacket.jpg')", borderRadius: "10px" }}
												/>
												<div className="d-flex flex-column">
													<h6>Men&apos;s Jacket jeans</h6>
													<small style={{ color: "#9B9B9B" }}>Zalora Cloth</small>
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
												<h6 style={{marginLeft: "auto", marginRight: "0px"}}>$ 20.0</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
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
									<h6 style={{ marginLeft: "auto", marginRight: "0px" }}>$ 40.0</h6>
								</div>
								<div className="d-flex w-100">
									<h6 style={{ color: "#9B9B9B" }}>Delivery</h6>
									<h6 style={{ marginLeft: "auto", marginRight: "0px" }}>$ 5.0</h6>
								</div>
								<hr style={{ height: "1px", color: "#9B9B9B" }} />
								<div className="d-flex w-100 mb-3">
									<h6>Shopping summary</h6>
									<h6 style={{ marginLeft: "auto", marginRight: "0px" }}>$ 45.0</h6>
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
					<div className="d-flex flex-column w-100 mb-4" style={{ padding: "30px", border: "1px solid #DB3022", borderRadius: "5px" }}>
						<h6>Andreas Jane</h6>
						<p>
							Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
						</p>
						<h6 onClick={() => { editAddressToggler(); }} style={{ color: "#DB3022" }}>Change address</h6>
					</div>
					<div className="d-flex flex-column w-100 mb-4" style={{ padding: "30px", border: "1px solid #000", borderRadius: "5px" }}>
						<h6>Andreas Jane</h6>
						<p>
							Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
						</p>
						<h6 style={{ color: "#DB3022" }}>Delete address</h6>
						<h6>Make primary</h6>
					</div>
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
							<input type="text" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} placeholder="Rumah" value="Rumah" />
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>Recipient&apos;s name</p>
							<input type="text" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} value="Andreas Jane" />
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>Recipient&apos;s telephone number</p>
							<input type="number" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} value="0813131313" />
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>Address</p>
							<input type="text" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} value="Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja" />
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>Postal code</p>
							<input type="number" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} value="53181" />
						</div>
						<div className="col-md-6 col-sm-12 mb-4">
							<p style={{ color: "#9B9B9B", width: "100%" }}>City or Subdistrict</p>
							<input type="text" style={{ border: "1px solid #9B9B9B", borderRadius: "5px", padding: "15px", width: "100%" }} value="Kabupaten Banyumas, Jawa Tengah" />
						</div>
					</div>
					<div className="d-flex align-items-center">
						<input style={{ marginRight: "15px" }} type="checkbox" />
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
