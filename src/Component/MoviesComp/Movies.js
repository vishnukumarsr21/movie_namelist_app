import '../../app.css'
import MoviesDetail from './MovieDetails';

let style={
  padding:'10px',
  fontSize:25
}
// let st='badge'
// st+=bk==='BOOK NOW'?'text-bg-success':'text-bg-danger'
function Movies(props) {
    
    // let badgeclass='badge '
    // let valuedis=""
    // if(props.isseats==='Book Now'){
    //     valuedis='Book Now'
    //     badgeclass+='text-bg-success'
    // }
    // else if(props.isseats==='Few Left'){
    //     valuedis='Few Left'
    //     badgeclass+='text-bg-warning'
    // }
    // else{
    //     valuedis='No Seats'
    //     badgeclass+='text-bg-danger'
    // }
    // let [seatCount,getcount]=useState(0)
    // let [amount,getamount]=useState(0)
    // function displaySeatCount() {
    //   return seatCount
    // }
    // function displayamount() {
    //   return amount
    // }
    // let decSeatCount=function(){
    //   getcount(--seatCount)
    //   getamount((seatCount-1)*100)
    // }
    // let incSeatCount=function(){
    //   getcount(++seatCount)
    //   getamount((seatCount+1)*100)
    // }

return(
    <>
  <div className="card mb-3" style={style}>
  <div className="row g-0 shadow">
    <div className="col-md-4">
    <img style={{width:250,height:250}} src={props.imgurl} className="img-fluid rounded-start" alt="..."/>
    </div> 
    <div className="col-md-8">
      <MoviesDetail
      id={props.id} 
      mname={props.mname}
      desc={props.desc}
      year={props.year}
      duration={props.duration}
      isseats={props.isseats}
      imgurl={props.imgurl}
      ></MoviesDetail>
      {/* <div className="card-body">
        <h5 className="card-title">{props.mname}</h5>
        <p className="card-text">{props.desc}</p>
        <p className="card-text">{props.year}:<small className="text-body-secondary">{props.duration}</small></p>
        <span className={badgeclass}>{valuedis}</span>
        <button onClick={incSeatCount}className='btn btn-info' style={{marginLeft:50}}>Increase Seats</button>
        <span style={{marginLeft:20}}>{displaySeatCount()}</span>
        <button onClick={decSeatCount} className='btn btn-dark' style={{marginLeft:50}}>Decrease Seats</button>
        {/* <button onClick={incamt}className='btn btn-info' style={{marginLeft:50}}>Amount Increases</button> */}
        {/* <span style={{marginLeft:20}}>Amount Rs.{displayamount()}</span> */}
        {/* <button onClick={decamt} className='btn btn-dark' style={{marginLeft:50}}>Amount Decreases</button> */}
     
    </div>
  </div>
</div>
    </>
)
}
export default Movies;