import React from "react";
import MacBook from "../../assests/img/MacBook.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import "./ShopItem.css";

const ShopItem = () => {
  return (
    <div className="cardItem bg-white">
      <div className="px-2 py-2">
        <div className="itemImg  bg-light">
          <div className="first me-3">
            <span className="discount text-white d-flex">
              <span className="m-auto">20%</span>
            </span>
            <span className="favIcon">
              <FavoriteBorderOutlinedIcon className="heartIcon" />
            </span>
          </div>
          <img
            src={MacBook}
            alt="shop item"
            className="max-100 mx-auto imgTop"
          />
        </div>
        <div className="itemDetails mx-3 mt-3">
          <div className="">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div>
                <div className="itemName">
                  <p>Mac Book 2S</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <StarIcon className="starYellow me-1" />
                <span className="fw-bold">4.5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="itemPrice d-flex align-items-center ms-3 mb-3">
          <span className="actualPrice">16,200</span>
          <span className="ms-1 me-2 mb-0 text-muted">EGP</span>
          <s className="text-muted">18,600</s>
        </div>
        <div className="pb-3">
          <button className="addToCardBut">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default ShopItem;
