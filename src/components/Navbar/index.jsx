import React, {useState} from "react";
import { 
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from "reactstrap";

import logo from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/magnifyingGlass.svg";
import cartIcon from "../../assets/images/cart.svg";
import bellIcon from "../../assets/images/bell.svg";
import mailIcon from "../../assets/images/mail.svg";
import filterIcon from "../../assets/images/filter.svg";
import Style from "../../assets/styles/Home.module.css";

export default function Navbar(props) {
	const login = props.login;
	const [modalOpen, setModalOpen] = useState(false);
	const modalToggler = () => {
		setModalOpen(!modalOpen);
	};
	return (
		<div className="d-flex align-items-center justify-content-center w-100" style={{ paddingTop: "30px", paddingBottom: "30px", boxShadow: "0px 6px 40px rgba(173, 173, 173, 0.25)", marginBottom: "50px" }}>
			<div className="d-flex align-items-center" style={{width: "80%"}}>
				<img src={logo} style={{ marginRight: "50px" }} />
				<div className="d-flex align-items-center" style={{ width: "50%", border: "1px solid #8E8E93", borderRadius: "25px", paddingLeft: "10px", paddingRight: "20px", marginRight: "10px"}}>
					<input className={Style.searchInput} type="text" placeholder="Search" />
					<img src={searchIcon} />
				</div>
				{login ? (<><div className="d-flex" style={{padding: "10px", borderRadius: "12px", backgroundColor: "#FFF", border: "1px solid #8E8E93"}}>
					<img src={filterIcon} onClick={() => { modalToggler(); }} />
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
			<Modal
				toggle={modalToggler}
				isOpen={modalOpen}
			>
				<ModalHeader toggle={modalToggler}>
					Filter
				</ModalHeader>
				<ModalBody>
					<h6 style={{ marginBottom: "30px"}}>Colors</h6>
					<div className="d-flex align-items-center mb-4">
						<div className="d-flex align-items-center justify-content-center"
							style={{ height: "45px", width: "45px", borderRadius: "99px", border: "1px solid #DB3022", marginRight: "15px" }} >
							<div style={{ height: "35px", width: "35px", backgroundColor: "#000", borderRadius: "100%"}} />
						</div>
						<div className="d-flex align-items-center justify-content-center"
							style={{ height: "45px", width: "45px", borderRadius: "99px", border: "none", marginRight: "15px", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }} >
							<div style={{ height: "35px", width: "35px", backgroundColor: "#FFF", borderRadius: "100%"}} />
						</div>
						<div className="d-flex align-items-center justify-content-center" 
							style={{ height: "45px", width: "45px", borderRadius: "99px", border: "none", marginRight: "15px" }} >
							<div style={{ height: "35px", width: "35px", backgroundColor: "#B82222", borderRadius: "100%"}} />
						</div>
						<div className="d-flex align-items-center justify-content-center" 
							style={{ height: "45px", width: "45px", borderRadius: "99px", border: "none", marginRight: "15px" }} >
							<div style={{ height: "35px", width: "35px", backgroundColor: "#BEA9A9", borderRadius: "100%"}} />
						</div>
						<div className="d-flex align-items-center justify-content-center" 
							style={{ height: "45px", width: "45px", borderRadius: "99px", border: "none", marginRight: "15px" }} >
							<div style={{ height: "35px", width: "35px", backgroundColor: "#E2BB8D", borderRadius: "100%"}} />
						</div>
						<div className="d-flex align-items-center justify-content-center" 
							style={{ height: "45px", width: "45px", borderRadius: "99px", border: "none", marginRight: "15px" }} >
							<div style={{ height: "35px", width: "35px", backgroundColor: "#151867", borderRadius: "100%"}} />
						</div>
					</div>
					<h6 style={{ marginBottom: "30px" }}>Sizes</h6>
					<div className="d-flex align-items-center mb-4">
						<input type="checkbox" name="size" value="xs" id="xs" style={{ display: "none" }} />
						<label htmlFor="xs" style={{ height: "40px", width: "40px", display: "flex", justifyContent: "center", alignItems: "center", border: "0.4px solid #9B9B9B", borderRadius: "10px", marginRight: "15px" }}>
							XS
						</label>
						<input type="checkbox" name="size" value="s" id="s" style={{ display: "none" }} />
						<label htmlFor="s" style={{ height: "40px", width: "40px", display: "flex", justifyContent: "center", alignItems: "center", border: "0.4px solid #9B9B9B", borderRadius: "10px", marginRight: "15px" }}>
							S
						</label>
						<input type="checkbox" name="size" value="m" id="m" style={{ display: "none" }} />
						<label htmlFor="m" style={{ height: "40px", width: "40px", display: "flex", justifyContent: "center", alignItems: "center", border: "0.4px solid #9B9B9B", borderRadius: "10px", marginRight: "15px" }}>
							M
						</label>
						<input type="checkbox" name="size" value="l" id="l" style={{ display: "none" }} />
						<label htmlFor="l" style={{ height: "40px", width: "40px", display: "flex", justifyContent: "center", alignItems: "center", border: "0.4px solid #9B9B9B", borderRadius: "10px", marginRight: "15px" }}>
							L
						</label>
						<input type="checkbox" name="size" value="xl" id="xl" style={{ display: "none" }} />
						<label htmlFor="xl" style={{ height: "40px", width: "40px", display: "flex", justifyContent: "center", alignItems: "center", border: "0.4px solid #9B9B9B", borderRadius: "10px", marginRight: "15px" }}>
							XL
						</label>
					</div>
					<h6 style={{ marginBottom: "30px" }}>Category</h6>
					<div className="row mb-4" style={{ marginLeft: "2px" }}>
						<div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#32C33B", color: "#FFF", borderRadius: "10px", paddingTop: "10px", paddingBottom: "10px", marginRight: "20px" }}>
							All
						</div>
						<div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#FFF", borderRadius: "10px", paddingTop: "10px", paddingBottom: "10px", border: "0.4px solid #9B9B9B", marginRight: "20px" }}>
							Women
						</div>
						<div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#FFF", borderRadius: "10px", paddingTop: "10px", paddingBottom: "10px", border: "0.4px solid #9B9B9B", marginRight: "20px" }}>
							Men
						</div>
						<div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#FFF", borderRadius: "10px", paddingTop: "10px", paddingBottom: "10px", border: "0.4px solid #9B9B9B", marginRight: "20px" }}>
							Boys
						</div>
						<div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#FFF", borderRadius: "10px", paddingTop: "10px", paddingBottom: "10px", border: "0.4px solid #9B9B9B", marginRight: "20px" }}>
							Girls
						</div>
					</div>
					<h6 style={{ marginBottom: "30px" }}>Brand</h6>
				</ModalBody>
				<ModalFooter style={{ justifyContent: "center" }}>
					<button
						onClick={() => { modalToggler(); }}
						style={{ padding: "8px 30px", border: "1px solid #222222", color: "#222222", backgroundColor: "#FFF", borderRadius: "25px" }}>
						Discard
					</button>
					<button
						onClick={() => { modalToggler(); }}
						style={{ padding: "8px 30px", border: "none", color: "#FFF", backgroundColor: "#32C33B", borderRadius: "25px" }}>
						Apply
					</button>
				</ModalFooter>
			</Modal>
		</div>
	);
}
