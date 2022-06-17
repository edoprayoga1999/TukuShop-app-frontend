import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	Outlet,
} from "react-router-dom";

import Home from "../pages/main/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/auth/Login";
import Cart from "../pages/main/buyer/Cart";
import Register from "../pages/auth/Register";
import Forgot from "../pages/auth/Forgot";
import ResetPassword from "../pages/auth/ResetPassword";
import Category from "../pages/main/buyer/Category";
import Chat from "../pages/main/Chat";
import ProductPage from "../pages/main/buyer/ProductPage";
import Profile from "../pages/main/buyer/Profile";
import Index from "../pages/main/seller";
import Checkout from "../pages/main/buyer/Checkout";
import CheckoutProduct from "../pages/main/buyer/CheckoutProduct";

const PrivateRoute = () => {
	const token = localStorage.getItem("token");
	if (token) {
		return <Outlet />;
	} else {
		return <Navigate to="/login" />;
	}
};

const router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/forgot" element={<Forgot />} />
					<Route path="/auth/reset/:token" element={<ResetPassword />} />
				</Route>
				<Route path="/cart" element={<PrivateRoute />}>
					<Route index element={<Cart />} />
				</Route>
				<Route path="/checkout" element={<PrivateRoute />}>
					<Route index element={<Checkout />} />
				</Route>
				<Route path="/checkout/:id" element={<PrivateRoute />}>
					<Route index element={<CheckoutProduct />} />
				</Route>
				<Route path="/category/:id" element={<PrivateRoute />}>
					<Route index element={<Category />} />
				</Route>
				<Route path="/chat" element={<PrivateRoute />}>
					<Route index element={<Chat />} />
				</Route>
				<Route path="/product/:id" element={<PrivateRoute />}>
					<Route index element={<ProductPage />} />
				</Route>
				<Route path="/profile/buyer" element={<PrivateRoute />}>
					<Route index element={<Profile />} />
				</Route>
				<Route path="/profile/seller" element={<PrivateRoute />}>
					<Route index element={<Index />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
export default router;
