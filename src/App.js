import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import Photo from './photo.jpg';


class App extends Component{
  state={
    person:{name:' Oueslati Eya', bio:' Html, Css, JS', profession:' Full-Stack JS Developer', photo: Photo,},
    show: false,
    timeShow: 0,
  };
  handleClick= ()=> {this.setState({show: !this.state.show});};
  render(){
    return (
      <div>
        <span> The time since the component has mounted: {this.state.timeShow} </span>
        <Button variant="primary" style={{ width: '25%', margin: '10px auto'}} onClick= {this.handleClick}>
         {this.state.show ? 'Good Bye' : 'Show Me' } </Button>
        {this.state.show? (
          <Card style={{ width: '25%', margin: '10px auto' }}>
    <Card.Img variant="top" src={this.state.person.photo} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text> Name:{this.state.person.name} <br/> Bio:{this.state.person.bio} <br/> Profession:{this.state.person.profession} <br/></Card.Text>
    </Card.Body>
    
  </Card>) : null}
      </div>
      
  
    
    );
  }
  secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
  }
  componentDidMount() {
    let count = 0;
    setInterval(() => {
      count++;
      return this.setState({ timeShow: this.secondsToHms(count) });
    }, 1000);
  }
}

export default App;
