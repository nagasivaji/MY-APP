// importing use state to render component
import React, { useState } from 'react';


// importing components
import Name from "./components/Name";
import University from './components/University';
import Course from './components/Course';
import College from './components/College';
import Submit from './components/Submit';



function App() {

    // state variables
    const [university, setUniversity] = useState(false);
    const [course, setCourse] = useState(false);
    const [college, setCollege] = useState(false);
    const [submit, setSubmit] = useState(false);

    // 
    const [courseDetails, setCourseDetils] = useState(null);
    



    // functions
    function showUniversity(value){
        setUniversity(value);
    }

    function showCourse(value){
      setCourse(value);
    }

    function showCollege(course){
      const value = true;
      setCollege(value);
      setCourseDetils(course);
    }

    function showSubmit(value){
      setSubmit(value);
    }




    return ( 
    <div className = "App" >
      <Name update={showUniversity} />

      {/* University */}
      {university ? <University update={showCourse} /> : null}

      {/* Course */}
      {university && course ? <Course update={showCollege} /> : null}

      {/* College */}
      {university && course && college ? <College update={showSubmit} course={courseDetails} /> : null}

      {/* Submit */}
      {university && course && college && submit ? <Submit /> : null}

    </div>
    );
}

export default App;