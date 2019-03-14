import axios from "axios";
var parseString = require('xml2js').parseString;
var xml;

export const onSearchAsync = (val)=>{
	return { type: "FIRE_SEARCH", value: val }
}


export const onSearch = (val)=>{
	return dispatch =>{
	axios.get(`/search?q=${val}&&key=Xx8furlXCo3dtnLttdgL7w`)
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
