import React from 'react'
import './cards.css'
import Card from './card'
import monopoly1 from "../components/images/monopoly1.jpg"
import monopoly2 from "../components/images/monopoly2.jpg"
import monopoly3 from "../components/images/monopoly3.jpg"
import monopoly4 from "../components/images/monopoly4.jpg"
import monopoly5 from "../components/images/monopoly5.jpg"
import monopoly6 from "../components/images/monopoly6.jpg"
import monopoly7 from "../components/images/monopoly7.jpg"
import monopoly8 from "../components/images/monopoly8.jpg"
import monopoly9 from "../components/images/monopoly9.jpg"
import monopoly10 from "../components/images/monopoly10.jpg"
import monopoly11 from "../components/images/monopoly11.jpg"
import monopoly12 from "../components/images/monopoly12.jpg"
import monopoly13 from "../components/images/monopoly13.jpg"
import monopoly14 from "../components/images/monopoly14.jpg"
import monopoly15 from "../components/images/monopoly15.jpg"


export default function Cards(){
    const items = [
        {
            image:{monopoly1},
            id:1,

        },{
            image:{monopoly2},
            id:2,
        },{
            image:{monopoly3},
            id:3,
        },{
            image:{monopoly4},
            id:4,
        },{
            image:{monopoly5},
            id:5,
        },{
            image:{monopoly6},
            id:6,
        },{
            image:{monopoly7},
            id:7,
        },{
            image:{monopoly8},
            id:8,
        },{
            image:{monopoly9},
            id:9,
        },{
            image:{monopoly10},
            id:10,
        },{
            image:{monopoly11},
            id:11,
        },{
            image:{monopoly12},
            id:12,
        },{
            image:{monopoly13},
            id:13,
        },{
            image:{monopoly14},
            id:14,
        },{
            image:{monopoly15},
            id:15,
        }
        ]
return(
   <div className="cards">
       <Card id='1' image={monopoly1}/>
       <Card id="2" image={monopoly2}/>
       <Card id="3" image={monopoly3}/>
       <Card id="4" image={monopoly4}/>
       <Card id="5" image={monopoly5}/>
       <Card id="6" image={monopoly6}/>
       <Card id="7" image={monopoly7}/>
       <Card id="8" image={monopoly8}/>
       <Card id="9" image={monopoly9}/>
       <Card id="10" image={monopoly10}/>
       <Card id="11" image={monopoly11}/>
       <Card id="12" image={monopoly12}/>
       <Card id="13" image={monopoly13}/>
       <Card id="14" image={monopoly14}/>
       <Card id="15" image={monopoly15}/>


   </div>
)
}