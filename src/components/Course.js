function Course(props){

    function handleChange(event) {
        props.update(event.target.value);
    } 



    return(
        <div>
            <p>Course:</p>
            <input type="radio" id="hsc" name="course" value="HSC" onChange={handleChange} required />
              <label for="hsc">HSC</label>

            <input type="radio" id="graduate" name="course" value="Graduate" onChange={handleChange} required />
              <label for="graduate">Graduate</label>

            <input type="radio" id="postGraduate" name="course"  value="PostGraduate" onChange={handleChange} required />
             <label for="postGraduate">PostGraduate</label>
        </div>
    );
}

export default Course;