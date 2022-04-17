import React, { useEffect } from 'react';

function Nav(props) {
  
  useEffect(() => {
    document.title = (props.currentCategory);
  }, [props.currentCategory]);

  return (
    <header>
  <h2 className="title">
    <a href ="/">
      Zachary Steuer's Porfolio
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
    {props.categories.map((category) => ( 
            <li className={`mx-1 ${
                category
                }`} key={category}>
              <span
                onClick={() => {
                  props.setCurrentCategory(category)
                }}
              >
               {(category)}
              </span>
            </li>
          ))}
    </ul>
  </nav>
</header>
  );
}

export default Nav;