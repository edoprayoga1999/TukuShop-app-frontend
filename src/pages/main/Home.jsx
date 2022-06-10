import React, {useEffect} from "react";

import Navbar from "../../components/Navbar";
import ProductList from "../../components/Section/ProductList";
import Category from "../../components/Carousel/Category";
import Promo from "../../components/Carousel/Promo";

export default function Home() {
	useEffect(() => {
		document.title = "TukuShop - Home";
	}, []);
	return (<>
		<div className="d-flex flex-column container-fluid align-items-center" style={{padding: "0px"}}>
			<Navbar login={true} />
			<Promo />
			<Category />
			<div className="d-flex flex-column mb-5" style={{ width: "80%" }}>
				<h2>Popular</h2>
				<small style={{ color: "#9B9B9B", marginBottom: "25px" }} >Find clothes that are trending recently</small>
				<ProductList />
			</div>
			<div className="d-flex flex-column mb-5" style={{ width: "80%" }}>
				<h2>New</h2>
				<small style={{ color: "#9B9B9B", marginBottom: "25px" }} >You’ve never seen it before!</small>
				<ProductList />
			</div>
		</div>
	</>);
}
