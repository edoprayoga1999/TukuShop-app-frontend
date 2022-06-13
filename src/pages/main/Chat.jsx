import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar";

import Style from "../../assets/styles/Chat.module.css";

export default function Chat() {
	const token = localStorage.getItem("token");
	const [chatWindow, setChatWindow] = useState(false);
	useEffect(() => {
		document.title = "TukuShop - Chat Page";
	}, []);
	return (<>
		<div className="d-flex flex-column container-fluid align-items-center" style={{ padding: "0px", height: "100vh" }}>
			<Navbar login={token} />
			<div className="d-flex flex-column mb-5 h-100" style={{ width: "80%" }}>
				<div className="row h-100">
					<div className="col-4 h-100">
						<div className="d-flex flex-column h-100" style={{ width: "95%", border: "1px solid #8E8E93", borderRadius: "5px" }}>
							<div className="d-flex w-100" style={{ padding: "20px", borderRadius: "5px 5px 0px 0px", borderBottom: "1px solid #8E8E93" }}>
								<h6 style={{ margin: "0px" }}>Chat</h6>
							</div>
							{/* <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100" style={{ padding: "20px" }}>
								<h6>Belum ada chat</h6>
							</div> */}
							<div className="d-flex flex-column h-100 w-100" style={{ padding: "20px" }} onClick={() => { setChatWindow(true); }}>
								<div className="d-flex align-items-center w-100 mb-4">
									<div style={{ width: "40px", height: "40px", marginRight: "20px", borderRadius: "50%", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: "url('/user.jpg')" }} />
									<div className="d-flex flex-column" style={{ width: "80%"}}>
										<h6 style={{ marginTop: "auto", marginBottom: "0px"}}>Jonas adam</h6>
										<p style={{ marginBottom: "auto", color: "#9B9B9B"}}>Permisi kak, mau tanya...</p>
									</div>
								</div>
								<div className="d-flex align-items-center w-100 mb-4">
									<div style={{ width: "40px", height: "40px", marginRight: "20px", borderRadius: "50%", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: "url('/user.jpg')" }} />
									<div className="d-flex flex-column" style={{ width: "80%"}}>
										<h6 style={{ marginTop: "auto", marginBottom: "0px"}}>Jonas adam</h6>
										<p style={{ marginBottom: "auto", color: "#9B9B9B"}}>Permisi kak, mau tanya...</p>
									</div>
								</div>
								<div className="d-flex align-items-center w-100 mb-4">
									<div style={{ width: "40px", height: "40px", marginRight: "20px", borderRadius: "50%", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: "url('/user.jpg')" }} />
									<div className="d-flex flex-column" style={{ width: "80%"}}>
										<h6 style={{ marginTop: "auto", marginBottom: "0px"}}>Jonas adam</h6>
										<p style={{ marginBottom: "auto", color: "#9B9B9B"}}>Permisi kak, mau tanya...</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-8 h-100">
						<div className="d-flex flex-column w-100 h-100" style={{ border: "1px solid #8E8E93", borderRadius: "5px" }}>
							{chatWindow ? (<>
								<div className="d-flex w-100 align-items-center" style={{ padding: "10px 20px", borderRadius: "5px 5px 0px 0px", borderBottom: "1px solid #8E8E93" }}>
									<div style={{ width: "40px", height: "40px", marginRight: "15px", borderRadius: "50%", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: "url('/user.jpg')" }} />
									<h6 style={{ marginTop: "auto", marginBottom: "auto" }}>Jonas Adam</h6>
								</div>
							</>) :
								(<>
									<div className="d-flex w-100 align-items-center" style={{ padding: "29px", borderRadius: "5px 5px 0px 0px", borderBottom: "1px solid #8E8E93" }} />
								</>)}
							<div className="d-flex flex-column w-100 align-items-center" style={{ padding: "20px", height: "65vh", overflow: "auto" }}>
								{chatWindow ? (<>
									{/* receiver message */}
									<div className="d-flex flex-column w-100">
										<div className="d-flex w-100 justify-content-start align-items-center">
											<div style={{ width: "40px", height: "40px", marginRight: "15px", borderRadius: "50%", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: "url('/user.jpg')" }} />
											<p style={{ backgroundColor: "#32C33B", color: "#FFF", padding: "15px", borderRadius: "35px 35px 35px 10px", maxWidth: "50%" }}>
                      Permisi kak mau tanya... 
											</p>
										</div>
									</div>
									{/* sender message */}
									<div className="d-flex flex-column w-100">
										<div className="d-flex w-100 justify-content-end align-items-center">
											<p style={{ backgroundColor: "#32C33B", marginRight: "15px", color: "#FFF", padding: "15px", borderRadius: "35px 35px 10px 35px", maxWidth: "50%" }}>
                      Permisi kak mau tanya...
											</p>
											<div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: "url('/user.jpg')" }} />
										</div>
									</div>
								</>) : (<>
									<div>No Chat Selected</div>
								</>)}
							</div>
							{chatWindow ? (<>
								<form style={{ width: "100%", padding: "20px " }}>
									<input type="text" className={Style.inputChat} placeholder="Type message..." />
									<input type="submit" style={{ display: "none" }} />
								</form>
							</>) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	</>);
}
