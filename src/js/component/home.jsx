import React from "react";
import Input from "./input";


const Home = () => {
	return (
		<div className=" container-fluid text-center">
			<div className="row justify-content-center">
				<ul>
					<h1>Mis tareas</h1>
					<li>
						<Input />

					</li>
				</ul>
			</div>

		</div>

	);
};

export default Home;
