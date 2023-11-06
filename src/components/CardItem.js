import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@mui/material/Box";

export default function CardItem(props) {

  const items = [
    {
      id: 1,
      name: "Shirt",
      price: 2000,
    },
    {
      id: 2,
      name: "Trouser",
      price: 2500,
    },
    {
      id: 3,
      name: "Jurcy",
      price: 1800,
    },
    {
      id: 4,
      name: "Cap",
      price: 1200,
    },
    {
      id: 5,
      name: "Shoe",
      price: 4500,
    },
  ];  
  
  return (
    <Box>
        
      {items.map((item) => (
        <div key={item.id}>
          <p>************************************</p>
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.price}</div>
          <label>
            <input
              type="checkbox"
              id={item.id}
              onChange={() => handleCheckboxChange(item.id)}
              checked={checkboxState[item.id] || false}
            />
            {item.name}
          </label>
          <p>************************************</p>
        </div>
      ))}
      </Box>
  );
}
