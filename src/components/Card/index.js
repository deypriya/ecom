import React from "react";
import CartAction from "./CartAction";
import "./style.css";

// const item = {
// 	id: 1,
// 	title: "iPhone 9",
// 	description: "An apple mobile which is nothing like apple",
// 	price: 549,
// 	discountPercentage: 12.96,
// 	rating: 4.69,
// 	stock: 94,
// 	brand: "Apple",
// 	category: "smartphones",
// 	thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
// 	images: [
// 		"https://dummyjson.com/image/i/products/3/1.jpg",
// 		"https://dummyjson.com/image/i/products/1/2.jpg",
// 		"https://dummyjson.com/image/i/products/1/3.jpg",
// 		"https://dummyjson.com/image/i/products/1/4.jpg",
// 		"https://dummyjson.com/image/i/products/1/thumbnail.jpg",
// 	],
// };

const CustomCard = ({ item }) => {
	return (
		<div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
			<div className="card" style={{ width: "20rem" }}>
				<img src={item.thumbnail} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{item.title}</h5>
					<p className="card-text">{item.description}</p>
					<div style={{ textAlign: "right", marginBottom: "20px" }}>
						<span
							style={{
								backgroundColor: "#5A8F7B",
								padding: "4px",
								borderRadius: "4px",
								color: "white",
							}}
						>
							Price - $ {item.price}
						</span>
					</div>
					<div style={{ textAlign: "center" }}>
						<CartAction item={item} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomCard;
