import request from 'superagent'

const recipeUrl = '/api/v1/widgets/'

export function getRecipes () {
  return request
    .get('')
    .then((response) => (response.body))
    .catch(e => console.log(e))
}
