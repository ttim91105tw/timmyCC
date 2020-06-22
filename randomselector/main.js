/*window.onload=function(){
    //document.write("Hello JavaSrit!!!")
};
*/


$(document).ready(function(){
    $("input").click(function(){
        let numberOfListItem=$("#choices li").length;
        let randomChildNumber=Math.floor(Math.random()*numberOfListItem);

        //alert("Hi");
       // $("H1").text("Hello");
       $("#randomresult").text($("#choices li").eq(randomChildNumber).text());
       $("#randompic").attr("src",image[randomChildNumber])
    });
});