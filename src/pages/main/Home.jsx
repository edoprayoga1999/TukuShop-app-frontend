import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListCategory } from "../../redux/action/category";
import { getListNewProduct, getListProduct } from "../../redux/action/product";

import Navbar from "../../components/Navbar";
import ProductList from "../../components/Section/ProductList";
import Category from "../../components/Carousel/Category";
import Promo from "../../components/Carousel/Promo";

export default function Home() {
	const dispatch = useDispatch();
	const { listCategory, listNewProduct, listProduct } = useSelector((state) => state);

	useEffect(() => {
		document.title = "TukuShop - Home";
	}, []);

	useEffect(() => {
		dispatch(getListCategory());
		dispatch(getListNewProduct());
		dispatch(getListProduct());
	}, []);

	return (
		<>
			<div
				className="d-flex flex-column container-fluid align-items-center"
				style={{ padding: "0px" }}
			>
				<Navbar login={false} />
				<Promo />
				<Category listCategory={listCategory} />
				<div className="d-flex flex-column mb-5" style={{ width: "80%" }}>
					<h2>New</h2>
					<small style={{ color: "#9B9B9B", marginBottom: "25px" }}>
            Find clothes that are trending recently
					</small>
					{listNewProduct.isLoading ? (
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					) : (
						<ProductList listProduct={listNewProduct.data} />
					)}
				</div>
				<div className="d-flex flex-column mb-5" style={{ width: "80%" }}>
					<h2>All Product</h2>
					<small style={{ color: "#9B9B9B", marginBottom: "25px" }}>
            You’ve never seen it before!
					</small>
					{listProduct.isLoading ? (
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					) : (
						<ProductList listProduct={listProduct.data} />
					)}
				</div>
			</div>
		</>
	);
}
