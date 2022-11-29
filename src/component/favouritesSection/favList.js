import List from "@mui/material/List";
import { useState } from "react";
import ListItem from "./listItem";

export default function FavList(props) {
  const [border, setBorder] = useState("");
  const favourites = props.favourites;

  const drop = (event) => {
    const draggedCountry = JSON.parse(event.dataTransfer.getData("Text"));
   props.addToFavourites(draggedCountry);
    setBorder("none");
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };
  const dragEnter = () => {
    setBorder("1px solid #27ae60");
  };
  const dragLeave = () => {
    setBorder("none");
  };

  return (
    <List
      sx={{
        height: "500px",
        marginTop: "16px",
        marginRight: "24px",
        marginLeft: "24px",
        overflow: "auto",
        border,
      }}
      onDrop={drop}
      onDragOver={allowDrop}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
    >
      {favourites.map((country) => (
        <ListItem
          key={country.cca2}
          src={country.flags.svg}
          name={country.name.common}
          removeItem={props.removeFromFavourites}
        />
      ))}
    </List>
  );
}
