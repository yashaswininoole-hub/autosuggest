//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
var api_url="https://autosuggest-backend.onrender.com/api/autosuggest";
var searchBar=document.getElementById("search-bar");
var searchsuggestions=document.getElementById("search-suggestions");
//get user typed data


searchBar.addEventListener("input",function(){
    var query=searchBar.value.trim();//reads valeues enterd in search bar
    console.log(query)
    fetchsuggestion(query);
})
function fetchsuggestion(query){
    var fullurl=api_url+"?q="+ query+"&weighted=true&algorithm=trie&limit=8";
    fetch(fullurl)
    .then (function(res){
        return res.json();
    })
    .then(function(data){
        showsuggestions(data);
    })
    .catch(function(err){
        console.log("error" +err);
    })

}

function showsuggestions(data){
    var values=data.results;
    if(data.count==0){
        searchsuggestions.innerHTML="<div>no matchings found</div>"
    }
    else{
        var htmlstring="";
        for(var i=0;i<values.length;i++){
            htmlstring="<div><span class='suggestion-item>"+values[i].text+"<span><span class='suggestion-weight'>"+values[i].weight+"</span></div>";
        }
        searchsuggestions.innerHTML=htmlstring;
    }
}