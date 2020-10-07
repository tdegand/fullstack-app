import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const UpdateCourse = () => {

  //Uses a react hook to set and store state
  const [values, setValues] = useState({
    course: [],
})

  useEffect(() => {
    const path = window.location.pathname.split('/');
    console.log(path)
    const id = path[2];

    axios.get(`http://localhost:5000/api/courses/${id}`)
    .then(res => {
      const course = res.data.course
      console.log(course.owner.firstName)
      setValues({ course })
    })
    .catch(res => console.log('error', res))
  }, [])

    return(
        <div className="bounds course--detail">
        <h1>Update Course</h1>
        <div>
          <form>
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <div><input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..."
                    value={values.course.title} /></div>
                <p>by Joe Smith</p>
              </div>
              <div className="course--description">
              <div><textarea id="description" name="description" className="" placeholder={values.course.description}></textarea></div>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                        placeholder="Hours" value={values.course.estimatedTime} /></div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
    <div><textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder={values.course.materialsNeeded}></textarea></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-100 pad-bottom">
              <button className="button" type="submit">Update Course</button>
              <Link to={{pathname: `/courses/${values.course.id}`}}>
              <button className="button button-secondary">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
}

export default UpdateCourse