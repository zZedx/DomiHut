import { formatCurrency } from "../../utils/helpers";

function MenuItem({ items }) {
  const {name, unitPrice, ingredients, soldOut, imageUrl } = items;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
