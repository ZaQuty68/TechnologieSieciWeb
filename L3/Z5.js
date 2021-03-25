let szablon =
	  '<table border="{border}">' +
	  '  <tr><td>{first}</td><td>{last}</td></tr>' +
	  '</table>';

var regex = new RegExp ('(<table border="{)([a-z]*)(}">\\s\\s<tr><td>{)([a-z]*)(}</td><td>{)([a-z]*)(}</td></tr>*</table>)','i');

let dane = {
    first: "Jan",
    last:  "Kowalski",
    pesel: "97042176329"
};


const podstaw = function(dane){
    var result = regex.exec(szablon);
    
    if(typeof dane.border === 'undefined')
        dane.border=result[2];

    if(typeof dane.first === 'undefined')
        dane.first=result[4];

    if(typeof dane.last === 'undefined')
        dane.last=result[6];

    return this.replace(regex, "$1" + dane.border  + "$3" + dane.first +"$5" + dane.last + "$7");

} 

	String.prototype.podstaw=podstaw;
 	console.log(szablon.podstaw(dane));