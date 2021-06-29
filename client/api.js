import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

const asciaUrl = '/ASCIA'

export function getAscia () {
  return request
    .get(asciaUrl)
    .then(response => response.body)
}
