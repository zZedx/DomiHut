import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

const DeleteItemButton = ({id}) => {
    const dispatch = useDispatch()
  return (
    <Button onClick={() => dispatch(deleteItem(id))} type={"delete"}>
      Delete
    </Button>
  );
};

export default DeleteItemButton;
