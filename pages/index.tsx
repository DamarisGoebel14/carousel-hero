import Slider from "../components/Slider"
import React from "react";

import styles from '../styles/Home.module.css'


const data = [
    {
        "id": 1,
        "image": "https://images.unsplash.com/photo-1544786178-7d8003382c54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80",
        "text": "First Slider",
        "button":"Click me here Nr. 1"
    },
    {
        "id": 2,
        "image": "https://images.unsplash.com/photo-1534791548804-ccf7e66bc710?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80",
        "text": "Second Slider",
        "button":"Click me here Nr. 2"
    }
]




function Index() {

    let newData = data.map (data => data)
   console.log(newData)
  return (
    <div>
      <Slider>

          {data.map(data => {
              return (
                  <div className={styles.imagediv}
                       style={{backgroundImage: "url(" + data.image +")"}}>
                      <p>{data.text}</p>
                      <button>{data.button}</button>
                  </div>
              )
          })}



      </Slider>
    </div>
  )
}

export default Index
