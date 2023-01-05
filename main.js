var myData=[];
var links=document.querySelectorAll(".nav-link");
console.log(links);
getData("pizza");
    for(var i=0;i<links.length;i++)
    { 
       links[i].addEventListener("click",function(e){
        getData(e.target.innerHTML);
       })

    }
function getData(meal){
 var httpRequest=new XMLHttpRequest();
 httpRequest.open("get",`https://forkify-api.herokuapp.com/api/v2/recipes?search=${meal}`);
 httpRequest.send();
httpRequest.addEventListener("readystatechange",function()
{
    if(httpRequest.readyState==4)
    {
                myData=JSON.parse(httpRequest.response).data.recipes;
                console.log(myData);
                displayData();   
    }
            
});
}
function displayData()
    {
        console.log("Hello");
    var data=``;
    for(var i=0;i<myData.length;i++)
    {
        console.log("Hello");
         data+=`<div class='col-md-4'>
                <div class="food">
                <h2>${myData[i].title}</h2>
                <img src="${myData[i].image_url}" class="img-fluid w-100 h-50">
                </div>
                </div>`
    }

 console.log(data);
 document.getElementById("postRow").innerHTML=data;
    }