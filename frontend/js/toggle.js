var users=[
    {
        "name": "john doe",
        "gender":"male",
        "images":"../images/john.png"
    },
    {
        "name": "jane doe",
        "gender":"female",
        "images":"../images/jane.png"
    }
]

var currId=0;
function toggle(){
    currId=(currId+1)%2;

    var user=users[currId];
    document.getElementById("user-img").src=user.images;

    //to update name and gender
    document.getElementById("user-name").innerText=user.name
    document.getElementById("user-gender").innerText=user.gender

}