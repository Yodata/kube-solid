const add = require('./add')
const index = async event => {
console.log(event)
return add(event.data)
}
module.exports = index
