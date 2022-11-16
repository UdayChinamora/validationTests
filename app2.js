/*
WDV321 Advanced Javascript 

TDD - Example

Define the process and assumptions 
	Validate the zip code field of a form
	Return a customized string message for errors
	Output will be used to display an error message to user on the form as they work
	Will only accept 5 digit zip codes

Our expectations:

Input				Expected Output

a					"Please enter a number"
fredd				"Please enter a number"		in general no string data allowed
" "					"Please enter a number"
-					"Please enter a number"
0					"Please enter a five digit zip code"
00					"Please enter a five digit zip code"
00000				"Not a valid zip code"
501					"Please enter a five digit zip code"
00501				"Valid"
<00500				"Not a valid zip code"
>99950				"Not a valid zip code"
1					"Please enter a five digit zip code"
123					"Please enter five digits"			
null				"Please enter a number"
t3st				"Please enter a five digit zip code"
"INSERT INTO"		"Please enter a number"
4-5-2				"Please enter a number"
+++++				"Please enter a number"
1234A				""Please enter a number"
undefined			"Please enter a number"


*/





module.exports = {

    isUSAZipCode: function ( str) {
        var validZipTest = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
       
		if(!validZipTest.test(str))
					
        {	
         return "Not a valid zip code";
          						
        }
   
     else if (str.length = 5){

        return str;
        }
       

    }
};

module.exports = {
 validateCode:function (inCode) {
    var range = /^[0-9]*$/;
    var validZipTest = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    var lastCharacter = /^[a-z](.*[a-z])?$/igm;
   

   
       if (!Number(inCode) || (inCode % 1 != 0))			
        {
             return "Please enter a number";
        }
        
    else {
          if (inCode.toString().length < 5 ) 
        {	
             return "Please enter a five digit zip code";
        }

        else {
            if (inCode.toString().length > 5 ) 
          {	
               return "Not a valid zip code";
          }
        else{
            {	
         return "Valid"
        }
        }
 }
}
 }
};
