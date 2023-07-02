import { useEffect, useState } from "react";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";

function App() {
	const [money, setMoney] = useState(1000);
	const [basket, setBasket] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const total = basket.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
		setTotal(total);
	}, [basket]);

	const resetBasket = () => {
		setBasket([]);
	};

	return (
		<>
			<Header money={money} total={total} />
			{products.map((product) => (
				<Product key={product.id} product={product} total={total} money={money} basket={basket} setBasket={setBasket} />
			))}
			{total > 0 && (
				<Detail basket={basket} resetBasket={resetBasket} total={total} />
			)}
		</>
	);
}

export default App;
