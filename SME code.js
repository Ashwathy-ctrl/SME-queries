var api1 = ["Custom" , "SmartHome" , "Content" , "ISP" ,"CCP" ,"APL/Display" , "Notifications", "Reminders","Device Setting" , "Geolocation","MSK/VSK","Amazon Pay","Person ID","Limit Acess","SLU","Security","Timers","HTML"];
var $ = window.jQuery;
$(document).ready(function(){
    
    var apiBox = $("<div>").addClass("api-box");
    var apiName = $("<h4>");
    for(i=0;i<api1.length;i++){
        var apiBox = $("<div>").addClass("api-box");
        apiBox.attr("id" , "box" + (i+1))
        var apiName = $("<h4>");
        apiName.html(api1[i]);
        apiBox.append(apiName);
        $("#api-contain").append(apiBox);
    }
    $("#box1").click(function(){
        window.open("https://quip-amazon.com/HBSlA88oe5tA/Custom-API-Queries#YbK9CASEw68");
    })
    $("#box2").click(function(){
        window.open("https://quip-amazon.com/P3QjAPhVbln8/SmartHome-API-Queries#WFQ9CAU5c9I");
    })
    $("#box3").click(function(){
        window.open("https://quip-amazon.com/PmacA2IxScrQ/Content-API-Queries#bCd9CA1HoOP");
    })
})