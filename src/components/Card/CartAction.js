import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, increaseItem, decreaseItem } from "../../redux_slice/cart";

const CartAction = ({ item }) => {
	let cart = useSelector((state) => state.cart);
	const [quantity, setQuantity] = useState(0);
	const dispatch = useDispatch();
	const handleAddToCart = () => {
		// console.log(addItem(item));
		dispatch(addItem(item));
	};
	const handleIncrement = () => {
		dispatch(increaseItem(item));
	};
	const handleDecrement = () => {
		dispatch(decreaseItem(item));
	};
	useEffect(() => {
		// console.log(cart);
		const found = cart.items.find((cartItem) => cartItem.id === item.id);
		setQuantity(found ? found.qty : 0);
	}, [cart]);
	return (
		<>
			{quantity === 0 ? (
				<button type="button" className="btn btn-warning" onClick={handleAddToCart}>
					Add to cart
				</button>
			) : (
				<div className="btn-group" role="group" aria-label="Basic example">
					<button type="button" className="btn btn-warning" onClick={handleDecrement}>
						-
					</button>
					<button type="button" className="btn btn">
						{quantity}
					</button>
					<button type="button" className="btn btn-warning" onClick={handleIncrement}>
						+
					</button>
				</div>
			)}
		</>
	);
};
export default CartAction;
