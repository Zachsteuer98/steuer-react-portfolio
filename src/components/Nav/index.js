import React, { useEffect } from 'react';

function Nav(props) {
  
  useEffect(() => {
    document.title = (props.currentCategory);
  }, [props.currentCategory]);

  return (
    <header>
  <h2 className="row header-margin-top">
    <span className= "header-span"
    onClick={() => {
      props.setCurrentCategory('About')
    }}>
      Zachary Steuer's Porfolio
    </span>
  </h2>
  <nav>
    <div className= "row">
    <ul className="row header-content">
    {props.categories.map((category) => ( 
            <li className={`mx-1 ${ 
                category === props.currentCategory && 'navActive'
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
    </div>
  </nav>
</header>
  );
}

export default Nav;