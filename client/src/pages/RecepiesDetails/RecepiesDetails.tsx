import React from "react";
import classes from './RecepiesDetails.module.css'

const RecepiesDetails = () => {
  return (
    <div className={classes.details_container}>
      <h2>Recepie_1</h2>
      <img
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <h3>Ingredients</h3>
      <ul className={classes.details_list}>
        <li>3 teaspoons extra virgin olive oil or vegetable oil, divided</li>
        <li>
          1 (1 1/4 pound) section bone-in beef shank with a lot of meat, or 1
          pound beef stew meat, excess fat trimmed
        </li>
        <li>1 large onion, chopped (about 1 1/2 cups)</li>
        <li>8 cups beef broth or beef stock, divided</li>
        <li>4 large beets (about 1 1/2 pounds), peeled and chopped</li>
        <li>4 carrots (1 pound), peeled and chopped</li>
        <li>
          1 large russet potato (6 ounces), peeled and cut into 1/2-inch cubes
        </li>
        <li>2 cups thinly sliced cabbage</li>
        <li>3/4 cup chopped fresh dill, divided</li>
        <li>3 tablespoons red wine vinegar</li>
        <li>1 cup sour cream</li>
        <li>Salt and freshly ground black pepper to taste</li>
      </ul>
    </div>
  );
};

export default RecepiesDetails;
