import React from "react";
import "./styles.css";
import { getFakeAPIData } from "./services/getFakeAPIData";
import { headerData } from "./utils/headerData";

const wishItemStyle = {
  background: "#efefef",
  border: "1px solid black",
  padding: "10px",
  marginTop: "5px"
};
function WishItem({ item, clickHandler }) {
  console.log(item);
  const { description, link } = item;

  return (
    <div onClick={clickHandler} style={wishItemStyle}>
      <span>{description} </span>
      <a href={link}>Buy</a>
    </div>
  );
}

function WishList({ wishList, clickHandler }) {
  return wishList.map((wishListItem) => (
    <WishItem
      item={wishListItem}
      key={wishListItem.id}
      clickHandler={clickHandler(wishListItem.id)}
    />
  ));
}

function AppHeader() {
  return (
    <>
      <h1>{headerData("mainHeader")}</h1>
      <h2>{headerData("subHeader")}</h2>
    </>
  );
}

export default function App() {
  const data = getFakeAPIData();

  function clickHandler(id) {
    return function (event) {
      console.log(event.target.innerText, id);
    };
  }

  return (
    <div className="App">
      <AppHeader />
      <WishList wishList={data.wishList} clickHandler={clickHandler} />
    </div>
  );
}
