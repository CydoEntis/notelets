import React from "react";

type Props = {};

const Register = (props: Props) => {
	return (
		<div className="relative flex flex-col w-full h-screen md:max-w-[650px] p-5 overflow-hidden">
			<div className="text-[#6F525E] text-2xl text-center py-5">
				<h1 className="text-2xl">Welcome to Kram Kards</h1>
				<h3>Digital flash cards made easy</h3>
			</div>
			<form className="flex flex-col text-gray-500 py-3">
				<input
					className="drop-shadow-lg p-3 rounded-xl mb-3"
					type="text"
					placeholder="Username"
				/>
				<input
					className="drop-shadow-lg p-3 rounded-xl mb-3"
					type="email"
					placeholder="Email Address"
				/>
				<input
					className="drop-shadow-lg p-3 rounded-xl mb-3"
					type="password"
					placeholder="Password"
				/>
				<button className="rounded-xl text-white bg-[#6F525E] py-2">
					Sign Up
				</button>
			</form>
			<p className="text-sm text-gray-500">
				Already have an account?{" "}
				<span className="text-[#6F525E] underline font-bold">Sign in</span>
			</p>
			<img
				className="absolute bottom-5 w-60 h-60 opacity-75 -right-10"
				src="https://upload.wikimedia.org/wikipedia/commons/3/39/Books_Silhouette.svg"
				alt=""
			/>
		</div>
	);
};

export default Register;
