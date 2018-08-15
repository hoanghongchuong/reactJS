import React from 'react';
import { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component{

	formatName(user){
		return user.firstName + ' ' + user.lastName;
	}

	showButtonFree() {
		const isFree = this.props.free;
		// console.log("isFree", isFree);
		if(isFree === true){
			return <div className="panel-footer">
	                    	<button type="button" className="btn btn-success">View</button>
	                    </div>
		}
	}

	render() {
		

		return (
			<div>
				<div className="col-md-4">
	                <div className="panel panel-info">
	                    <div className="panel-heading">
	                        <h3 className="panel-title">{this.props.name}</h3>
	                    </div>
	                    <div className="panel-body">
	                    	<p>{this.props.time} </p>
	                    	<p>{this.props.children} </p>
	                    	
	                    	{/*<p>{this.showButtonFree()} </p>*/}
	                    	{/*{this.formatName(user)}
	                    	<br />
	                    	{title}*/}
	                       <ul className="list-group">
	                           <Lesson />
	                           <Lesson />
	                           <Lesson />	                           
	                       </ul>
	                    </div>
	                    {this.showButtonFree()}
	                    

	                </div>
	            </div>
	            
            </div>
		);
	}
}

export default Course;