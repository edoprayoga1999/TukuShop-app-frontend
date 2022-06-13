import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Navbar from "../../../components/Navbar";
import ProductList from "../../../components/Section/ProductList";
import { getListProductByCategory } from "../../../redux/action/product";

export default function Category() {
	const token = localStorage.getItem("token");
	const dispatch = useDispatch();
	const { listProductByCategory } = useSelector((state) => state);
	const urlParams = useParams();

	useEffect(() => {
		document.title = "TukuShop - Category";
	}, []);

	useEffect(() => {
		dispatch(getListProductByCategory(urlParams.id));
	}, []);

	console.log(listProductByCategory);

	return (<>
		<div className="d-flex flex-column container-fluid align-items-center" style={{padding: "0px"}}>
			<Navbar login={token} />
			<div className="d-flex flex-column mb-5" style={{ width: "80%" }}>
				<small style={{ color: "#9B9B9B", marginBottom: "25px" }} >Home  &gt;  category  &gt;  T-Shirt</small>
				<h2>T-Shirt</h2>
				{listProductByCategory.isLoading ? (
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				) : (
					<ProductList listProduct={listProductByCategory.data} />
				)}
			</div>
		</div>
	</>);
}
