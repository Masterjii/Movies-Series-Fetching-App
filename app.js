

// 20th Nov. 45 miuntes

let input = document.querySelector('input');
let btn = document.querySelector('.butt');
let list = document.querySelector('#list');



btn.addEventListener('click', function(){
    let searchText = input.value;
    let data = fetchData(searchText);
    input.value ="";
})


function fetchData(searchText){
    // fetch()
    // axios
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(response){
        // console.log(response.data)
        manipulatDom(response.data);
    })
}


function manipulatDom(allthedata){
    for(let data of allthedata){
        let figure = document.createElement('figure');
        figure.innerHTML = `
        <img src=${data.show.image.medium} />
        <h2> Name: ${data.show.name}</h2>
        <h5> Language: ${data.show.language}</h5>
        `
        list.appendChild(figure);
    }
}











