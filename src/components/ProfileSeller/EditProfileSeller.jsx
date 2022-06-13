
import React from "react";
import singa from "../../assets/images/singa.png";

export default function EditProfileSeller(props) {
	return (
		<div className="content" hidden={props.hidden ? "" : "hidden"}>
			<div className="edit-profile">
				<h2>My Profile Store</h2>
				<label
					style={{
						fontSize: "16px",
						fontWeight: "500",
						color: "#9B9B9B",
					}}
				>
          Manage your profile information
				</label>
				<hr
					style={{
						border: "1px solid #9B9B9B",
						height: "1px",
						backgroundColor: "#9B9B9B",
						width: "100%",
					}}
				/>
				<div className="form-edit">
					<div className="form-content">
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
                Name
							</div>
							<input
								type="text"
								placeholder="Your Name"
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
                Email
							</div>
							<input
								type="text"
								placeholder="Your Email"
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
                Phone Number
							</div>
							<input
								type="text"
								placeholder="Your Phone Number"
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
                Store Description
							</div>
							<textarea
								type="text"
								style={{
									width: "348px",
									height: "188px",
									border: "1px solid #9B9B9B",
									padding: "12px",
									borderRadius: "5px",
								}}
							></textarea>
						</div>
					</div>
					<hr className="line" />
					<div className="form-image">
						<img
							src={singa}
							style={{
								width: "100px",
								height: "100px",
								borderRadius: "50%",
								margin: "20px",
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
              Select Photo
						</label>
						<input hidden type="file" id="files" />
					</div>
				</div>
				<button
					style={{
						height: "40px",
						border: "none",
						borderRadius: "25px",
						fontSize: "20px",
						backgroundColor: "#42D86C",
						color: "#FFFFFF",
						margin: "50px 5px 75px 150px",
						width: "120px",
					}}
				>
          Save
				</button>
			</div>
		</div>
	);
}
