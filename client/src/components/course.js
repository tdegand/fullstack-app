import React from 'react';

const Course = (props) => {
    return (
        <div className="grid-33">
            <a className="course--module course--link" href="course-detail.html">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{props.course.title}</h3>
            </a>
        </div>
    )
}

export default Course