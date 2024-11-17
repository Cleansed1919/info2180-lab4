document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded... ");
    let searchbtn = document.getElementsByClassName("btn");
    let search =searchbtn[0];
    search.onclick = function () {
        console.log("Search function activated");
        let input = document.getElementsByClassName("searchbar")[0].value;
        console.log("input:" + input);
        fetch(`http://localhost/info2180-lab4/superheroes.php?query=${encodeURIComponent(input)}`, {
            method:"GET",
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            else {
                return Promise.reject("An error has occured!");
            }
        })
        .then(data => {
            let result = document.getElementById("result");
            result.innerHTML = data;
        })
        .catch(error => {
            console.log("There was an error:" + error);
        });
    }
    }
)
