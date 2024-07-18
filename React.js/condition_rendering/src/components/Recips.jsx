import React, { useState } from 'react';
import pavbhaji from '../assets/download.jpg';
import coco from '../assets/coco.jpg'
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

export function Coco() {
    return(
        <div class="container">
        <h1>Coconut Cake Recipe</h1>
        <h2>Ingredients:</h2>
        <h3>Cake:</h3>
        <ul>
            <li>2 cups all-purpose flour</li>
            <li>2 teaspoons baking powder</li>
            <li>1/2 teaspoon salt</li>
            <li>1/2 cup unsalted butter, softened</li>
            <li>1 1/2 cups granulated sugar</li>
            <li>4 large eggs</li>
            <li>1 teaspoon vanilla extract</li>
            <li>1 cup coconut milk</li>
            <li>1 cup shredded coconut</li>
        </ul>
        <h3>Frosting:</h3>
        <ul>
            <li>1/2 cup unsalted butter, softened</li>
            <li>4 cups powdered sugar</li>
            <li>1/4 cup coconut milk</li>
            <li>1 teaspoon vanilla extract</li>
            <li>1 cup shredded coconut (for topping)</li>
        </ul>
        <h2>Instructions:</h2>
        <h3>For the Cake:</h3>
        <ol>
            <li>Preheat Oven: Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.</li>
            <li>Mix Dry Ingredients: In a medium bowl, whisk together the flour, baking powder, and salt. Set aside.</li>
            <li>Cream Butter and Sugar: In a large mixing bowl, cream the butter and sugar together until light and fluffy.</li>
            <li>Add Eggs and Vanilla: Beat in the eggs one at a time, then stir in the vanilla extract.</li>
            <li>Combine Wet and Dry Ingredients: Gradually add the flour mixture to the butter mixture, alternating with the coconut milk. Begin and end with the flour mixture. Mix until just combined.</li>
            <li>Fold in Coconut: Gently fold in the shredded coconut.</li>
            <li>Bake: Divide the batter evenly between the prepared cake pans. Bake for 25-30 minutes, or until a toothpick inserted into the center comes out clean.</li>
            <li>Cool: Allow the cakes to cool in the pans for 10 minutes, then turn them out onto a wire rack to cool completely.</li>
        </ol>
        <h3>For the Frosting:</h3>
        <ol>
            <li>Beat Butter: In a large mixing bowl, beat the softened butter until creamy.</li>
            <li>Add Sugar and Coconut Milk: Gradually add the powdered sugar, alternating with the coconut milk. Beat until smooth and fluffy.</li>
            <li>Add Vanilla: Stir in the vanilla extract.</li>
        </ol>
        <h3>Assemble the Cake:</h3>
        <ol>
            <li>Layer the Cake: Place one cake layer on a serving plate. Spread a layer of frosting over the top.</li>
            <li>Add Second Layer: Place the second cake layer on top of the first and frost the top and sides of the cake.</li>
            <li>Top with Coconut: Sprinkle the shredded coconut over the top and sides of the cake, pressing lightly to adhere.</li>
        </ol>
        <p>Enjoy your homemade coconut cake!</p>
    </div>
    )
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
      <button className="toggle-button" onClick={buttonClick}>
        <img src={coco} alt="Pav Bhaji" /> {showRecips ? 'Hide Recipe' : 'Show Recipe'}
      {showRecips && <Coco />}
      </button>
    </div>
  );
}

export default Recips;