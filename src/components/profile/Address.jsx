import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function Address(props) {
	const [show, setShow] = useState(false);
	const [check, setCheck] = useState(false);
	const modalToggler = () => {
		setShow(!show);
	};
	return (
		<div className="content" hidden={props.hidden ? "" : "hidden"}>
			<div className="address">
				<h2>Choose another address</h2>
				<label
					style={{
						fontSize: "16px",
						fontWeight: "500",
						color: "#9B9B9B",
					}}
				>
          Manage your shipping address
				</label>
				<hr
					style={{
						border: "1px solid #9B9B9B",
						height: "1px",
						backgroundColor: "#9B9B9B",
						width: "100%",
					}}
				/>

				<div>
					<button
						style={{
							margin: "30px 0px",
							border: "3px dashed #9B9B9B",
							height: "100px",
							width: "100%",
							borderRadius: "10px",
							textAlign: "center",
							padding: "8px",
							fontSize: "16px",
							fontWeight: "500",
							color: "#9B9B9B",
						}}
						onClick={() => modalToggler()}
					>
            Add Address
					</button>

					<Modal
						toggle={() => modalToggler()}
						isOpen={show}
						size="lg"
						style={{ maxWidth: "900px", width: "100%" }}
					>
						<ModalHeader toggle={() => modalToggler()}></ModalHeader>
						<ModalBody>
							<div className="row" style={{ marginTop: "30px", width: "100%" }}>
								<h2 className="col-12" style={{ textAlign: "center" }}>
                  Add New Address
								</h2>
								<div
									className="col-xl-12 col-lg-12 col-md-12 col-sm-12"
									style={{
										maxWidth: "900px",
										width: "100%",
										padding: "0px 40px",
									}}
								>
									<div
										style={{
											margin: "12px",
											fontSize: "16px",
											fontWeight: "500",
											color: "#9B9B9B",
											marginRight: "40px",
										}}
									>
                    Save address as (ex : home address, office address)
									</div>
									<input
										type="text"
										placeholder="Rumah"
										style={{
											width: "100%",
											height: "48px",
											border: "1px solid #9B9B9B",
											padding: "12px",
											borderRadius: "5px",
										}}
									/>
								</div>
								<div
									className="col-xl-5 col-lg-5 col-md-5 col-sm-12"
									style={{
										maxWidth: "432px",
										width: "100%",
										padding: "0px 40px",
									}}
								>
									<div
										style={{
											margin: "12px",
											fontSize: "16px",
											fontWeight: "500",
											color: "#9B9B9B",
											marginRight: "40px",
										}}
									>
                    Recipient’s name
									</div>
									<input
										type="text"
										style={{
											width: "100%",
											height: "48px",
											border: "1px solid #9B9B9B",
											padding: "12px",
											borderRadius: "5px",
										}}
									/>
								</div>
								<div
									className="col-xl-5 col-lg-5 col-md-5 col-sm-12"
									style={{
										maxWidth: "432px",
										width: "100%",
										padding: "0px 40px",
									}}
								>
									<div
										style={{
											margin: "12px",
											fontSize: "16px",
											fontWeight: "500",
											color: "#9B9B9B",
											marginRight: "40px",
										}}
									>
										{"Recipient's telephone number"}
									</div>
									<input
										type="text"
										style={{
											width: "100%",
											height: "48px",
											border: "1px solid #9B9B9B",
											padding: "12px",
											borderRadius: "5px",
										}}
									/>
								</div>
								<div
									className="col-xl-5 col-lg-5 col-md-5 col-sm-12"
									style={{
										maxWidth: "432px",
										width: "100%",
										padding: "0px 40px",
									}}
								>
									<div
										style={{
											margin: "12px",
											fontSize: "16px",
											fontWeight: "500",
											color: "#9B9B9B",
											marginRight: "40px",
										}}
									>
                    Address
									</div>
									<input
										type="text"
										style={{
											width: "100%",
											height: "48px",
											border: "1px solid #9B9B9B",
											padding: "12px",
											borderRadius: "5px",
										}}
									/>
								</div>
								<div
									className="col-xl-5 col-lg-5 col-md-5 col-sm-12"
									style={{
										maxWidth: "432px",
										width: "100%",
										padding: "0px 40px",
									}}
								>
									<div
										style={{
											margin: "12px",
											fontSize: "16px",
											fontWeight: "500",
											color: "#9B9B9B",
											marginRight: "40px",
										}}
									>
                    Postal code
									</div>
									<input
										type="text"
										style={{
											width: "100%",
											height: "48px",
											border: "1px solid #9B9B9B",
											padding: "12px",
											borderRadius: "5px",
										}}
									/>
								</div>
								<div
									className="col-xl-5 col-lg-5 col-md-5 col-sm-12"
									style={{
										maxWidth: "432px",
										width: "100%",
										padding: "0px 40px",
									}}
								>
									<div
										style={{
											margin: "12px",
											fontSize: "16px",
											fontWeight: "500",
											color: "#9B9B9B",
											marginRight: "40px",
										}}
									>
                    City or Subdistrict
									</div>
									<input
										type="text"
										style={{
											width: "100%",
											height: "48px",
											border: "1px solid #9B9B9B",
											padding: "12px",
											borderRadius: "5px",
										}}
									/>
								</div>
								<label
									className="col-12"
									style={{
										display: "flex",
										alignItems: "center",
										textAlign: "left",
										width: "100%",
										padding: "0px 40px",
										margin: "30px 10px",
										height: "40px",
										fontSize: "16px",
										fontWeight: "500",
										color: "#9B9B9B",
										marginRight: "40px",
									}}
								>
									<input
										type="checkbox"
										checked={check ? "checked" : ""}
										style={{
											width: "20px",
											height: "20px",
											margin: "0px 20px",
										}}
										onClick={() => setCheck(!check)}
									/>
									<span className="checkmark"></span>
                  Make it the primary address
								</label>
							</div>
						</ModalBody>
						<ModalFooter>
							<button
								className="col-xl-3 col-lg-3 col-md-3 col-sm-3"
								style={{
									height: "50px",
									border: "1px solid #000000",
									borderRadius: "25px",
									fontSize: "20px",
									backgroundColor: "#FFFFFF",
									margin: "5px",
									minWidth: "100px",
								}}
								onClick={() => modalToggler()}
							>
                Cancel
							</button>
							<button
								className="col-xl-3 col-lg-3 col-md-3 col-sm-3"
								style={{
									height: "50px",
									border: "none",
									borderRadius: "25px",
									fontSize: "20px",
									backgroundColor: "#42D86C",
									color: "#FFFFFF",
									margin: "5px",
									minWidth: "100px",
								}}
							>
                Save
							</button>
						</ModalFooter>
					</Modal>
				</div>
				<div>
					<div
						style={{
							border: "1px solid #DB3022",
							width: "100%",
							borderRadius: "8px",
							textAlign: "left",
							padding: "30px",
						}}
					>
						<h3>Andreas Jane</h3>
						<p>
              Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
              Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja,
              Kab. Banyumas, 53181
						</p>
						<button
							style={{
								color: "#DB3022",
								fontSize: "16px",
								fontWeight: "500",
								backgroundColor: "transparent",
								border: "none",
							}}
						>
              Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
