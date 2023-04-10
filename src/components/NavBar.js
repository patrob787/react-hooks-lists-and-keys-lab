import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  let newLinks = links.map((item) => {
    return <a href={`#${item}`} key={item}>{item}</a>
  })

  return <nav>{newLinks}</nav>;
}

export default NavBar;
