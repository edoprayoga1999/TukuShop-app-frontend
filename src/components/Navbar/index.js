import React from "react";

import logo from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/magnifyingGlass.svg";
import cartIcon from "../../assets/images/cart.svg";
import bellIcon from "../../assets/images/bell.svg";
import mailIcon from "../../assets/images/mail.svg";
import filterIcon from "../../assets/images/filter.svg";
import Style from "../../assets/styles/Home.module.css";

export default function Navbar(props) {
	const login = props.login;
	return (
		<div className="d-flex align-items-center justify-content-center w-100" style={{ paddingTop: "30px", paddingBottom: "30px", boxShadow: "0px 6px 40px rgba(173, 173, 173, 0.25)", marginBottom: "50px" }}>
			<div className="d-flex align-items-center" style={{width: "80%"}}>
				<img src={logo} style={{ marginRight: "50px" }} />
				<div className="d-flex align-items-center" style={{ width: "50%", border: "1px solid #8E8E93", borderRadius: "25px", paddingLeft: "10px", paddingRight: "20px", marginRight: "10px"}}>
					<input className={Style.searchInput} type="text" placeholder="Search" />
					<img src={searchIcon} />
				</div>
				{login ? (<><div className="d-flex" style={{padding: "10px", borderRadius: "12px", backgroundColor: "#FFF", border: "1px solid #8E8E93"}}>
					<img src={filterIcon} />
				</div><img src={cartIcon} style={{ marginLeft: "auto", marginRight: "40px" }} />
				<img src={bellIcon} style={{ marginRight: "40px" }} />
				<img src={mailIcon} style={{ marginRight: "25px" }} />
				<div
					style={{
						width: "35px",
						height: "35px",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundImage: "url('/user.jpg')",
						borderRadius: "99px"
					}}
				/></>) : (<><img src={cartIcon} style={{ marginLeft: "auto", marginRight: "40px"}} />
					<button style={{ backgroundColor: "#32C33B", color: "#FFF", padding: "8px 30px", border: "none", borderRadius: "25px", marginRight: "20px" }}>Login</button>
					<button style={{ backgroundColor: "#FFF", color: "#9B9B9B", padding: "8px 30px", border: "1px solid #9B9B9B", borderRadius: "25px" }}>Signup</button></>)}				
			</div>
		</div>
	);
}
