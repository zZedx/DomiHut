import Button from "../../ui/Button";

function EmptyCart() {
  return (
    <div className="mt-24 text-center">
      {/* <Link to="/menu" >&larr; Back to menu</Link> */}
      <p className="mb-8">
        Your cart is still empty. Start adding some pizzas :)
      </p>
      <Button to="/menu" type={"primary"}>
        &larr; Back to Menu
      </Button>
    </div>
  );
}

export default EmptyCart;
