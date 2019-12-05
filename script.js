let buildSkillsList = function(index){
    let skillsList = ""
    for (let j = 0; j < (index.length - 1); j++){
        
        skillsList += index[j]+", "        
    }
    skillsList += index[index.length - 1]
    return skillsList
}
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response){
        response.json().then( function(json){
            json.sort(function(a, b){return b.hoursInSpace - a.hoursInSpace})
            let container = document.getElementById("container")
            for (let i = 0; i < json.length; i++) {
                container.innerHTML += `
                    <div class = "astronaut">
                        <div class = "bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours In Space: ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
                                <li>Skills: ${buildSkillsList(json[i].skills)}
                            </ul>
                        </div>
                        <img class = "avatar" src = ${json[i].picture}></img>
                    </div>
                `
            }
        })
    })
})