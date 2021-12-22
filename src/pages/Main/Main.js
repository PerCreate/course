import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";

import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Lesson from "../Lessons/Lesson";
import { AssetsPath } from "../../Context/AssetsPath";


function Main() {

	return (
		<>
			<AssetsPath>
				<Router>
					<Header />
					<Routes>
						<Route path="/lessons" element={<Lesson />} />
						<Route path="/" element={<Content />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
					<Footer />
				</Router>
			</AssetsPath>
		</>
	);
}

export default Main;
