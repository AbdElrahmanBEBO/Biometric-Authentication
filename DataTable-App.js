$(document).ready(function() {
    let table = $('#attendance').DataTable({
        "responsive" : true
    });

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(jsonFile => {
        for (let i = 0; i < jsonFile.length; i++) {
            table.row.add([
                jsonFile[i].id,
                jsonFile[i].userId,
                jsonFile[i].title,
                jsonFile[i].body]).draw(false);        
        }
        
    })
});

function showPics(ele){
    document.getElementById("pics-box").style.transform = "scale(1,1)"
}
function hidePics(ele){
    document.getElementById("pics-box").style.transform = "scale(0,0)";
}