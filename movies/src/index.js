import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './components/App'

const root = document.querySelector('#root')
const index = createRoot(root)
index.render(

 <>
 <h1 >merhaba</h1>
<App />                                          
 </>
)

export default index