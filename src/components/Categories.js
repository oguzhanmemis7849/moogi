import React from "react";
import "./All.css";
import categoriesIcon from "../images/kategori-icon.svg";

const Categories = () => {
  return (
    <div id="categories">
      <div className="categoriesBack">
        <div className="categoriesTop">
          <img
            className="categoriesIcon"
            src={categoriesIcon}
            alt="categoriesIcon"
          />
          <h2>Kategoriler</h2>
        </div>
        <div id="subtitle">
          <a href="/urunler/kahvaltılıklar"><h2>Kahvaltılıklar</h2></a>
          <a href="/urunler/temel_gıda"><h2>Temel Gıda</h2></a>
          <a href="/urunler/atıştırmalıklar"><h2>Atıştırmalıklar</h2></a>
          <a href="/urunler/içecekler"><h2>İçecekler</h2></a>
          <a href="/urunler/meyve_sebze"><h2>Meyve & Sebze</h2></a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
