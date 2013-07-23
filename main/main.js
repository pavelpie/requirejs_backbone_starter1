define(["jquery"], function($) {
    $('body').html("<div id=\"testId\">Hello World<div>");  
    
    
      
    $('body').on("click", "#testId", function(){
    console.log ("hurra");   
    
    require(["modul1"], function(m1){
        $('body').html(m1.tekst); 
        
    }); 
      
    });      
});