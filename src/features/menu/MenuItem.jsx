import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ items }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = items;

  return (
    <li className={`flex gap-4 py-2 ${soldOut ? "opacity-60 grayscale" : ""}`}>
      <img src={imageUrl} alt={name} className="h-24" />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-end justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && <Button type={"xsmall"} addClass="uppercase">Add to Cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
