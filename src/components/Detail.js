export default function Detail({ basket, total, resetBasket }) {
	return (
		<>
			<div className="detail">
				<h3>Alışveriş Detayları</h3>
				{basket.map((item) => (
					<div key={item.product.id}>
						{item.product.name} x {item.quantity}
					</div>
				))}
				<div className="total">Toplam Harcama: $ {total}</div>
				<button onClick={resetBasket} className="reset-basket-btn">
					Sepeti Sıfırla
				</button>
			</div>
		</>
	);
}
