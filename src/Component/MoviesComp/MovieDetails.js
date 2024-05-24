import React from "react"
import {useState}  from 'react';

function MoviesDetail(props){
    let badgeclass='badge '
    let valuedis=""
    if(props.isseats==='Book Now'){
        valuedis='Book Now'
        badgeclass+='text-bg-success'
    }
    else if(props.isseats==='Few Left'){
        valuedis='Few Left'
        badgeclass+='text-bg-warning'
    }
    else{
        valuedis='No Seats'
        badgeclass+='text-bg-danger'
    }
    let [seatCount,getcount]=useState(0)
    let [amount,getamount]=useState(0)
    function displaySeatCount() {
      return seatCount
    }
    function displayamount() {
      return amount
    }
    let decSeatCount=function(){
      if(seatCount>0){
      getcount(--seatCount)
      getamount((seatCount-1)*100)
      }
    }
    let incSeatCount=function(){
      getcount(++seatCount)
      getamount((seatCount+1)*100)
    }

    return (
        <div className="card-body">
        <h5 className="card-title">{props.mname}</h5>
        <p className="card-text">{props.desc}</p>
        <p className="card-text">{props.year}:<small className="text-body-secondary">{props.duration}</small></p>
        <span className={badgeclass}>{valuedis}</span>
        <button onClick={incSeatCount}className='btn btn-info' style={{marginLeft:50}}>Increase Seats</button>
        <span style={{marginLeft:20}}>{displaySeatCount()}</span>
        <button onClick={decSeatCount} className='btn btn-dark' style={{marginLeft:50}}>Decrease Seats</button>
        {/* <button onClick={incamt}className='btn btn-info' style={{marginLeft:50}}>Amount Increases</button> */}
        <span style={{marginLeft:20}}>Amount Rs.{displayamount()}</span>
        {/* <button onClick={decamt} className='btn btn-dark' style={{marginLeft:50}}>Amount Decreases</button> */}
      </div>
    )
}
export default MoviesDetail;