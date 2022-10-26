// ES2015 Module
import { person, sayHello } from './modules/mymodule1.js'
import * as blog from './modules/mymodule2.js'

const output = document.getElementById('output')

console.log(person)
console.log(sayHello())
output.innerText = blog.post.title
