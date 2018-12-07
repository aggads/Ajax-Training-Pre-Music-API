
const resultSearch = async function () {
        let select  = document.querySelector("input")
        try {
                let response = await fetch(`http://www.omdbapi.com/?t=${select.value}&apikey=d6b85052`);

                if (response.ok) {

                        let data = await response.json();
                        console.log(data);
                        console.log('---------');
                        console.log(response.status);
                        console.log('---------');
                        console.log(data.value);
                        console.log('---------');
                        console.log(response);
                        console.log('---------');
                        console.log(select.value)
                        console.log('---------');
                        //--------------------------------------------------
                        // let title = data[0].title;
                        let blb = document.querySelector(".results");
                        blb.innerHTML = `
                                        <td> Title : ${data.Title}</li>
                                        <li> Year : ${data.Year}</li>
                                        <li> Plot : ${data.Plot}</li>
                                        </br>
                                        <div class="container-img">
                                        <img src="${data.Poster}" width = '250px'>
                                        </div>

                `
                        // --------------------------------------------------
                        // data.map(movie =>{

                        //         blb.innerHTML = `
                        //         <li>${movie.title}</li>`
                        // })
                        //--------------------------------------------------
                } else {
                        console.error('Something went wrong', response.status);
                }
        } catch(e) {
                alert(e);
                console.log(e);
        }
        // console.log(select.value)
}

document.querySelector(".submit").addEventListener("click", resultSearch)





// const resultSearch = function(){
//         let select  = document.querySelector("input");
//         fetch(`http://www.omdbapi.com/?t=${select.value}&apikey=d6b85052`)
//         .then(response => response.json())
//         .then(response =>{
//                 // let data = response.json();
//                 for (i in response) {
//                         console.log(response);
//                         let blabla = document.querySelector("#results");
//                         if (select.value == response[i]){
//                                 data.map(movie =>{
//                                         blabla.innerHTML = `<li>${movie.title}</li>`
//                                 })
//                         }
//                 }
//         })

//         .catch(function(e){
//                 console.log(e);
//         })
// }

// document.querySelector(".submit").addEventListener("click", resultSearch)