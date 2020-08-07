import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Main from './MainComponent';

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
			const cmnts = props.dish.comments.map((comment) => {
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
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					<Card>
	                    <CardImg top src={props.dish.image} alt={props.dish.name} />
	                    <CardBody>
	                      <CardTitle>{props.dish.name}</CardTitle>
	                      <CardText>{props.dish.description}</CardText>
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
                </div>             
			</div>
			);
		}
export default Dishdetails;