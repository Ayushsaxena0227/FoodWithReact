import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Globalcontext } from "../context/Context.";
import "./styles.css";
export default function Details() {
  const { id } = useParams();
  const {
    recipiedetaildata,
    setrecipiedetails,
    Addtofavourite,
    favouritelist,
  } = useContext(Globalcontext);

  useEffect(() => {
    async function getrecipedetails() {
      const result = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await result.json();
      console.log(data);
      if (data?.data) {
        setrecipiedetails(data?.data);
      }
    }
    getrecipedetails();
  }, []);

  return (
    <div className="details-container">
      <div className="details-image">
        <img
          src={recipiedetaildata?.recipe?.image_url}
          alt="recipiedetail_image"
        />
      </div>
      <div>
        <span className="details-publisher">
          {recipiedetaildata?.recipe?.publisher}
        </span>
        <h3 className="details-title">{recipiedetaildata?.recipe?.title}</h3>
        <div>
          <button
            className="details-button"
            onClick={() => Addtofavourite(recipiedetaildata?.recipe)}
          >
            {favouritelist &&
            favouritelist.length > 0 &&
            favouritelist.findIndex(
              (item) => item.id === recipiedetaildata?.recipe?.id
            ) !== -1
              ? "Remove from favourites"
              : "Add to Favourites"}
          </button>
        </div>
        <div className="details-ingredients">
          <span>Ingredients:</span>
          <ul>
            {recipiedetaildata?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span>
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span>{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
