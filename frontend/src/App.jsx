import { Routes, Route, Link } from "react-router-dom";

// Components that we are importing from teh other modules
import UserAuthentication from "./pages/userAuthentication";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import InitialPage from  "./pages/InitialPage";

function App() {

	return (
		<div>
			<Routes>
				<Route path="/" element={<InitialPage />} />
				<Route path="/signup" element={<UserAuthentication type="signup" />} />
				<Route path="/signin" element={<UserAuthentication type="signin" />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/send" element={<SendMoney />} /> 
			</Routes>
		</div>
	)
}

export default App;
