import React from "react";
import "./ListItem.css";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlashOnIcon from '@material-ui/icons/FlashOn';

const ListItem = ({ items }) => {
  return (
    <div className="ListItem">
      {items.map((itemData) => {
        return (
          <div className="ListItem">
            <ul>
              <li>
                <img src={itemData.image} />
              </li>
              <li>
                <div className="specification">
                  <h5>{itemData.title}</h5>
                  <p>Category : {itemData.category}</p>
                  <h5>Rs. {itemData.price}</h5>
                  <p>{itemData.description}</p>
                  <div className="BuyButton">
                    <li>
                      <Button variant="contained" style={{backgroundColor:"#cca806"}}>
                        <FlashOnIcon /> Buy Now
                      </Button>
                    </li>
                    <li>
                      <Button variant="contained" style={{backgroundColor:"#d4580b"}}>
                        <ShoppingCartIcon /> Add to Cart
                      </Button>
                    </li>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ListItem;
