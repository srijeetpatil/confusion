import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
      }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }
    sendDetails(selectedDish){
        if(selectedDish != null){
            return(
                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    
    render() {
        return (
          <div>
            <Header/>
            <div className="container">
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                {this.sendDetails(this.state.selectedDish)}
            </div>
            <Footer/>
          </div>
        );
      }    
}
export default Main;