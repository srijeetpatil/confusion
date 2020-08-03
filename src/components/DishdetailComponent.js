import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Menu from './MenuComponent';

class DishDetail extends Component{
	constructor(props){
		super(props);
	}
	renderDish(cmnts){
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
	render(){
			const cmnts = this.props.dish.comments.map((comment) => {
					return(
						<div className="row">
							<div className="mt-1">
								<p>{comment.comment}</p>
							</div>
							<div className="mt-1">
								<p>-- {comment.author} , {comment.date}, </p>
							</div>
						</div>
						);
					});
			return(
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					<Card>
	                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
	                    <CardBody>
	                      <CardTitle>{this.props.dish.name}</CardTitle>
	                      <CardText>{this.props.dish.description}</CardText>
	                    </CardBody>
	                </Card>
				</div>				
                <div className="col-12 col-md-5 m-1">
	                <div>
	                	<h4><strong>Comments</strong></h4>
	                </div>
	                <div>
	                	{this.renderDish(cmnts)}
	                </div>                                               
                </div>             
			</div>
			);
		}
}
export default DishDetail;