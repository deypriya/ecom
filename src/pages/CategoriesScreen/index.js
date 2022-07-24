import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { API_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import MyTitle from "../../components/MyTitle";

const Home = () => {
	const [productsData, setProductsData] = useState(null);
	const params = useParams();
	const loadProducts = async () => {
		try {
			const res = await fetch(API_URL + "category/" + params.category_name);
			const data = await res.json();
			setProductsData(data);
		} catch (error) {
			setProductsData("error");
		}
	};
	useEffect(() => {
		loadProducts();
	}, []);
	// useEffect(() => {
	// 	console.log(productsData);
	// }, [productsData]);
	return (
		<div className="row justify-content-center">
			<ClipLoader loading={!productsData} size={100} />
			{productsData ? (
				productsData === "error" ? (
					"Error"
				) : (
					<>
						<MyTitle title={params.category_name} />
						{productsData.products.map((item, index) => (
							<Card key={index} item={item} />
						))}
					</>
				)
			) : null}
		</div>
	);
};

export default Home;
