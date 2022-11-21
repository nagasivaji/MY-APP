function University(props){


    function handleChange(event) {
        props.update(true);
    } 


    return(
        <div>
            <p>University :</p>
            <select name="university" id="" onChange={handleChange} required>
                <option value="" selected disabled>Select university</option>
                <option value="">JNTUK</option>
                <option value="">JNTUH</option>
                <option value="">JNTUA</option>
                <option value="">OU</option>
            </select>
        </div>
    );
}

export default University;