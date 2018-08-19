import React from 'react';
import { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component{
	constructor(props) {
		super(props);

		this.state = ({
			isShowOutline: false,
			total: 69
		});
		this.handleClick3 = this.handleClick3.bind(this);
		this.registerCourse = this.registerCourse.bind(this);
		this.handleToogleOutline = this.handleToogleOutline.bind(this);
	}


	formatName(user){
		return user.firstName + ' ' + user.lastName;
	}


	handleClick1() {
		alert('view 1');
	}
	handleClick2(content) {
		alert(content);
	}
	handleClick3(){
		alert(this.props.name);
	}
	registerCourse(){
		// alert('registerCourse');
		console.log(this.refs.username.value);
	}

	handleToogleOutline(){
		this.setState({
			isShowOutline: !this.state.isShowOutline,

		});
	}


	showButtonFree() {
		const isFree = this.props.free;
		// console.log("isFree", isFree);
		if(isFree === true){
			return 	(
						<div className="btn-group">
							<button onClick={this.handleClick1} type="button" className="btn btn-warning">View1</button>
							<button onClick={() => this.handleClick2("view 2 sdf sf")} type="button" className="btn btn-danger">View2</button>
							<button onClick= { this.handleClick3 } type="button" className="btn btn-success">View3</button>
						</div>
                   	)
		}
		else{
			return (				
					<div className="input-group">
					    <span className="input-group-btn">
					        <button onClick={this.registerCourse} className="btn btn-info" type="button">Go!</button>
					    </span>
					    <input type="text" className="form-control" placeholder="username" ref="username" />
					</div>				
			)
		}
	}

	render() {
		console.log(this.state);
		let elementOutline = null;
		this.state.total +=1;
		if(this.state.isShowOutline){
			elementOutline = <ul className="list-group">
	                           <Lesson />
	                           <Lesson />
	                           <Lesson />	                           
	                       	</ul>;
		}
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
	                    	<p> <button onClick = {this.handleToogleOutline} type="button" className="btn btn-success">Toogle outline</button> </p>
	                    	{/*<p>{this.showButtonFree()} </p>*/}
	                    	{/*{this.formatName(user)}
	                    	<br />
	                    	{title}*/}

	                       	{/*<ul className="list-group">
	                           <Lesson />
	                           <Lesson />
	                           <Lesson />	                           
	                       	</ul>*/}
	                       	{elementOutline}
	                    </div>
	                    <div className="panel-footer">
	                    	{this.showButtonFree()}
	                    </div>

	                </div>
	            </div>
	            
            </div>
		);
	}
}

export default Course;