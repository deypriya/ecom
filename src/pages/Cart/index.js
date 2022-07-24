import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartAction from "../../components/Card/CartAction";

const CartItem = ({ item }) => {
	return (
		<div className="card p-3 pe-2 pb-2 m-3 ">
			<h5 className="cart-title">{item.title}</h5>
			<img src={item.thumbnail} alt="" className="cart-img align-self-end" />
			<div className="card-body pe-0">
				<CartAction item={item} />
				<div className="cart-price text-end">
					<div className="text-start fw-semibold">Price - $ {item.price * item.qty}</div>
				</div>
			</div>
		</div>
	);
};

const Cart = () => {
	let cart = useSelector((state) => state.cart);

	return (
		<div className="mycart container">
			<h2 className="my-4 ps-3 text-center">CART</h2>
			{cart && (
				<>
					{cart.items.map((item, index) => (
						<CartItem item={item} key={index} />
					))}
					<div className="card m-3 mb-5 p-4">
						<h5 className="card-title d-flex justify-content-between">
							<span>Total</span>
							<span>$ {cart.items.reduce((total, item) => total + item.price * item.qty, 0)}</span>
						</h5>
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
