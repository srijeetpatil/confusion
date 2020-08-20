import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import Main from './MainComponent';
import { Link } from 'react-router-dom';
import {Container} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

function renderComments(cmnts){
		if(cmnts == null){
			return(
				<div></div>
				);
		}
		else{
			return(
				<div>{cmnts}</div>
				);
		}
	}

function Dishdetails(props){			
		const cmnts = props.comments.map((comment) => {
				return(
					<div className="row">
					<div className="mt-1">
						<p>{comment.comment}</p>
					</div>
					<div className="mt-1">
						<p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}, </p>
					</div>	
				</div>	
					);
				});
		return(
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
					<BreadcrumbItem active>{props.dish[0].name}</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>{props.dish[0].name}</h3>
					<hr />
				</div>                
			</div>
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					<Card>
						<CardImg top src={props.dish[0].image} alt={props.dish[0].name} />
						<CardBody>
						<CardTitle>{props.dish[0].name}</CardTitle>
						<CardText>{props.dish[0].description}</CardText>
						</CardBody>
					</Card>
				</div>				
				<div className="col-12 col-md-5 m-1">
					<div>
						<h4><strong>Comments</strong></h4>
					</div>
					<div>
						{renderComments(cmnts)}
					</div>
					<CommentForm/>					                                               
				</div>             
			</div>
		</div>			
		);
	}
export default Dishdetails;

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			isModOpen: false
		}
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}	
	toggleModal() {
		this.setState({
			isModOpen: !this.state.isModOpen
		});
	}	
	handleSubmit(values){
		alert(JSON.stringify(values));
	}
	render(){
		const styles = {
				justifyContent : 'center',
				alignItems: 'center',
				margin: '10px'
			};		
		return(      
			<React.Fragment>				
				<Button outLine onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>      
				<Modal isOpen={this.state.isModOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}> Submit Comment</ModalHeader>
					<ModalBody style={styles}>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)} > 
							<Row className="form-group">
								<Label htmlFor="ratingSelect">Rating</Label>
								<Control.select model=".ratingSelect" name="ratingSelect" className="form-control">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Control.select>
							</Row>
							<Row className="form-group">
								<Label htmlFor="yourname">Your Name</Label>
								<Control.text model=".yourname" name="yourname" placeholder="Your Name" className="form-control"
								validators={{
									required, minLength: minLength(3),
									maxLength: maxLength(15)
								}}>
								</Control.text>
								<Errors
									className="text-danger"
									model=".yourname"
									show="touched"
									messages={{
										required: 'Required',
										minLength: 'Must be greater than 2 characters',
										maxLength: 'Must be 15 characters or less'
									}}
								/>
							</Row>
							<Row className="form-group">
								<Label htmlFor="comment">Comment</Label>
								<Control.textarea model=".comment" rows="5" name="comment" placeholder="Comment" className="form-control"></Control.textarea>
							</Row>
							<Button type="submit" value="submit" color="primary">Submit</Button>
						</LocalForm>
					</ModalBody>
				</Modal>			
			</React.Fragment>										
		);
	}	
}
