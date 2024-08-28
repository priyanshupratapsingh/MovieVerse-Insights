let apiKey = "839c17b1"; //Use your own omDB API key from their website else they will block you.

let searchIp = document.querySelector(".ip")
let searchBtn = document.querySelector(".btn")

const getdata = async (movie) => {
    try {         //If there is no error then this block will execute
        let fetchData = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${movie}`);

        let jsonData = await fetchData.json();       //converting fetched data into json file
        console.log(jsonData);


        let desc = document.createElement("div");   // creating an div element/tag.
        desc.classList.add("movieCard");            // creating a div class name movieCard.
        document.querySelector(".body").innerHTML = "";     //Clearing the body tag (its history)
        desc.innerHTML = `
            <div class="img">
                <img src="${jsonData.Poster}" alt="img.jpg">
            </div>
            <div class="dis">
                <div class="body-head">
                    <h1>${jsonData.Title}</h1>
                </div>
                <p>Released: <span>${jsonData.Released}</span></p>
                <p>Imdb Rating: <span>${jsonData.Ratings[0].Value}</span></p>
                <p>Runtime: <span>${jsonData.Runtime}</span></p>
                <p>Genre: <span>${jsonData.Genre}</span></p>
                <p>Writers: <span>${jsonData.Writer}</span></p>
                <p>Actors:<span> ${jsonData.Actors}</span></p>
            </div>
    
            <div class="dis2">
                <h1>Description</h1>
                <p>${jsonData.Plot}</p>
            </div>
                
                `

        document.querySelector(".body").appendChild(desc);     // adding div tag(.movieCard) into HTML .body
    }

    catch (error) {      //If the movie name entered was wrong or not in json data then it will catch err
        document.querySelector(".body").innerHTML = "<h1>Error: write a valid movie name</h1>"
    }
}

searchBtn.addEventListener("click", () => {
    let movieName = searchIp.value;   //it will give the value inside input tag.
    if (movieName != "") {    // If moviename is not empty
        getdata(movieName);   //calling the function

        searchIp.value = "";   // it will clear the value inside input tag after ts use
    }
    else {
        document.querySelector(".body").innerHTML = "<h1>Write a movie name in Search Box</h1>";
    }
})

document.addEventListener("keypress", (event) =>{
    let keypressed = event.key
    // below code is same as click EventListener
    if (keypressed == "Enter") {
        let movieName = searchIp.value;   
        if (movieName != "") {    
            getdata(movieName);   
    
            searchIp.value = "";  
        }
        else {
            document.querySelector(".body").innerHTML = "<h1>Write a movie name in Search Box</h1>";
        }
    }
    // same click EventListener ended.
})
//---------------------------------------------below code is for Homepage movie sections
var numberOfDrumButtons = document.querySelectorAll(".c").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".c ")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerText;
        console.log(buttonInnerHTML);
        getdata(buttonInnerHTML)

    });

}

//---------------------------------------------This below code is only for Fantastic Four.
document.querySelector(".body-img").addEventListener("click", async () => {
    let name1 = document.querySelector(".one").innerText;

    let fetchData = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=839c17b1&t=${"Fantastic Four"}`);

    let jsonData = await fetchData.json();       //converting fetched data into json file


    let desc = document.createElement("div");   // creating an div element/tag.
    desc.classList.add("homeCard");            // creating a div class name movieCard.
    document.querySelector(".body").innerHTML = "";     //Clearing the body tag (its history)
    desc.innerHTML = `
        <div class="img">
            <img src="${jsonData.Poster}" alt="img.jpg">
        </div>
        <div class="dis">
            <h2>${name1}</h2><br>
            <p>Release Date: <span>27 June, 2025</span></p>
            <p>Genre: <span>${jsonData.Genre}</span></p>
            <p>Director: <span>Matt Shakman</span></p>
            <p>Writers: <span>Josh Friedman, Jeff Kaplan, Stan Lee</span></p>
            <p>Actors: <span>Pedro Pascal, Vanessa Kirby, Joseph Quinn</span></p>
        </div>

        <div class="dis2">
            <h1>Description</h1>
            <p>The upcoming Marvel movie "The Fantastic Four: First Steps" will be a reboot of the iconic superhero team. It will take place in a 1960s alternative reality with a retro-futuristic New York City where they  learn that they aren't the only super-powered beings in the universe when they square off against the planet-eating Galactus.</p>
        </div>
            
            `

    document.querySelector(".body").appendChild(desc);     // adding div tag(.movieCard) into HTML .body
})
