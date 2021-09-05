import React from 'react';
import Cards from './cards'
import './card.css'

export default function Card({id,image}){
return(
    <>
    <div className="card">

        <img className="imgcard" src={image}></img>

    </div>
    </>
)
}