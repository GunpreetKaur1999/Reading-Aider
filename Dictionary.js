 var welcome=document.getElementById("Welcome");
var formsubmit=document.getElementById("mainFrameOne");
var jumbobutton=document.getElementById("getForm")

jumbobutton.onclick=function(){
    formsubmit.style.display="block";
    welcome.style.display="none";
}
   function mean(){
   var x=document.getElementsByTagName("span");
for(var i=0;i<x.length;i++)
{
    x[i].onclick=function(e){
        console.log(e.target.textContent);
    $.get("https://dictionaryapi.com/api/v3/references/collegiate/json/"+e.target.textContent+"?key=47f46428-758b-4024-b56b-f6caa7cd6552", function(data, status){
      //console.log("Data: " + data + "\nStatus: " + status);
      var meaning=data;
      var returning=meaning[0]["shortdef"];
      
      pushmeaning(e.target.textContent,returning);
      returning.forEach(element => {
          console.log(element);
          
      });
    });
  
}
}
   }
function myFunction3(str) {
    var result=str.split("\n");
    
    //console.log(res);
    str="";
    for(var j=0;j<result.length;j++)
    {
        var res = result[j].split(" ");
        for(var i=0;i<res.length;i++)
    {
        str+="<span>"+res[i]+"</span>"+" "
        
    }
    str+="<br>";
    }
    
    return str;
    
  }

function myFunction() { 
	document.getElementById("mainFrameOne").style.display="none"; 
    var article_heading=document.getElementById("exampleFormControlInput1").value;
    
    //console.log(article_heading);
    var article_content=document.getElementById("exampleFormControlTextarea1").value;
    //console.log(article_content);
    myFunctionDisplay();
    mean();

    

}

function myFunctionDisplay() { 
    //document.getElementById("mainFrameOne").style.display="none"; 
    
    var article_heading=document.getElementById("exampleFormControlInput1").value;
    article_heading=myFunction3(article_heading);
    document.getElementById("headinggg").innerHTML=article_heading;
    //console.log(article_heading);
    var article_content=document.getElementById("exampleFormControlTextarea1").value;
    article_content=myFunction3(article_content);
    document.getElementById("content").innerHTML=article_content;
    //console.log(article_content);

}


function pushmeaning(word,wordmeaning) { 
 var meanings=document.getElementById("meaning").innerHTML;
 word="<h6>"+word+"</h6>" 
 str="";
 for(var i=0;i<wordmeaning.length;i++)
{
    str+="<p>"+wordmeaning[i]+"</p>";
}
meanings=word+str+meanings;
document.getElementById("meaning").innerHTML=meanings;
}

