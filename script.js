window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response){
        response.json().then( function(json){
            let container = document.getElementById("container")
            container.innerHTML = `
                <div class = "astronaut">
                    <div class = "bio">
                        <h3>${json[0].firstName} ${json[0].lastName}</h3>
                        <ul>
                            <li>Hours In Space: ${json[0].hoursInSpace}</li>
                            <li>Active: ${json[0].active}</li>
                        </ul>
                    </div>
                </div>
            `
        })
    })
})