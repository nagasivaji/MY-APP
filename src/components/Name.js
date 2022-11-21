// Component
function Name(props) {



    function handleChange(event) {
        if(event.target.value === null || event.target.value === undefined || event.target.value ==="") {
            props.update(false);
        }
        else{
            props.update(true);
        }
    } 




 
    return ( 
    <div className = "Name" >
        <p>Name :</p>
        <input type="text" placeholder="name" onChange={handleChange} required/>
    </div>
    );
}

export default Name;