document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded... ");
    let search = document.getElementsByClassName("btn");
    search[0].onclick = function () {
        console.log("Search function activated");
        fetch("http://localhost/info2180-lab4/superheroes.php")
            .then(response => {
                if (response.ok) {
                    return response.text()
                }
                else {
                    return Promise.reject("An error has occured!")
                }
            })
            .then(data => {
                alert(data);
                console.log(data);
            })
            .catch(error => {
                console.log("There was an error:" + error);
            });
        }
    }
)
