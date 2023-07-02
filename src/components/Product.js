import { moneyFormat } from "../helpers";

export default function Product({ product, total, money, basket, setBasket }) {
	const currentItem = basket.find((item) => item.product.id === product.id);
	const sell = () => {
		const currentItem = basket.find((item) => item.product.id === product.id);
		const basketWithoutCurrent = basket.filter((item) => item.product.id !== product.id);
		currentItem.quantity -= 1;
		if (currentItem.quantity === 0) {
			setBasket([...basketWithoutCurrent]);
		} else {
			setBasket([...basketWithoutCurrent, currentItem]);
		}
	};

	const buy = () => {
		const currentItem = basket.find((item) => item.product.id === product.id);
		if (currentItem) {
			currentItem.quantity += 1;
			const basketWithoutCurrent = basket.filter((item) => item.product.id !== product.id);
			setBasket([...basketWithoutCurrent, currentItem]);
		} else {
			const data = { product: product, quantity: 1 };
			setBasket([...basket, data]);
		}
	};

	return (
		<div className="product">
			<h6>{product.name}</h6>
			<div>$ {moneyFormat(product.price)}</div>
			<div className="actions">
				<button onClick={sell} disabled={!currentItem?.quantity > 0}>
					Sat
				</button>
				<span>{currentItem?.quantity || 0}</span>
				<button onClick={buy} disabled={product.price > money - total}>
					Satın al
				</button>
			</div>
		</div>
	);
}
