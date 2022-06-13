
import React from "react";
import logo from "../../assets/images/box.png";

export default function AddProduct(props) {
	return (
		<div className="content" hidden={props.hidden ? "" : "hidden"}>
			<div className="product">
				<h2>Inventory</h2>
				<hr
					style={{
						border: "1px solid #9B9B9B",
						height: "1px",
						backgroundColor: "#9B9B9B",
						width: "100%",
						marginTop: "0px",
					}}
				/>
				<div className="form-input">
					<div
						style={{
							margin: "12px",
							fontSize: "16px",
							fontWeight: "500",
							color: "#9B9B9B",
							marginRight: "40px",
						}}
					>
            Name of goods
					</div>
					<input
						type="text"
						style={{
							width: "348px",
							height: "48px",
							border: "1px solid #9B9B9B",
							padding: "12px",
							borderRadius: "5px",
						}}
					/>
				</div>
			</div>
			<div className="product">
				<h2>Item details</h2>
				<hr
					style={{
						border: "1px solid #9B9B9B",
						height: "1px",
						backgroundColor: "#9B9B9B",
						width: "100%",
						marginTop: "0px",
					}}
				/>
				<div className="form-input">
					<div
						style={{
							margin: "12px",
							fontSize: "16px",
							fontWeight: "500",
							color: "#9B9B9B",
							marginRight: "40px",
						}}
					>
            Unit price
					</div>
					<input
						type="text"
						style={{
							width: "348px",
							height: "48px",
							border: "1px solid #9B9B9B",
							padding: "12px",
							borderRadius: "5px",
						}}
					/>
				</div>
				<div className="form-input">
					<div
						style={{
							margin: "12px",
							fontSize: "16px",
							fontWeight: "500",
							color: "#9B9B9B",
							marginRight: "40px",
						}}
					>
            Stock
					</div>
					<input
						type="text"
						style={{
							width: "348px",
							height: "48px",
							border: "1px solid #9B9B9B",
							padding: "12px",
							borderRadius: "5px",
						}}
					/>
				</div>
				<div className="form-input">
					<div
						style={{
							margin: "12px",
							fontSize: "16px",
							fontWeight: "500",
							color: "#9B9B9B",
							marginRight: "40px",
						}}
					>
            Stock
					</div>
					<div
						className="d-flex"
						style={{
							width: "348px",
							height: "48px",
							padding: "12px",
						}}
					>
						<input
							type="radio"
							id="new"
							name="stock"
							value="new"
							style={{
								width: "20px",
								height: "26px",
								border: "none",
								margin: "0px 10px",
							}}
						/>
						<label
							htmlFor="new"
							style={{
								fontSize: "16px",
								fontWeight: "500",
								color: "#9B9B9B",
								marginRight: "40px",
								minWidth: "80px",
							}}
						>
              baru
						</label>
						<br></br>
						<input
							type="radio"
							id="old"
							name="stock"
							value="old"
							style={{
								width: "20px",
								height: "26px",
								border: "none",
								margin: "0px 10px",
							}}
						/>
						<label
							htmlFor="old"
							style={{
								fontSize: "16px",
								fontWeight: "500",
								color: "#9B9B9B",
								marginRight: "40px",
							}}
						>
              bekas
						</label>
						<br></br>
					</div>
				</div>
			</div>
			<div className="product">
				<h2>Photo of goods</h2>
				<hr
					style={{
						border: "1px solid #9B9B9B",
						height: "1px",
						backgroundColor: "#9B9B9B",
						width: "100%",
						marginTop: "0px",
					}}
				/>
				<div
					style={{
						margin: "30px 0px",
						border: "2px dashed #9B9B9B",
						width: "100%",
						borderRadius: "10px",
						textAlign: "center",
						padding: "40px 30px",
						fontSize: "16px",
						fontWeight: "500",
						color: "#9B9B9B",
					}}
				>
					<div
						className="row d-flex"
						style={{
							justifyContent: "center",
							alignItems: "center",
							width: "100%",
						}}
					>
						<img
							src={logo}
							alt="foto"
							className="col-xl-4 col-lg-4 col-md-6 col-sm-12 "
							style={{
								width: "140px",
								height: "140px",
								padding: "35px",
								backgroundColor: "#D4D4D4",
								borderRadius: "5px",
								margin: "0px 15px",
							}}
						/>
						<img
							src={logo}
							alt="foto"
							className="col-xl-2 col-lg-2 col-md-6 col-sm-12 "
							style={{
								width: "70px",
								height: "70px",
								padding: "20px",
								backgroundColor: "#D4D4D4",
								borderRadius: "5px",
								margin: "0px 15px",
							}}
						/>
						<img
							src={logo}
							alt="foto"
							className="col-xl-2 col-lg-2 col-md-6 col-sm-12 "
							style={{
								width: "70px",
								height: "70px",
								padding: "20px",
								backgroundColor: "#D4D4D4",
								borderRadius: "5px",
								margin: "0px 15px",
							}}
						/>
						<img
							src={logo}
							alt="foto"
							className="col-xl-2 col-lg-2 col-md-6 col-sm-12 "
							style={{
								width: "70px",
								height: "70px",
								padding: "20px",
								backgroundColor: "#D4D4D4",
								borderRadius: "5px",
								margin: "0px 15px",
							}}
						/>
						<img
							src={logo}
							alt="foto"
							className="col-xl-2 col-lg-2 col-md-6 col-sm-12 "
							style={{
								width: "70px",
								height: "70px",
								padding: "20px",
								backgroundColor: "#D4D4D4",
								borderRadius: "5px",
								margin: "0px 15px",
							}}
						/>
					</div>
					<hr
						style={{
							border: "1px solid #9B9B9B",
							height: "1px",
							backgroundColor: "#9B9B9B",
							width: "100%",
							margin: "30px 0px",
						}}
					/>
					<label
						style={{
							border: "1px solid #9B9B9B",
							height: "36",
							width: "140px",
							borderRadius: "25px",
							textAlign: "center",
							padding: "8px",
						}}
						htmlFor="files"
					>
            Upload Photo
					</label>
					<input hidden type="file" id="files" />
				</div>
			</div>
			<div
				className="product"
				style={{
					marginBottom: "50px",
				}}
			>
				<h2>Description</h2>
				<hr
					style={{
						border: "1px solid #9B9B9B",
						height: "1px",
						backgroundColor: "#9B9B9B",
						width: "100%",
						marginTop: "0px",
					}}
				/>
				<div className="form-input">
					<div
						style={{
							margin: "12px 0px 50px 0px",
							fontSize: "16px",
							fontWeight: "500",
							color: "#9B9B9B",
							marginRight: "40px",
						}}
					></div>
					<textarea
						type="text"
						style={{
							width: "100%",
							height: "188px",
							border: "1px solid #9B9B9B",
							padding: "12px",
							borderRadius: "5px",
						}}
					></textarea>
				</div>
				<button
					style={{
						position: "absolute",
						height: "40px",
						border: "none",
						borderRadius: "25px",
						fontSize: "20px",
						backgroundColor: "#42D86C",
						color: "#FFFFFF",
						margin: "50px 5px 75px 0px",
						width: "100px",
						right: "80px",
					}}
				>
          Jual
				</button>
			</div>
		</div>
	);
}
