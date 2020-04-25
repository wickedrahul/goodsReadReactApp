import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import * as actionCreators from "./store/actions/action";

import Book from "./components/books";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {searchString: ''};
  }
  handleSearch(event){
   this.setState({'searchString': event.target.value}) 
  }

   searchQuery(){
     this.props.onSearch(this.state.searchString);
  }
  render() {
    var booksResults = [];
    if(this.props.fetchedBooks && this.props.fetchedBooks.length>0){
      booksResults= this.props.fetchedBooks
    }

    return (
      <div className="App">
        <div>
          <input type="text" className="inputSearch" onChange={this.handleSearch.bind(this)}
          placeholder="search by title, author"/>
          <input type="submit" className="btnSearch" onClick={this.searchQuery.bind(this)} value="Search"/>
        </div>
      {

        booksResults.map((f, index)=>{
          return <Book key={index} data={f}/>
        })
      }
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchedBooks: state.fetchedBooks
  };
};

const mapDispachToProps = (dispatch, props) => {
  return {
    onSearch: (val) => dispatch(actionCreators.onSearch(val))
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
