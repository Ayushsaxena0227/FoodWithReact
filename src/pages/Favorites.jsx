import RecipeItem from "../components/RecipieItem";
import { Globalcontext } from "../context/Context.";
import { useContext } from "react";
export default function Favourite() {
  const { favouritelist } = useContext(Globalcontext);
  return (
    <div>
      {favouritelist && favouritelist.length > 0 ? (
        favouritelist.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p>Nothing Is Added</p>
        </div>
      )}
    </div>
  );
}
