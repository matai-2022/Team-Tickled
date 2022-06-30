Itemsimport request from 'superagent'

const rootUrl = '/api/v1'

export function getItems() {
  return request.get(rootUrl + '/items').then((res) => {
    return res.body.fruits
  })
}
