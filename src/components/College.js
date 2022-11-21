function College(props) {
    //console.log(props.course);

    var hfc = true;
    var graduate = true;
    var postGraduate = true;

    if(props.course === "HSC"){
        hfc = false;
    }
    else if(props.course === "Graduate"){
        graduate = false;
    }else if(props.course === "PostGraduate"){
        postGraduate = false;
    }




    function handleChange(event) {

        var vit = document.getElementById("vit").checked;
        var bvrit = document.getElementById("bvrit").checked;
        var dnr = document.getElementById("dnr").checked;
        var cmr = document.getElementById("cmr").checked;

        if (vit || bvrit || dnr || cmr) {
            props.update(true);
        }
        else {
            props.update(false);
        }
    }


    return (
        <div>
            <p>Colleges:</p>
            <input type="checkbox" id="vit" name="vit" value="VIT" onChange={handleChange} disabled={graduate} />
            <label for="vit">VIT</label>

            <input type="checkbox" id="bvrit" name="bvrit" value="BVRIT" onChange={handleChange} disabled={graduate} />
            <label for="bvrit">BVRIT</label>


            <input type="checkbox" id="dnr" name="dnr" value="DNR" onChange={handleChange} disabled={postGraduate} />
            <label for="dnr">DNR</label>

            <input type="checkbox" id="cmr" name="cmr" value="CMR" onChange={handleChange} disabled={hfc} />
            <label for="cmr">CMR</label>
        </div>

    );
}

export default College;