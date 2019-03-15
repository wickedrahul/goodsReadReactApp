import axios from "axios";
var parseString = require('xml2js').parseString;
var xml;

export const onSearchAsync = (val)=>{
	return { type: "FIRE_SEARCH", value: val }
}


export const onSearch = (val)=>{
	let url= '';
	console.log('environment', process.env.NODE_ENV)
	if(process.env.NODE_ENV === "production"){
		url= `${process.env.REACT_APP_AC_ORIGIN}/search?q=${val}&&key=Xx8furlXCo3dtnLttdgL7w`;
	}else{
		url= `/search?q=${val}&&key=Xx8furlXCo3dtnLttdgL7w`;
	}
	return dispatch =>{
	axios.get(url)
	  .then(function (res) {
	    parseString(res.data, function (err, result) {
	    	let fetchedBooks = result.GoodreadsResponse.search[0].results[0].work;
			dispatch(onSearchAsync(fetchedBooks)); 
		});
	  });
	}
	// return abc =>{
	// 	fetch(`/search?q=${val}&&key=Xx8furlXCo3dtnLttdgL7w`)
	// 	.then(res=>{
	// 		console.log(res)
	// 		parseString(res.data, function (err, result) {
	// 		    console.log(result.GoodreadsResponse.search[0].results[0].work);
	// 		});
	// 	})
	// }
}
