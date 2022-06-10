import React, {useEffect} from "react";

import Navbar from "../../../components/Navbar";
import ProductList from "../../../components/Section/ProductList";

export default function Category() {
	useEffect(() => {
		document.title = "TukuShop - Category";
	}, []);
	return (<>
		<div className="d-flex flex-column container-fluid align-items-center" style={{padding: "0px"}}>
			<Navbar login={false} />
			<div className="d-flex flex-column mb-5" style={{ width: "80%" }}>
				<small style={{ color: "#9B9B9B", marginBottom: "25px" }} >Home  &gt;  category  &gt;  T-Shirt</small>
				<h2>T-Shirt</h2>
				<ProductList />
			</div>
		</div>
	</>);
}
