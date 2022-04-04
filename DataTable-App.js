$(document).ready(function() {
    let table = $('#attendance').DataTable({
        "responsive" : true
    });

    async function getData(){
        const retriveData = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonFile = await retriveData.json();
            for (let i = 0; i < jsonFile.length; i++) {
                table.row.add([
                    jsonFile[i].id,
                    jsonFile[i].title,
                    jsonFile[i].userId,
                    jsonFile[i].body]).draw(true)     
            }
            document.querySelectorAll('.table-Box')[0].style.transform = 'scale(1,1)'                
            document.querySelectorAll('.table-Box')[0].style.width = '90%'                
    }
    getData();
});

function showPics(ele){
    document.getElementById("pics-box").style.transform = "scale(1,1)"
}
function hidePics(ele){
    document.getElementById("pics-box").style.transform = "scale(0,0)";
}