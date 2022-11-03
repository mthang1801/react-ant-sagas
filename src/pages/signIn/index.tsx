import { Col, Form, Input, Row } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logoBackgroundOMS from "src/assets/images/logoBackgroundOMS.png";
import { registerAccount, signInAccount } from "../../services/actions/account.actions";
import { AppState } from "../../types";

import { useHistory } from "react-router-dom";
import SvgLogoLoginOMS from "src/assets/svg/SvgLogoLoginOMS";
import { notifyError, notifySuccess } from "src/components/notification";
import { useAuth } from "src/services/authorRouter";
import colors from "src/utils/colors";
import { useIsMount } from "src/utils/helpers/functions/useIsMount";
import {
	localGetFormLogin,
	localSaveAccount,
	localSaveAuthUUID,
	localSaveFeatures,
	localSaveFormLogin,
	localSaveToken
} from "src/utils/localStorage";
// import { GoogleLogin, googleLogout } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
// import { useGoogleLogin } from "@react-oauth/google";
import SvgFacebookLogin from "src/assets/svg/SvgFacebookLogin";
import { IGoogleAuthentication } from "src/services/interfaces/auth.interface";
import { signInGoogle } from "../../services/actions/account.actions";
const SignIn = () => {
	const [formLogin] = Form.useForm();
	const auth = useAuth();
	const dispatch = useDispatch();
	const isMount = useIsMount();
	const [type, setType] = useState(1);
	let history = useHistory();
	const { stateSignIn, stateRegister } = useSelector((state: AppState) => state.accountReducer);

	/****************************START**************************/
	/*                         Life Cycle                      */

	useEffect(() => {
		let _formLogin = localGetFormLogin();
		if (_formLogin) {
			let _dataUser = JSON.parse(_formLogin);
			console.log(_dataUser);
			formLogin.setFieldsValue({
				username: _dataUser.username
			});
		}
	}, []);

	useEffect(() => {
		if (isMount) return;
		const { isLoading, success, message, error, data } = stateRegister;
		if (!isLoading) {
			if (success) {
				notifySuccess(message + "");
				formLogin.resetFields();
				setType(1);
			} else if (!success || error) {
				return notifyError(message + "");
			}
		}
	}, [stateRegister.isLoading]);

	useEffect(() => {
		if (isMount) return;
		const { isLoading, success, message, error, data } = stateSignIn;
		if (!isLoading) {
			if (success) {
				console.log("data sigin", data);
				localSaveAccount(JSON.stringify(data?.data));
				localSaveToken(data?.data?.token || "");
				localSaveFeatures(data?.data?.features || "");
				localSaveAuthUUID(data?.data?.uuid || "");
				localSaveFormLogin(
					JSON.stringify({
						username: data?.data?.user?.email
					})
				);
				auth.signIn(data?.data?.token || "", JSON.stringify(data?.data), () => {
					notifySuccess("Đăng nhập thành công");
					history.push({
						pathname: "dashboard"
					});
				});
			} else if (!success || error) {
				return notifyError(message + "");
			}
		}
	}, [stateSignIn.isLoading]);

	/**************************** END **************************/

	/****************************START**************************/
	/*                          Function                       */

	const btnSignIn = (values: any) => {
		let params;
		if (values?.username?.search("@") !== -1) {
			params = {
				username: values?.username?.trim(),
				password: values?.password?.trim()
			};
		} else {
			params = {
				username: values.username.trim(),
				password: values.password.trim()
			};
		}

		dispatch(signInAccount(params));
	};

	const btnRegister = (values: any) => {
		let params;
		params = {
			fullname: values.fullname.trim(),
			email: values.email.trim(),
			phone: values.phone.trim(),
			password: values.password.trim()
		};
		dispatch(registerAccount(params));
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	/**************************** END **************************/

	/****************************START**************************/
	/*                         Component                       */

	/**************************** END **************************/

	/****************************START**************************/
	/*                        Return Page                      */
	const responseFacebook = (response: any) => {
		console.log(response);
		if (response?.name) {
			notifySuccess(`Login thành công ${response?.name}`);
		}
	};

	const createOrGetUser = async (res: any) => {
		console.log(res);
		// let userInfo = await axios.get(
		//   "https://www.googleapis.com/oauth2/v3/userinfo",
		//   {
		//     headers: {
		//       Authorization: `Bearer ${res.access_token}`,
		//       Accept: "application/json",
		//     },
		//   }
		// );
		// if (userInfo.data) {

		//   notifySuccess(`Login thành công ${userInfo.data?.name}`);
		// }
	};

	// const login = useGoogleLogin({
	//   onSuccess: (credentialResponse) => createOrGetUser(credentialResponse),
	//   scope: "email",
	// });

	const responseGoogle = (response: any) => {
		const { profileObj } = response;
		const dataRequest: IGoogleAuthentication = {
			providerId: profileObj["googleId"],
			familyName: profileObj["familyName"],
			givenName: profileObj["givenName"],
			imageUrl: profileObj["imageUrl"],
			email: profileObj["email"],
			extra_data: profileObj["tokenObj"]
		};
		dispatch(signInGoogle(dataRequest));
	};

	return (
		<Row align="middle" className="content_signIn">
			<div className="backgroundLogin_home" />
			<Col xs={0} sm={0} md={14} lg={14} xl={14}>
				<img
					style={{
						objectFit: "contain",
						width: "calc(100% - 40px)",
						maxHeight: "100vh"
					}}
					src={logoBackgroundOMS}
					// height={height}
					alt={logoBackgroundOMS}
				/>
			</Col>

			<Col xs={24} sm={24} md={10} lg={10} xl={10} style={{ display: "flex", justifyContent: "center" }}>
				<div style={{ width: 445 }}>
					<div className="w-full">
						<SvgLogoLoginOMS width={"100%"} />
					</div>
					{type === 1 ? (
						<Form
							layout="vertical"
							form={formLogin}
							id="formLogin"
							onFinish={btnSignIn}
							onFinishFailed={onFinishFailed}
						>
							<Form.Item
								label="Email/ phone:"
								style={{ marginTop: "8px" }}
								name="username"
								rules={[
									{
										required: true,
										message: "Vui lòng nhập email hoặc số điện thoại"
									}
								]}
							>
								<Input
									className="defaultInput"
									id="form-username"
									type="phoneAndEmail"
									placeholder="Số điện thoại/Email"
									disabled={stateSignIn.isLoading || undefined}
								/>
							</Form.Item>

							<Form.Item
								label="Mật khẩu"
								name="password"
								rules={[
									{
										required: true,
										message: "Vui lòng nhập mật khẩu"
									}
								]}
							>
								<Input.Password
									id="form-password"
									placeholder="Mật khẩu"
									disabled={stateSignIn.isLoading || undefined}
									className="defaultInput"
									type="password"
								/>
							</Form.Item>

							<div
								className="w-full mt-2 mb-3"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between"
								}}
							>
								<div style={{ color: colors.accent_color_5_2, cursor: "pointer" }}>Quên mật khẩu</div>
								<div style={{ color: colors.accent_color_5_2, cursor: "pointer" }} onClick={() => setType(2)}>
									Đăng ký
								</div>
							</div>

							<button
								form="formLogin"
								type="submit"
								style={{
									background: colors.primary_color_1_1,
									width: "100%",
									height: "41px",
									borderRadius: "5px",
									color: colors.neutral_color_1_2,
									fontWeight: "bold"
								}}
							>
								Đăng nhập
							</button>
						</Form>
					) : (
						<Form
							layout="vertical"
							form={formLogin}
							id="formLogin"
							onFinish={btnRegister}
							onFinishFailed={onFinishFailed}
						>
							<Form.Item
								style={{ marginTop: "8px" }}
								name="fullname"
								label="Họ và tên"
								rules={[
									{
										required: true,
										message: "Vui lòng nhập họ và tên "
									}
								]}
							>
								<Input
									className="defaultInput"
									id="form-username"
									placeholder="Nhập họ và tên"
									disabled={stateSignIn.isLoading || undefined}
								/>
							</Form.Item>
							<Form.Item
								name="email"
								label="Email:"
								rules={[
									{
										required: true,
										message: "Vui lòng nhập email "
									}
								]}
							>
								<Input
									className="defaultInput"
									id="form-username"
									type="phoneAndEmail"
									placeholder="Nhập email"
									disabled={stateSignIn.isLoading || undefined}
								/>
							</Form.Item>
							<Form.Item
								name="phone"
								label="Số điện thoại:"
								rules={[
									{
										required: true,
										message: "Vui lòng nhập số điện thoại"
									}
								]}
							>
								<Input
									className="defaultInput"
									id="form-username"
									type="phoneAndEmail"
									placeholder="Nhập số điện thoại"
									disabled={stateSignIn.isLoading || undefined}
								/>
							</Form.Item>

							<Form.Item
								name="password"
								label="Mật khẩu:"
								rules={[
									{
										required: true,
										message: "Vui lòng nhập mật khẩu"
									}
								]}
							>
								<Input.Password
									id="form-password"
									placeholder="Mật khẩu"
									disabled={stateSignIn.isLoading || undefined}
									className="defaultInput"
									type="password"
								/>
							</Form.Item>
							<Form.Item
								name="confirm"
								label="Nhập lại mật khẩu:"
								dependencies={["password"]}
								rules={[
									{
										required: true,
										message: "Vui lòng nhập password!"
									},
									({ getFieldValue }) => ({
										validator(_, value) {
											if (!value || getFieldValue("password") === value) {
												return Promise.resolve();
											}
											return Promise.reject(new Error("Nhập lại mật khẩu không khớp!"));
										}
									})
								]}
							>
								<Input.Password placeholder="Nhập lại mật khẩu" className="defaultInput" />
							</Form.Item>

							<div className="w-full mt-2 mb-3">
								<div style={{ color: colors.accent_color_5_2, cursor: "pointer" }} onClick={() => setType(1)}>
									Đã có tài khoản? Đăng nhập
								</div>
							</div>

							<button
								form="formLogin"
								type="submit"
								style={{
									background: colors.primary_color_1_1,
									width: "100%",
									height: "41px",
									borderRadius: "5px",
									color: colors.neutral_color_1_2,
									fontWeight: "bold",
									cursor: "pointer"
								}}
							>
								Đăng ký
							</button>
						</Form>
					)}
					{/* <div className="googleLogin">
            <div onClick={() => login()} className="googleLogin__buttonGoogle">
              <SvgGoogleLogin />
              &nbsp; &nbsp;&nbsp;Sign in with Google
            </div>
          </div> */}
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							border: "1px solid #333",
							borderRadius: "6px",
							overflow: "hidden",
							marginTop: "8px"
						}}
					>
						<GoogleLogin
							clientId="1078820425477-bfod3v81p4h793tave67bmal6jd838c4.apps.googleusercontent.com"
							onSuccess={(e: any) => responseGoogle(e)}
							onFailure={(e: any) => responseGoogle(e)}
							cookiePolicy={"single_host_origin"}
							buttonText="Đăng nhập với Google"
							prompt="select_account"
							className="googleLogin__buttonFacebook"
						/>
					</div>

					<div className="googleLogin">
						<FacebookLogin
							appId="5314215728692310"
							autoLoad={false}
							cssClass="googleLogin__buttonFacebook"
							fields="name,email,picture"
							callback={(e: any) => responseFacebook(e)}
							icon={<SvgFacebookLogin />}
							textButton="&nbsp;&nbsp;&nbsp;Sign in  with Facebook"
						/>
					</div>
				</div>
			</Col>
		</Row>
	);

	/**************************** END **************************/
};

export default SignIn;
