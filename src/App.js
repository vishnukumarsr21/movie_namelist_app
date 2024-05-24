import {useState} from 'react';
import './app.css'
import CreateMovie from './Component/CreateMovie/CreateMovie';
import Movies from "./Component/MoviesComp/Movies";
import 'bootstrap/dist/css/bootstrap.css' 
import axios from 'axios'
let moviesdata=[
    {
        id:1,
        mname:"MS DHONI",
        desc:"This is an epic movie tells about Dhoni's Biography",
        year:2016,
        duration:"150",
        isseats:"No Seats",
        imgurl:"../images/msd_7.jpg"
    },
    {
        id:2,
        mname:"JERSEY",
        desc:"This is a movie tells about Arjun's Life",
        year:2022,
        duration:"160",
        isseats:"Few Left",
        imgurl:"../images/jersey.jpg"
    },
    {
        id:3,
        mname:"DEAR COMRADE",
        desc:"This is a movie with action and romance",
        year:2019,
        duration:"160",
        isseats:"Book Now",
        imgurl:"../images/dear.jpg"
    },
    {
        id:4,
        mname:"VARISU",
        desc:"This is a movie of joint family",
        year:2023,
        duration:"170",
        isseats:"Few Left",
        imgurl:"../images/varisu.jpg"
    },
    {
        id:5,
        mname:"THUNIVU",
        desc:"This is a movie with action and comedy",
        year:2023,
        duration:"170",
        isseats:"Few Left",
        imgurl:"../images/thunivu.jpg"
    }
]
function App() {
    let [newMovie,updateMov]=useState(moviesdata)

function getData(d) {
    updateMov([d,...newMovie])
    console.log(d);
}

callme()
async function callme(){
    console.log("from server");
    const res1= await 
    axios.get("http://localhost:3000/movies")
    console.log(res1.data.data.movies);
}

     return ( <div>
         <CreateMovie sendData={getData}></CreateMovie>
         {newMovie.map(mov=> {
            return(
                <Movies key={mov.id}
                id={mov.id}
                mname={mov.mname}
                desc={mov.desc}
                year={mov.year}
                duration={mov.duration}
                isseats={mov.isseats}
                imgurl={mov.imgurl}
                ></Movies>
                
            )
         })}

       {/* <Movies
        id={moviesdata[0].id}
        mname={moviesdata[0].mname}
        desc={moviesdata[0].desc}
        year={moviesdata[0].year}
        duration={moviesdata[0].duration}
        isseats={moviesdata[0].isseats}
        imgurl={moviesdata[0].imgurl}
        >
        </Movies>
        <Movies
        id={moviesdata[1].id}
        mname={moviesdata[1].mname}
        desc={moviesdata[1].desc}
        year={moviesdata[1].year}
        duration={moviesdata[1].duration}
        isseats={moviesdata[1].isseats}
        imgurl={moviesdata[1].imgurl}
        >
        </Movies>
        <Movies
        id={moviesdata[2].id}
        mname={moviesdata[2].mname}
        desc={moviesdata[2].desc}
        year={moviesdata[2].year}
        duration={moviesdata[2].duration}
        isseats={moviesdata[2].isseats}
        imgurl={moviesdata[2].imgurl}
        >
        </Movies>
        <Movies
        id={moviesdata[3].id}
        mname={moviesdata[3].mname}
        desc={moviesdata[3].desc}
        year={moviesdata[3].year}
        duration={moviesdata[3].duration}
        isseats={moviesdata[3].isseats}
        imgurl={moviesdata[3].imgurl}
        >
        </Movies>
        <Movies
        id={moviesdata[4].id}
        mname={moviesdata[4].mname}
        desc={moviesdata[4].desc}
        year={moviesdata[4].year}
        duration={moviesdata[4].duration}
        isseats={moviesdata[4].isseats}
        imgurl={moviesdata[4].imgurl}
        >
        </Movies> */}
        </div>
        
        //  className="divcss">
        //     <Movies></Movies>
        //     <Movies></Movies>
        //     <Movies></Movies>
        //      <Movies></Movies>
        //      <Movies></Movies>
        //      <Movies></Movies>
        //     <Movies></Movies>       
// const App = () => {
//   const renderMovies = () => {
//     // Generate an array of 1000 elements
//     const moviesArray = Array.from({ length: 1000 });
//     // Map over the array and render the Movies component for each element
//     return moviesArray.map((_, index) => <Movies key={index} />);
//   };
//   return (
//     <div>
//       {/* Other page content */}
//       {renderMovies()}
//     </div>
//   );
// };  
     )
}
export default App;
//mongodb+srv://admin:<password>@cluster0.vuncg0n.mongodb.net/