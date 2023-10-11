import { useDispatch, useSelector } from "react-redux"
import Button from "../../ui/Button"
import { getItemQuantity, increaseItemQuantity } from "./cartSlice"
import { decreaseItemQuantity } from "./cartSlice"

const UpdateItemQuantity = ({id}) => {
    const dispatch = useDispatch()
  const itemQuantity = useSelector(getItemQuantity(id))

  return (
    <div className="flex items-center gap-2 sm:gap-3">
        <Button type={"round"} onClick={()=> dispatch(decreaseItemQuantity(id))}>-</Button>
        <span className="text-sm font-medium">{itemQuantity}</span>
        <Button type={"round"} onClick={()=> dispatch(increaseItemQuantity(id))}>+</Button>
    </div>
  )
}

export default UpdateItemQuantity