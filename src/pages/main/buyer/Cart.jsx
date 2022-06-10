import React from "react";
import Navbar from "../../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
	return (<>
		<div className="d-flex flex-column container-fluid align-items-center" style={{ padding: "0px" }}>
			<Navbar login={true} />
			<div className="d-flex flex-column mb-5" style={{ width: "80%" }}>
				<h2 className="mb-4">My bag</h2>
				<div className="row">
					<div className="col-lg-8 col-md-12">
						<div className="d-flex flex-column w-100">
							<div className="d-flex align-items-center w-100 mb-4"
								style={{ padding: "24px", borderRadius: "5px", boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)" }}
							>
								<input type="checkbox" style={{ marginRight: "25px" }} />
								<div className="d-flex align-items-center" style={{ width: "100%" }}>
									<h6 style={{ marginTop: "auto", marginBottom: "auto" }}>Select all items&nbsp;</h6>
									<h6 style={{ marginTop: "auto", marginBottom: "auto", color: "#9B9B9B" }}>(2 items selected)</h6>
									<h6 style={{ marginTop: "auto", marginBottom: "auto", color: "#DB3022", marginLeft: "auto", marginRight: "0px" }}>Delete</h6>
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
								<div className="d-flex w-100" style={{ marginBottom: "30px" }}>
									<h6 style={{ color: "#9B9B9B" }}>Total Price</h6>
									<h6 style={{ marginLeft: "auto", marginRight: "0px" }}>$ 40.0</h6>
								</div>
								<button style={{ padding: "8px", color: "#FFF", backgroundColor: "#2AA952", border: "none", borderRadius: "25px" }}>Buy</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>);
}
