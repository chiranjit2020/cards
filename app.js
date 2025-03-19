const log = console.log;

const API = "https://picsum.photos/v2/list";


const cards =  document.querySelector('.cards');
const searchInput = document.querySelector('#search');

const sortBtn = document.getElementById('sortBtn');
let isAscending = true; // Track sorting order

let imageData = []; //Store fetched data globally


//FETCH
// fetch(API)
// .then( response => response.json() )
// .then( data => {
//     imageData = data // Save the data for filtering....
//     renderImages(data)
// })
// .catch( error => console.log(`Something went wrong: ${error}`) )


let pageInfo = document.getElementById('page-info');
let prevBtn= document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let currentPage = 1;
let limit = 10;

prevBtn.disabled = true;

async function fetchImages(page){
    try{
        const response = await fetch(`${API}?page=${page}&limit=${limit}`);
        if(!response.ok) throw new Error(`Error Code: ${response.status}`)
        console.log(response)
        const data = await response.json();
        imageData = data;
        renderImages(data)
        updateButtonStates()
    }catch(error){
        console.log(`Something went wrong: ${error}`)
    }
}

// Add function to manage button states
function updateButtonStates() {
    prevBtn.disabled = (currentPage === 1);
    // You might want to add a condition for nextBtn as well if there's a maximum page
    // nextBtn.disabled = (currentPage === maxPages); // Uncomment and define maxPages if needed
}

fetchImages(currentPage);

prevBtn.addEventListener("click", () => {
    if(currentPage > 1) {
        currentPage--
    }
    pageInfo.innerText = `Page: ${currentPage}`;
    fetchImages(currentPage);
})

nextBtn.addEventListener('click', () =>{
    prevBtn.disabled = false
    currentPage++;
    pageInfo.innerText = `Page: ${currentPage}`
    fetchImages(currentPage);
})






//RENDER IMAGES
function renderImages(data){
    cards.innerHTML = "Loading...";

    const fragment = document.createDocumentFragment();

    data.forEach( ({ id, author, url, download_url, height, width }) => {

        const li = document.createElement('li');
        li.className = "card-item";
        li.id = id;

        li.innerHTML += `<figure>
                    <img src="${download_url}" alt="" class="img-fluid" loading="lazy" />
                    <span class="card-id">ID: ${++id}</span>
                </figure>
                <h2>Author: ${author}</h2>
                <p>Size: ${width}px X ${height}px</p>
                <a href="${url}" class="btn" target="_blank">download</a>
        `;

        fragment.appendChild(li); //rendering...
    })
    cards.innerHTML = "";
    cards.appendChild(fragment)
}


//SEARCH FUNCTION
// searchInput.addEventListener('input', () => {
//     const searchValue = searchInput.value.toLowerCase();

//     const filteredData = imageData.filter( item => item.author.toLowerCase().includes(searchValue) )

//     renderImages(filteredData);
//     console.log(filteredData)
// })


// Debouncing

let timeout; 

searchInput.addEventListener('input', () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {

        const searchValue = searchInput.value.toLowerCase();

        let filteredData = [];

        //for loop
        for(let i = 0; i < imageData.length; i++){
            const author = imageData[i].author.toLowerCase();

            if(author.includes(searchValue)){
                filteredData.push(imageData[i])
            }
        }
        renderImages(filteredData);
        console.log(filteredData)

    }, 300)
})


// Sort function
function sortData(data) {
    return data.slice().sort((a, b) => {
        return isAscending ? a.author.localeCompare(b.author) : b.author.localeCompare(a.author);
    });
}

// Sorting button event
sortBtn.addEventListener('click', () => {
    isAscending = !isAscending; // Toggle sorting order
    sortBtn.innerHTML = `<span>Sort</span> ${isAscending ? 'A-Z' : 'Z-A'}`;
    renderImages(sortData(imageData));
});


























/*
fetch(API)
.then( response => response.json() )
.then( data => {

    data.map((item)=>{

        // const id = item.id;
        // const author = item.author;
        // const url = item.url;
        // const download_url = item.download_url;
        // const height = item.height;
        // const width = item.width;

        const {id, author, url, download_url, height, width} = item;


        cards.innerHTML += `<li class="card-item" id="${id}">
                <figure>
                    <img src="${download_url}" alt="" class="img-fluid" loading="lazy" />
                </figure>
                <h2>Author: ${author}</h2>
                <p>Size: ${width}px X ${height}px</p>
                <a href="${url}" class="btn" target="_blank">download</a>
            </li>`

        console.log(item)

    })

})
.catch( error => console.log(`Something went wrong: ${error}`))
*/