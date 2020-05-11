import React, { Component } from "react";
import BookReviews from "./reviews";

class BookDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    var i= this.props.imgUrl;
    const reviews = this.props.data.reviews;
    return (
      <div className="containerDivs">
       <div className="imageContainer">
            <label>Title:  </label><span>{this.props.data.title}</span><br/>

            <label>Author:  </label><span>{this.props.data.author}</span><br/>

            <label>Average Rating: </label><span>{this.props.data.average_rating}</span><br/>
            
            {

                reviews.map((r, index)=>{
                    return (
                        <div>
                            <BookReviews review= {r} img= "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"/>
                        </div>
                    )
                    
                })
            }
          </div>
      </div>
    );
  }
}

export default BookDetails
