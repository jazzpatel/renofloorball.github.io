/* */ 
"format cjs";
// -------------------------------------------
// Exposes a convenient global instance 
// -------------------------------------------
export default function css(ripple){
  log('creating')
  ripple.types['text/css'] = {
    header: 'text/css'
  , check(res){ return includes('.css')(res.name) }
  , parse(res){ 
      res.headers.hash = djb(res.body)
      return res
    }
  }

  return ripple
}

import includes from 'utilise/includes'
const log = require('utilise/log')('[ri/types/css]')

const djb = str => {
  let hash = 5381
    , i = str.length

  while (i)
    hash = (hash * 33) ^ str.charCodeAt(--i)

  return hash >>> 0
}