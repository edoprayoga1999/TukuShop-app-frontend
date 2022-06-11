import React, { useEffect,useState } from "react";
import "../../assets/styles/auth/auth.css";
import Button from "../../components/auth/CekButton";
import Input from "../../components/auth/Input";
import Navigation from "../../components/auth/Navigation";
import Submit from "../../components/auth/SubmitButton";
import Title from "../../components/auth/Title";

export default function Register() {
	const [isActive, setIsActive] = useState(true);
	const [buyer, setBuyer] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [seller, setSeller] = useState({
		name: "",
		email: "",
		phone: "",
		storeName: "",
		password: "",
	});
	useEffect(() => {
		document.title = "TukuShop - Login";
	}, []);
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
				<Title caption="Please sign up with your account" />
				<Button isActive={isActive} setIsActive={setIsActive} />
				<form className="form-input" hidden={isActive ? "" : "hidden"}>
					<Input
						type="text"
						placeholder="Name"
						setData={(e) => setBuyer({ ...buyer, name: e.target.value })}
					/>
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
						type="text"
						placeholder="Name"
						setData={(e) => setSeller({ ...seller, name: e.target.value })}
					/>
					<Input
						type="email"
						placeholder="Email"
						setData={(e) => setSeller({ ...seller, email: e.target.value })}
					/>
					<Input
						type="text"
						placeholder="Phone number"
						setData={(e) => setSeller({ ...seller, phone: e.target.value })}
					/>
					<Input
						type="text"
						placeholder="Store Name"
						setData={(e) => setSeller({ ...seller, storeName: e.target.value })}
					/>
					<Input
						type="password"
						placeholder="Password"
						setData={(e) => setSeller({ ...seller, password: e.target.value })}
					/>
				</form>
				<Submit onSubmit={onSubmit} caption="Register" />
				<Navigation
					caption="Already have a Tuku account?"
					to="/login"
					toCaption="Login"
				/>
			</div>
		</section>
	);
}
