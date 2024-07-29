import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Globalcontext = createContext(null);

export default function Globalstate({ children }) {
  const [searchparam, setsearchparam] = useState("");
  const [recipedata, setrecipeidata] = useState(null);
  const [loading, setloading] = useState(false);
  const [recipiedetaildata, setrecipiedetails] = useState(null);
  const [favouritelist, setfavouritelist] = useState([]);
  const navigate = useNavigate();
  const handlesubmit = async (event) => {
    event.preventDefault();
    setloading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchparam}`
      );
      const data = await res.json();
      if (data.data.recipes) {
        setrecipeidata(data.data.recipes);
        setloading(false);
        setsearchparam("");
        navigate("/");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setloading(false);
      setsearchparam("");
    }
  };
  const Addtofavourite = (getcurrentid) => {
    console.log(getcurrentid);
    let cpyfavouritelist = [...favouritelist];
    const index = cpyfavouritelist.findIndex(
      (item) => item.id === getcurrentid.id
    );
    if (index === -1) {
      cpyfavouritelist.push(getcurrentid);
    } else {
      cpyfavouritelist.splice(index);
    }

    setfavouritelist(cpyfavouritelist);
  };
  console.log(favouritelist, "favouritelist");

  return (
    <Globalcontext.Provider
      value={{
        searchparam,
        setsearchparam,
        handlesubmit,
        loading,
        recipedata,
        recipiedetaildata,
        setrecipiedetails,
        Addtofavourite,
        favouritelist,
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
}
