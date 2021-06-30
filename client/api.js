import request from 'superagent'

const recipeUrl = '/api/v1/widgets/'

export function getRecipes () {
  return request
    .get(recipeUrl)
    .then(response => response.body)
}
