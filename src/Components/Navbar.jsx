import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const actions = () => {
    const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");

    menuBtn.onclick = () => {
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    };

    cancelBtn.onclick = () => {
      items.classList.remove("active");
      menuBtn.classList.remove("hide");
      searchBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      form.classList.remove("active");
      cancelBtn.style.color = "#ff3d00";
    };

    searchBtn.onclick = () => {
      // form.classList.add("active");
      // searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    };
  };

  useEffect(() => {
    actions();
  }, []);


  return (
    <nav>
      <div className="menu-icon">
        <span className="fas fa-bars" />
      </div>
      <div className="logo">
        GitHub Profile Viewer App
      </div>
      <ul className="nav-items">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
      <div className="search-icon">
        {/* <span className="fas fa-search" /> */}
      </div>
      <div className="cancel-icon">
        <span className="fas fa-times" />
      </div>
      
    </nav>
  );
};

export default Navbar;
