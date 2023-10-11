import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

const DeleteItemButton = ({id}) => {
    const dispatch = useDispatch()
  return (
    <Button onClick={() => dispatch(deleteItem(id))} addClass={" bg-red-400 hover:bg-red-600"} type={"xsmall"}>
      Delete
    </Button>
  );
};

export default DeleteItemButton;
