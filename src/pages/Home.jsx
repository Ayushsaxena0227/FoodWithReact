import { useContext } from "react";
import { Globalcontext } from "../context/Context.";
import RecipieItem from "../components/RecipieItem";

export default function Home() {
  const { loading, recipedata } = useContext(Globalcontext);
  if (loading) {
    return <div>Loading Please Wait!</div>;
  }
  return (
    <div>
      {recipedata && recipedata.length > 0 ? (
        recipedata.map((item) => <RecipieItem item={item} />)
      ) : (
        <div>
          <p>Nothing To Show .Please Search Something Else</p>
        </div>
      )}
    </div>
  );
}
