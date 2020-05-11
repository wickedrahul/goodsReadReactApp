import React, { Component } from "react";

class BookReviews extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const review = this.props.review;
    return (
        <div>
            <img src ={this.props.img}/>
            {review}
        </div>
    );
  }
}

export default BookReviews
