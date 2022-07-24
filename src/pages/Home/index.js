import React, { useEffect, useState } from "react";
import { API_URL, Color } from "../../utils/constants";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import "./style.css";
import MyTitle from "../../components/MyTitle";

const CategoriesScreen = () => {
	const [category, setCategory] = useState(null);
	const categoryLoader = async () => {
		try {
			const res = await fetch(API_URL + "categories");
			const data = await res.json();
			setCategory(data);
		} catch (error) {
			setCategory("error");
		}
	};
	useEffect(() => {
		categoryLoader();
	}, []);
	return (
		<div className="container text-center">
			<ClipLoader loading={!category} size={100} />
			{category && (
				<>
					<MyTitle title="Select a category" />
					<div className="row">
						{category.map((item, index) => (
							<CateTitle title={item} key={index} />
						))}
					</div>
				</>
			)}
			{category === "error" && <h2>Error</h2>}
		</div>
	);
};
const CateTitle = ({ title }) => {
	return (
		<div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
			<Link to={`category/${title}`} style={{ textDecoration: "none" }}>
				<div
					className=" text-center mb-5 categoryBox d-flex align-items-center justify-content-center"
					style={{ backgroundColor: Color.orange }}
				>
					{title}
				</div>
			</Link>
		</div>
	);
};

export default CategoriesScreen;
