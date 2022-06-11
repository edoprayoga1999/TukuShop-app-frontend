import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import ProductList from "../../../components/Section/ProductList";
import logo from "../../../assets/images/singa.png";
import starIcon from "../../../assets/images/star.svg";
import Color from "../../../components/Product/Color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../../../assets/styles/product.css";

export default function ProductPage() {
	const dataColor = ["black", "#D84242", "#4290D8", "#42D86C"];
	const [photo, setPhoto] = useState("");
	const [color, setColor] = useState(dataColor[0]);
	const [size, setSize] = useState(0);
	const [quantity, setqQantity] = useState(0);
	useEffect(() => {
		document.title = "TukuShop - Detail";
	}, []);

	return (
		<>
			<div
				className="product d-flex flex-column container-fluid align-items-center"
				style={{ padding: "0px" }}
			>
				<Navbar login={true} />

				<section className="content row">
					<div
						className="form-image col-xl-4 col-lg-4 col-md-12 col-sm-12"
		
					>
						<div>
							<img
								src={photo ? photo : logo}
								alt="foto"
								style={{
									width: "100%",
									height: "100%",
								}}
							/>
						</div>
						<div
							className="scroll d-flex"
							style={{
								overflowX: "scroll",
								paddingLeft: "150px",
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
							}}
						>
							<img
								src={starIcon}
								alt="foto"
								className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4"
								style={{
									width: "70px",
									height: "70px",
									padding: "10px",
								}}
								onClick={() => setPhoto(starIcon)}
							/>
							<img
								src={logo}
								alt="foto"
								className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4"
								style={{
									width: "70px",
									height: "70px",
									padding: "10px",
								}}
								onClick={() => setPhoto(logo)}
							/>
							<img
								src={logo}
								alt="foto"
								className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4"
								style={{
									width: "70px",
									height: "70px",
									padding: "10px",
								}}
							/>
							<img
								src={logo}
								alt="foto"
								className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4"
								style={{
									width: "70px",
									height: "70px",
									padding: "10px",
								}}
							/>
							<img
								src={logo}
								alt="foto"
								className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4"
								style={{
									width: "70px",
									height: "70px",
									padding: "10px",
								}}
							/>
						</div>
					</div>

					<div className="detail col-xl-7 col-lg-7 col-md-12 col-sm-12">
						<h2 style={{ marginBottom: "10px" }}>Baju muslim pira</h2>
						<small style={{ color: "#9B9B9B", marginBottom: "15px" }}>
              Zalora Cloth
						</small>
						<div className="d-flex w-100" style={{ marginBottom: "30px" }}>
							<img src={starIcon} />
							<img src={starIcon} />
							<img src={starIcon} />
							<img src={starIcon} />
							<img src={starIcon} />
							<small style={{ color: "#9B9B9B", marginLeft: "5px" }}>
                (10)
							</small>
						</div>
						<small style={{ color: "#9B9B9B", marginBottom: "10px" }}>
              Price
						</small>
						<h2 style={{ fontWeight: "700", marginBottom: "40px" }}>$ 20.0</h2>
						<small
							style={{
								fontWeight: "600",
								marginBottom: "10px",
								fontSize: "16px",
							}}
						>
              Color
						</small>
						<div className="d-flex w-100">
							{dataColor.map((item, index) => (
								<Color
									key={index}
									color={item}
									cekColor={color}
									setColor={() => setColor(item)}
								/>
							))}
						</div>
						<div className="d-flex w-100">
							<div
								style={{
									margin: "10px",
									marginBottom: "40px",
									height: "80px",
								}}
							>
								<p
									style={{
										margin: "20px",
										fontWeight: "600",
										marginLeft: "0px",
										fontSize: "16px",
										height: "20px",
									}}
								>
                  Size
								</p>
								<div
									style={{
										fontWeight: "600",
										marginBottom: "15px",
										fontSize: "16px",
										height: "40px",
										display: "flex",
										alignItems: "center",
									}}
								>
									<button
										style={{
											height: "36px",
											width: "36px",
											color: "#FFFFFF",
											border: "none",
											borderRadius: "50%",
											fontSize: "20px",
											backgroundColor: "#D4D4D4",
											margin: "5px",
										}}
										onClick={() => setSize(size - 1)}
									>
										<FontAwesomeIcon icon={faMinus} />
									</button>
									<p
										style={{
											fontWeight: "600",
											fontSize: "16px",
											width: "20px",
											textAlign: "center",
											margin: "0px 5px 5px 5px",
										}}
									>
										{size}
									</p>
									<button
										style={{
											height: "36px",
											width: "36px",
											color: "#000000",
											border: "2px solid #D4D4D4",
											borderRadius: "50%",
											fontSize: "20px",
											backgroundColor: "#FFFFFF",
											margin: "5px",
										}}
										onClick={() => setSize(size + 1)}
									>
										<FontAwesomeIcon icon={faPlus} />
									</button>
								</div>
							</div>

							<div
								style={{
									margin: "20px",
									marginBottom: "40px",
									height: "80px",
								}}
							>
								<p
									style={{
										margin: "10px",
										fontWeight: "600",
										marginBottom: "15px",
										fontSize: "16px",
										height: "20px",
									}}
								>
                  Jumlah
								</p>
								<div
									style={{
										fontWeight: "600",
										marginBottom: "15px",
										fontSize: "16px",
										height: "40px",
										display: "flex",
										alignItems: "center",
									}}
								>
									<button
										style={{
											height: "36px",
											width: "36px",
											color: "#FFFFFF",
											border: "none",
											borderRadius: "50%",
											fontSize: "20px",
											backgroundColor: "#D4D4D4",
											margin: "5px",
										}}
										onClick={() => setqQantity(quantity - 1)}
									>
										<FontAwesomeIcon icon={faMinus} />
									</button>
									<p
										style={{
											fontWeight: "600",
											fontSize: "16px",
											width: "20px",
											textAlign: "center",
											margin: "0px 5px 5px 5px",
										}}
									>
										{quantity}
									</p>
									<button
										style={{
											height: "36px",
											width: "36px",
											color: "#000000",
											border: "2px solid #D4D4D4",
											borderRadius: "50%",
											fontSize: "20px",
											backgroundColor: "#FFFFFF",
											margin: "5px",
										}}
										onClick={() => setqQantity(quantity + 1)}
									>
										<FontAwesomeIcon icon={faPlus} />
									</button>
								</div>
							</div>
						</div>
						<div
							className="row"
							style={{
								height: "50px",
							}}
						>
							<button
								className="col-xl-3 col-lg-3 col-md-6 col-sm-5"
								style={{
									height: "50px",
									border: "1px solid #000000",
									borderRadius: "25px",
									fontSize: "20px",
									backgroundColor: "#FFFFFF",
									margin: "5px",
								}}
							>
                Chat
							</button>
							<button
								className="col-xl-3 col-lg-3 col-md-5 col-sm-6 mb-6"
								style={{
									height: "50px",
									border: "1px solid #000000",
									borderRadius: "25px",
									fontSize: "20px",
									backgroundColor: "#FFFFFF",
									margin: "5px",
									marginBottom: "0px !important",
								}}
							>
                Add Bag
							</button>
							<button
								className="col-xl-5 col-lg-4 col-md-12 col-sm-12 mb-12"
								style={{
									height: "50px",
									border: "none",
									borderRadius: "25px",
									fontSize: "20px",
									backgroundColor: "#42D86C",
									color: "#FFFFFF",
									margin: "5px",
								}}
							>
                Buy Now
							</button>
						</div>
					</div>
				</section>

				<section
					className="description"
					style={{ width: "80%", marginBottom: "30px" }}
				>
					<h2 style={{ marginBottom: "30px" }}>Informasi Produk</h2>
					<h5 style={{ marginBottom: "5px" }}>Condition</h5>
					<h5 style={{ marginBottom: "30px", color: "red" }}>New</h5>
					<h5 style={{ marginBottom: "5px" }}>Description</h5>
					<div
						style={{
							color: "#9B9B9B",
							fontSize: "14px",
							fontWeight: "500",
						}}
					>
						<p>
							{
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n \nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante \nipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, \nvel suscipit ipsum. \nDonec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.\n\nDonec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante \nipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.\n\nIn ultricies rutrum tempus. Mauris vel molestie orci."
							}
						</p>
					</div>
				</section>

				<section className="review">
					<h2 style={{ marginBottom: "10px" }}>Product Review</h2>
					<div
						className="rating d-flex w-100"
						style={{
							margin: "0px 6px",
							alignItems: "flex-start",
						}}
					>
						<div
							style={{
								margin: "10px 30px 30px 0px",
							}}
						>
							<div
								style={{
									fontSize: "42px",
									fontWeight: "500",
									display: "flex",
									alignItems: "flex-end",
									margin: "10px 0px 10px 0px",
								}}
							>
                5.0
								<div
									style={{
										display: "inline-block",
										color: "#9B9B9B",
										fontSize: "16px",
										fontWeight: "400",
									}}
								>
                  /10
								</div>
							</div>
							<div className="d-flex">
								<img
									src={starIcon}
									style={{
										height: "20px",
										width: "20px",
										margin: "0px 6px",
									}}
								/>
								<img
									src={starIcon}
									style={{
										height: "20px",
										width: "20px",
										margin: "0px 6px",
									}}
								/>
								<img
									src={starIcon}
									style={{
										height: "20px",
										width: "20px",
										margin: "0px 6px",
									}}
								/>
								<img
									src={starIcon}
									style={{
										height: "20px",
										width: "20px",
										margin: "0px 6px",
									}}
								/>
								<img
									src={starIcon}
									style={{
										height: "20px",
										width: "20px",
										margin: "0px 6px",
									}}
								/>
							</div>
						</div>
						<div className="d-flex flex-column">
							<label
								className="d-flex"
								style={{ alignItems: "center", justifyContent: "center" }}
							>
								<img
									src={starIcon}
									style={{
										height: "20px",
										width: "20px",
										margin: "0px 6px",
									}}
								/>
								<p
									style={{
										color: "#9B9B9B",
										height: "12px",
										marginRight: "10px",
										marginLeft: "10px",
									}}
								>
                  5
								</p>
								<div
									className="red-line"
									style={{
										width: "120px",
										backgroundColor: "red",
										height: "10px",
										borderRadius: "25px",
									}}
								></div>
								<p
									style={{
										color: "#9B9B9B",
										height: "12px",
										marginRight: "10px",
										marginLeft: "10px",
									}}
								>
                  4
								</p>
							</label>
							<label className="d-flex" style={{ alignItems: "center" }}>
								<img
									src={starIcon}
									style={{
										height: "20px",
										width: "20px",
										margin: "0px 6px",
									}}
								/>
								<p
									style={{
										color: "#9B9B9B",
										height: "12px",
										marginRight: "10px",
										marginLeft: "10px",
									}}
								>
                  4
								</p>
								<div
									className="red-line"
									style={{
										width: "120px",
									}}
								></div>
								<p
									style={{
										color: "#9B9B9B",
										height: "12px",
										marginRight: "10px",
										marginLeft: "10px",
									}}
								>
                  0
								</p>
							</label>
							<label className="d-flex" style={{ alignItems: "center" }}>
								<img
									src={starIcon}
									style={{
										height: "20px",
										width: "20px",
										margin: "0px 6px",
									}}
								/>
								<p
									style={{
										color: "#9B9B9B",
										height: "12px",
										marginRight: "10px",
										marginLeft: "10px",
									}}
								>
                  3
								</p>
								<div
									className="red-line"
									style={{
										width: "120px",
									}}
								></div>
								<p
									style={{
										color: "#9B9B9B",
										height: "12px",
										marginRight: "10px",
										marginLeft: "10px",
									}}
								>
                  0
								</p>
							</label>
							<label className="d-flex" style={{ alignItems: "center" }}>
								<img
									src={starIcon}
									style={{
										height: "20px",
										width: "20px",
										margin: "0px 6px",
									}}
								/>
								<p
									style={{
										color: "#9B9B9B",
										height: "12px",
										marginRight: "10px",
										marginLeft: "10px",
									}}
								>
                  2
								</p>
								<div
									className="red-line"
									style={{
										width: "120px",
									}}
								></div>
								<p
									style={{
										color: "#9B9B9B",
										height: "12px",
										marginRight: "10px",
										marginLeft: "10px",
									}}
								>
                  0
								</p>
							</label>
							<label className="d-flex" style={{ alignItems: "center" }}>
								<img
									src={starIcon}
									style={{
										height: "20px",
										width: "20px",
										margin: "0px 6px",
									}}
								/>
								<p
									style={{
										color: "#9B9B9B",
										height: "12px",
										marginRight: "10px",
										marginLeft: "10px",
									}}
								>
                  1
								</p>
								<div
									className="red-line"
									style={{
										width: "120px",
									}}
								></div>
								<p
									style={{
										color: "#9B9B9B",
										height: "12px",
										marginRight: "10px",
										marginLeft: "10px",
									}}
								>
                  0
								</p>
							</label>
						</div>
					</div>
				</section>

				<hr
					style={{
						border: "1px solid #9B9B9B",
						height: "1px",
						backgroundColor: "#9B9B9B",
						width: "80%",
						margin: "50px 0px",
					}}
				/>

				<div className="d-flex flex-column mb-5" style={{ width: "80%" }}>
					<h2>You can also like this</h2>
					<small style={{ color: "#9B9B9B", marginBottom: "25px" }}>
            You’ve never seen it before!
					</small>
					<ProductList />
				</div>
			</div>
		</>
	);
}
