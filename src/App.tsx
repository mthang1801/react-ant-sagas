/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Form } from "antd";
import "antd/dist/antd.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import "./app.css";
import Main from "./components/layout/Main";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/signIn";
import { useAuth } from "./services/authorRouter";
import { AppState } from "./types";
import routerNames from "./utils/data/routerName";
import { useIsMount } from "./utils/helpers/functions/useIsMount";

function App() {
	const [signInForm] = Form.useForm();

	const auth = useAuth();
	const dispatch = useDispatch();
	const isMount = useIsMount();
	let history = useHistory();
	const { stateSignIn, phone, email } = useSelector((state: AppState) => state.accountReducer);
	const { pathname } = useLocation();

	return (
		<GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}>
			<div className="App">
				<Switch>
					<Route path={routerNames.SIGN_IN} exact component={SignIn} />

					<Main>
						<Route exact path={routerNames.DASHBOARD} component={Dashboard} />
					</Main>
				</Switch>
			</div>
		</GoogleOAuthProvider>
	);
}

export default App;
