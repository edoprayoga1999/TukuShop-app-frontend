import React, {useEffect} from "react";

import Navbar from "../../components/Navbar";
import AllProduct from "../../components/Section/AllProduct";
import NewProduct from "../../components/Section/NewProduct";
import Category from "../../components/Carousel/Category";
import Promo from "../../components/Carousel/Promo";

export default function Home() {
	useEffect(() => {
		document.title = "TukuShop - Home";
	}, []);
	return (<>
		<div className="d-flex flex-column container-fluid align-items-center" style={{padding: "0px"}}>
			<Navbar login={false} />
			<Promo />
			<Category />
			<AllProduct />
			<NewProduct />
		</div>
	</>);
}
