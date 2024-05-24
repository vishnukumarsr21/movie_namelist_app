import React, { useState } from "react";

function MovieForm(props){
    
    let[mName,updateName]=useState('');
    let[mYear,updateYear]=useState('');
    let[mDuration,updateDuration]=useState('');
    let[mDesc,updateDesc]=useState('');
    let[isSeats,updateSeats]=useState(false);
    let[mImgUrl,updateImgUrl]=useState('');
    
    function nameHandler(event){
        updateName(event.target.value)
        // console.log(event)
    }
    function yearHandler(event){
        updateYear(event.target.value)
    }
    function durationHandler(event){
        updateDuration(event.target.value)
    }
    function descHandler(event){
        updateDesc(event.target.value)
    }
    function isSeatsHandler(event){
        updateSeats(event.target.checked)
    }
    function imgUrlHandler(event){
        updateImgUrl(event.target.value)
    }
    function createMovieHandler(event){
        event.preventDefault();
        let movieip={
            mname:mName,
            desc:mDesc,
            year:+mYear,
            duratiion:mDuration,
            isseats:isSeats ? 'Book Now':'No seats',
            imgurl:mImgUrl
        }
        updateName('');updateDesc('');updateImgUrl('');updateDuration('');
        updateSeats(false);updateYear('');
        console.log(movieip); 
        props.eventHandle(movieip)
        // console.log(event.target.value)
    }
    return (
        <form className="row g-3" onSubmit={createMovieHandler}>
        <div className="col-md-6">
            <label >Movie Name</label>
            <input type="text"
                    className="form-control"
                    id="name"
                    value={mName}
                    placeholder="Movie Name"
                    onChange={nameHandler}
              />
        </div>
        <div className="col-md-6">
            <label >Movie Year</label>
            <input type="number"
                    min="0.01" step="0.01"
                    className="form-control"
                    id="year"
                    value={mYear}
                    placeholder="Movie Year"
                    onChange={yearHandler}
                    />
        </div>
        <div className="col-md-6">
            <label >Movie Duration</label>
            <input type="number"
                    min="0.01" step="0.01"
                    className="form-control"
                    id="duration"
                    value={mDuration}
                    placeholder="Movie Duration"
                    onChange={durationHandler}
                    />
        </div>
        <div className="form-group">
            <label >Movie Description</label>
            <input type="text"
                    className="form-control"
                    id="description"
                    value={mDesc}
                    placeholder="Movie Description"
                    onChange={descHandler}
                    />
        </div>
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="isAvailable"
            value={isSeats} onChange={isSeatsHandler}/>
            <label className="form-check-label" >Is Seats available?</label>
        </div>
        <div className="form-group">
            <label >Select Movie image</label>
            <input type="file" className="form-control" id="select-image"
            value={mImgUrl}
            onChange={imgUrlHandler} />
        </div>
        <button type="submit"className="btn btn-primary">Add Movie</button>
    </form>
    )
}
export default MovieForm;