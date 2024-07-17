import React, { useState } from 'react';
import pavbhaji from '../assets/download.jpg';
import './Recips.css'; // Import the CSS file for styling

export function Pavbhaji() {
  return (
    <div className="recipe-card">
      <h1>Pav Bhaji Recipe</h1>

      <h2>Ingredients:</h2>

      <h3>For the Bhaji:</h3>
      <ul>
        <li>2 tablespoons butter</li>
        <li>1 tablespoon oil</li>
        <li>1 teaspoon cumin seeds</li>
        <li>1 large onion, finely chopped</li>
        <li>2 teaspoons ginger-garlic paste</li>
        <li>2 green chilies, finely chopped</li>
        <li>2 large tomatoes, finely chopped</li>
        <li>1 cup cauliflower, finely chopped</li>
        <li>1 cup green peas</li>
        <li>2 large potatoes, boiled and mashed</li>
        <li>1 green bell pepper, finely chopped</li>
        <li>1 carrot, finely chopped</li>
        <li>1/2 cup water (adjust as needed)</li>
        <li>Salt to taste</li>
        <li>1 teaspoon red chili powder</li>
        <li>1 teaspoon turmeric powder</li>
        <li>2 teaspoons pav bhaji masala</li>
        <li>1 tablespoon lemon juice</li>
        <li>Fresh coriander leaves, chopped (for garnish)</li>
        <li>Extra butter (for serving)</li>
      </ul>

      <h3>For the Pav:</h3>
      <ul>
        <li>8 pav buns</li>
        <li>Butter (for toasting)</li>
        <li>Finely chopped coriander leaves (for garnish)</li>
      </ul>

      <h2>Instructions:</h2>

      <h3>Preparing the Bhaji:</h3>
      <ol>
        <li>Heat Butter and Oil: In a large pan, heat the butter and oil over medium heat.</li>
        <li>Sauté Onions: Add cumin seeds. When they start to crackle, add the finely chopped onions and sauté until they turn golden brown.</li>
        <li>Add Ginger-Garlic Paste: Add the ginger-garlic paste and green chilies. Sauté for a minute until the raw smell disappears.</li>
        <li>Add Tomatoes: Add the finely chopped tomatoes and cook until they become soft and oil starts to separate.</li>
        <li>Add Vegetables: Add the chopped cauliflower, green peas, green bell pepper, and carrot. Sauté for a few minutes.</li>
        <li>Add Potatoes: Add the boiled and mashed potatoes to the pan.</li>
        <li>Spices: Add salt, red chili powder, turmeric powder, and pav bhaji masala. Mix well.</li>
        <li>Cook Bhaji: Add 1/2 cup of water (adjust as needed) and mash the vegetables using a potato masher. Cook for 10-15 minutes, stirring occasionally, until the mixture thickens and the flavors blend.</li>
        <li>Finish: Add lemon juice and mix well. Garnish with chopped coriander leaves.</li>
      </ol>

      <h3>Preparing the Pav:</h3>
      <ol>
        <li>Slice and Toast: Slice the pav buns horizontally. Heat a tawa (griddle) and add butter. Place the buns on the tawa and toast until they turn golden brown and crisp on both sides.</li>
        <li>Garnish: Sprinkle some finely chopped coriander leaves on the buns while toasting.</li>
      </ol>

      <h3>Serving:</h3>
      <ul>
        <li>Serve the hot bhaji on a plate, topped with a dollop of butter.</li>
        <li>Place the toasted pav buns on the side.</li>
        <li>Garnish with chopped onions, lemon wedges, and fresh coriander leaves.</li>
      </ul>

      <p>Enjoy your homemade Pav Bhaji!</p>
    </div>
  );
}

const Recips = () => {
  const [showRecips, setShowRecips] = useState(false);

  const buttonClick = () => {
    setShowRecips(!showRecips);
  };

  return (
    <div className="container">
        <img src={pavbhaji} alt="" />
      <button className="toggle-button" onClick={buttonClick}>
        <img src={pavbhaji} alt="Pav Bhaji" /> {showRecips ? 'Hide Recipe' : 'Show Recipe'}
      </button>
      {showRecips && <Pavbhaji />}
    </div>
  );
}

export default Recips;