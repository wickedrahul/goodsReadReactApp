import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state={
      showDetails:false
    }
  }

  showDetails(){
    this.setState({
      showDetails:true
    })
  }

  render() {
    var i= this.props.data.best_book[0].image_url[0];
    return (
      <div>
        <div className="imageContainer" onClick={this.showDetails.bind(this)}><img src= {i}/></div>
        {
          this.state.showDetails? 
          <div className="imageContainer">
            <label>Title:  </label><span>{this.props.data.best_book[0].title[0]}</span><br/>

            <label>Author:  </label><span>{this.props.data.best_book[0].author[0].name[0]}</span><br/>

            <label>Average Rating: </label><span>{this.props.data.average_rating[0]}</span><br/>
            
          </div>:''
        }
      </div>
    );
  }
}

export default Book
