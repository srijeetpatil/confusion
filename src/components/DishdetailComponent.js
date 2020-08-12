import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Main from './MainComponent';
import { Link } from 'react-router-dom';

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
					</div>             
				</div>
			</div>			
			);
		}
export default Dishdetails;