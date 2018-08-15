import React, { Component } from 'react';
import Course from './components/Course'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
  	const items = [
			{
				name: 'ReactJS',
				time: '30h',
				free: true,
				des: 'ReactJS is very simple'
			},
			{
				name: 'AngularJS',
				time: '50h',
				free: false,
				des: 'AngularJS is very simple'
			},
			{
				name: 'NodeJS',
				time: '30h',
				free: true,
				des: 'NodeJS is very simple'
			}
		];
		const elementCourses = items.map((item, index) => {
			return <Course key={index} name={item.name} time={item.time} free={item.free}> {item.des} </Course>
		});
    return (
       	<div className="row">
       		{elementCourses}
            
        </div>
    );
  }
}

export default App;
