import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";

function MenuItem({ items }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = items;

  function handleAddToCart() {
    dispatch(
      addItem({
        pizzaId: id,
        name,
        unitPrice,
        quantity: 1,
        totalPrice: unitPrice * 1,
      }),
    );
  }

  return (
    <li className={`flex gap-4 py-2 ${soldOut ? "opacity-60 grayscale" : ""}`}>
      <img src={imageUrl} alt={name} className="h-24" />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-end justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && (
            <Button
              type={"xsmall"}
              addClass="uppercase"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
