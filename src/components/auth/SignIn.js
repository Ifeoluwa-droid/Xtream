import React, { useState, useContext } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import { Typography, Box, Stack, CircularProgress, useMediaQuery } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import AuthIconWrap from "../ui/AuthIconWrap";
import InputField from "./Input";
import CheckBoxOutlineBlankSharpIcon from "@mui/icons-material/CheckBoxOutlineBlankSharp";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../store/emailSignUp";
import EmailSignUp from "./EmailSignUp";
import { AuthContext } from "../../store/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
	const dispatch = useDispatch();

	const authCtx = useContext(AuthContext);

	const navigate = useNavigate();

	const mediaMatchesMaxWidth550 = useMediaQuery("max-width: 550px");

	// endpoints
	const emailSignInEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_APP_API_KEY}`;

	const [credentials, setEnteredCredentials] = useState({ email: "", password: "" });
	const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);

	const handleEmailInputChanged = (event) => {
		const { value } = event.target;
		setEnteredCredentials((prevValue) => ({
			...prevValue,
			email: value,
		}));
	};

	const handlePasswordInputChanged = (event) => {
		const { value } = event.target;
		setEnteredCredentials((prevValue) => ({
			...prevValue,
			password: value,
		}));
	};

	const signInWithEmail = () => {
		setIsLoadingSignIn(true);

		fetch(emailSignInEndpoint, {
			method: "POST",
			body: JSON.stringify({
				email: credentials.email,
				password: credentials.password,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				setIsLoadingSignIn(false);
				if (res.ok) {
					setEnteredCredentials({ email: "", password: "" });
					return res.json();
				} else {
					const errorMessage = "Authentication Failed";

					throw new Error(errorMessage);
				}
			})
			.then((data) => {
				const { displayName, idToken } = data;

				console.log(idToken);
				authCtx.login({ idToken, displayName });

				navigate("/discover", { replace: true });
			})
			.catch((error) => console.log(error));
		return;
	};

	const signInwithGoogle = () => {};

	const signInWithFacebook = () => {};

	// sign up

	const signUpWithEmail = () => {};

	const signUpWithGoogle = () => {};

	const signUpWithFacebook = () => {};

	const handleSignUpWithEmail = () => {
		dispatch(openModal());
	};

	return (
		<Stack
			direction="column"
			sx={{
				margin: "0 auto",
				width: "30%",
				minWidth: "300px",
				alignItems: "center",
				minHeight: "80%",
				justifyContent: "center",
			}}
			spacing="1.5rem"
		>
			<Typography variant="h3" component="h3" color="white">
				SIGN UP
			</Typography>
			<Stack direction="row" spacing="1rem">
				<AuthIconWrap bgColor="blue" onClick={handleSignUpWithEmail}>
					<EmailSharpIcon sx={{ color: "white" }} />
				</AuthIconWrap>
				<AuthIconWrap>
					<GoogleIcon sx={{ color: "white" }} />
				</AuthIconWrap>
				<AuthIconWrap>
					<FacebookIcon sx={{ color: "white" }} />
				</AuthIconWrap>
			</Stack>
			<Stack direction="row" sx={{ width: "100%" }} alignItems="center" spacing=".4rem">
				<div style={{ borderBottom: "1px solid grey", flex: 1 }}></div>
				<Typography variant="h3" component="h3" color="white">
					or
				</Typography>
				<div style={{ borderBottom: "1px solid grey", flex: 1 }}></div>
			</Stack>
			<Stack direction="column" alignItems="flex-start" sx={{ width: "100%" }} spacing="1rem">
				<InputField label="Email" type="email" value={credentials.email} onChange={handleEmailInputChanged} />
				<InputField
					label="Password"
					type="password"
					value={credentials.password}
					onChange={handlePasswordInputChanged}
				/>
				<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
					<Box sx={{ display: "inline-block" }}>
						<CheckBoxOutlineBlankSharpIcon
							style={{ verticalAlign: "middle", color: "white", cursor: "pointer", marginRight: "1rem" }}
						/>
						<Typography component="white" variant="white" color="white">
							Remember Me
						</Typography>
					</Box>
					<Typography variant="h3" component="h3" color="white">
						Forgot Password?
					</Typography>
				</Stack>
				<LoadingButton
					onClick={signInWithEmail}
					loading={isLoadingSignIn}
					disabled={isLoadingSignIn}
					loadingIndicator={<CircularProgress sx={{ color: "white" }} size="1.5rem" />}
					variant="contained"
					fullWidth
					disableElevation
					style={{
						backgroundColor: "#0F3460",
						borderRadius: "0.1rem",
						paddingTop: ".5rem",
						paddingBottom: ".5rem",
						marginBottom: "1rem",
					}}
				>
					SIGN IN
				</LoadingButton>
				<Stack sx={{ width: "100%" }} justifyContent="center" alignItems="center" spacing="1rem">
					<Typography variant="h3" component="h3" color="white">
						Other Sign In Options
					</Typography>
					<Stack direction="row" justifyContent="center">
						<AuthIconWrap>
							<GoogleIcon sx={{ color: "white" }} />
						</AuthIconWrap>
						<AuthIconWrap>
							<FacebookIcon sx={{ color: "white" }} />
						</AuthIconWrap>
					</Stack>
				</Stack>
			</Stack>

			<EmailSignUp />
		</Stack>
	);
};

export default SignIn;
