import request from 'superagent'
//get
const rootUrl = '/banana'
//makes request to slices/items
export function getItems() {
  // return Promise.resolve([{ id: 1, item: 'skateboard', des: 'DO A KICK FLIP' }])

  return request.get(rootUrl).then((res) => {
    return res.body
    //.items
  })
}
//post
//do we need counter to be sent????
//removed counter from this function here
export function addNewItem(newItem) {
  //console.log(newItem)
  const { item, des } = newItem
  return request
    .post(rootUrl)
    .send({ item, des })
    .then((response) => response.body)
}
