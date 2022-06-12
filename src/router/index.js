import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	// Navigate,
	// Outlet,
} from "react-router-dom";
// import jwtDecode from "jwt-decode";

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

// const PrivateRoute = () => {
// 	const token = localStorage.getItem("token");
// 	if (token) {
// 		return <Outlet />;
// 	} else {
// 		return <Navigate to="/login" />;
// 	}
// };

// const Authorize = (props) => {
// 	const decoded = jwtDecode(localStorage.getItem("token"));
// 	if (parseInt(props.level) === decoded.level) {
// 		return <Outlet />;
// 	} else {
// 		return <Navigate to="/" />;
// 	}
// };
const router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/category/:id" element={<Category />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/forgot" element={<Forgot />} />
					<Route path="/reset" element={<ResetPassword />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/product/:id" element={<ProductPage />} />
					<Route path="/profile" element={<Profile />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
export default router;
