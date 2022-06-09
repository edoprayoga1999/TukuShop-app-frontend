import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/auth/auth.css";
import Button from "../../components/auth/CekButton";
import Input from "../../components/auth/Input";
import Navigation from "../../components/auth/Navigation";
import Submit from "../../components/auth/SubmitButton";
import Title from "../../components/auth/Title";

export default function Login() {
	const [isActive, setIsActive] = useState(true);
	const [buyer, setBuyer] = useState({
		email: "",
		password: "",
	});
	const [seller, setSeller] = useState({
		email: "",
		password: "",
	});
	const onSubmit = () => {
		if (isActive) {
			console.log(buyer);
		} else if (!isActive) {
			console.log(seller);
		}
	};

	return (
		<section className="auth">
			<div className="content">
				<Title caption="Please login with your account" />
				<Button isActive={isActive} setIsActive={setIsActive} />
				<form className="form-input" hidden={isActive ? "" : "hidden"}>
					<Input
						type="email"
						placeholder="Email"
						setData={(e) => setBuyer({ ...buyer, email: e.target.value })}
					/>
					<Input
						type="password"
						placeholder="Password"
						setData={(e) => setBuyer({ ...buyer, password: e.target.value })}
					/>
				</form>
				<form className="form-input" hidden={!isActive ? "" : "hidden"}>
					<Input
						type="email"
						placeholder="Email"
						setData={(e) => setSeller({ ...seller, email: e.target.value })}
					/>
					<Input
						type="password"
						placeholder="Password"
						setData={(e) => setSeller({ ...seller, password: e.target.value })}
					/>
				</form>
				<Link to="/forgot" className="forgot">Forgot password?</Link>
				<Submit onSubmit={onSubmit} caption="Login"/>
				<Navigation
					caption="Don't have a Tokopedia account?"
					to="/register"
					toCaption="Register"
				/>
			</div>
		</section>
	);
}
