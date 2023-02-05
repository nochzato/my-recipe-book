import { Request, Response } from 'express';
import axios from 'axios';
import { IngredientWithMeasure } from '../common/types';

export const getRecipesByMainIngredient = (
  req: Request,
  res: Response
): void => {
  axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${req.body.main_ingredient}`
    )
    .then((response) => {
      res.send(response.data.meals);
    });
};

export const getRecipeById = (req: Request, res: Response): void => {
  axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${req.params.id}`
    )
    .then((response) => {
      const meal = response.data.meals[0];
      const ingredientsWithMeasures: Array<IngredientWithMeasure> = [];
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredientsWithMeasures.push({
            ingredient: meal[`strIngredient${i}`],
            measure: meal[`strMeasure${i}`],
          });
        } else {
          break;
        }
      }

      res.send({
        idMeal: meal.idMeal,
        strMeal: meal.strMeal,
        strCategory: meal.strCategory,
        strArea: meal.strArea,
        strInstructions: meal.strInstructions,
        strMealThumb: meal.strMealThumb,
        strTags: meal.strTags,
        strYoutube: meal.strYoutube,
        ingredientsWithMeasures,
      });
    });
};
