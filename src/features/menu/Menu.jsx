import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem"

function Menu() {
  const menu = useLoaderData()
  return <ul>
    {menu.map(menuItem => <MenuItem key={menuItem.id} items = {menuItem}/>)}
  </ul>
}

export async function loader(){
  const menu = await getMenu()
  return menu
}

export default Menu;
