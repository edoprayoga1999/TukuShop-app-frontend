import React from "react";
import "../../assets/styles/auth/auth.button.css";

export default function Submit(props) {
	return (
		<button className="auth-submit-button" onClick={() => props.onSubmit()}>
			{props.caption}
		</button>
	);
}
