import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Main.css";
import ListItem from "./ListItem";
import TableItem from "./ListItem";
import Header from "./Header";

const Main = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const api_url = "https://fakestoreapi.com/products";

  const itemHandler = useCallback(async () => {
    setLoading(true);
    setError(null)
    try{const response = await axios.get(api_url);
      setItems(response.data);
    }catch(error){
      setError("Something went wrong");
    }
    
  });
  useEffect(() => { 
    itemHandler();
    setLoading(false);
  }, [itemHandler]);
  return (
    <div>
      <Header />
      {!loading && items.length > 0 && <ListItem items={items} />}
      {!loading && items.length===0 && !error && <p>Found no Items</p>}
      {!loading && error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      
      {/* <TableItem items={items} /> */}
    </div>
  );
};
export default Main;
