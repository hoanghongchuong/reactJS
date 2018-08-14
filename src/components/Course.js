import React from 'react';
import { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component{
	formatName(user){
		return user.firstName + ' ' + user.lastName;
	}

	render() {
		const user = {
			firstName: 'Hoang',
			lastName: 'Chuong'
		};
		let title = 'this is title';
		return (
			<div>
				<div className="col-md-4">
	                <div className="panel panel-info">
	                    <div className="panel-heading">
	                        <h3 className="panel-title">ReactJS</h3>
	                    </div>
	                    <div className="panel-body">
	                    	{this.formatName(user)}
	                    	<br />
	                    	{title}
	                       <ul className="list-group">
	                           <Lesson />
	                           <Lesson />
	                           <Lesson />
	                           
	                       </ul>
	                    </div>
	                </div>
	            </div>
	            <button type="button" className="btn btn-success">Đăng ký</button>
            </div>
		);
	}
}

export default Course;