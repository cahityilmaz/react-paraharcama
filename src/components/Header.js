import { moneyFormat } from "../helpers";

export default function Header({ money, total }) {
	const currentMoney = money - total;
	return (
		<div className="header">
			{(total > 0 && currentMoney !== 0 && <>Harcayacak $ {moneyFormat(currentMoney)} paranız kaldı!</>) ||
				(currentMoney === 0 && <>Paran bitti, parasız insan boş insandır!</>) || (
					<>Harcamak için $ {moneyFormat(money)} paranız var!</>
				)}
		</div>
	);
}
