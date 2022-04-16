import React, { useEffect } from 'react';

function Nav(props) {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;
  
  useEffect(() => {
    document.title = (currentCategory.name);
  }, [currentCategory]);

  return (
    <header>
  <h2 className="title">
    <a href ="/">
      Zachary Steuer's Porfolio
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
    {categories.map((category) => (
            <li className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`} key={category.name}>
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {(category.name)}
              </span>
            </li>
          ))}
    </ul>
  </nav>
</header>
  );
}

export default Nav;