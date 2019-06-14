import React from 'react'
import Element from './Element'
import Header from './Header'

const CourseList = (props) => {
    return (
        <div id='Courses' className='fadeInRightBig animated fast'>
            <Header text='Курсы'/>
            {props.names.map((name, index) => <Element applyState={props.applyState} text={name} key={index}/>)}
        </div>
    )
}

export default CourseList