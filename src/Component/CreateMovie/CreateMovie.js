import MovieForm from "./MovieForm";
function CreateMovie(props){
    // function call(data){
    //     console.log(data);
    //     props.eventHandle();
    // }
    function getData(d){
        console.log(d);
        props.sendData(d)
    }

    return(
        <div className="row justify-content-md-center">
            <div className="col-6 bg-body-tertiary shadow-sm" style={{background:'white', margin:20}}>
                <MovieForm eventHandle={getData}></MovieForm>
        </div>
        </div>
    )
}
export default CreateMovie;