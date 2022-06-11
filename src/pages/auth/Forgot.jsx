import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/auth/auth.css";
import Input from "../../components/auth/Input";
import Navigation from "../../components/auth/Navigation";
import Submit from "../../components/auth/SubmitButton";
import Title from "../../components/auth/Title";

export default function Forgot() {
	const [form, setForm] = useState({
		email: "",
	});
	useEffect(() => {
		document.title = "TukuShop - Forgot Password";
	}, []);
	const onSubmit = () => {
		console.log(form);

	};

	return (
		<section className="auth">
			<div className="content">
				<Title caption="Reset password" />
				<form className="form-input">
					<Input
						type="email"
						placeholder="Email"
						setData={(e) => setForm({ ...form, email: e.target.value })}
					/>
				</form>
				<Link to="/forgot" className="forgot">
          Forgot password?
				</Link>
				<Submit onSubmit={onSubmit} caption="Reset"/>
				<Navigation
					caption="Don't have a Tokopedia account?"
					to="/register"
					toCaption="Register"
				/>
			</div>
		</section>
	);
}
