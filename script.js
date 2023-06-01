
let bookConatiner = document.getElementById("book-main");
console.log(bookConatiner)


async function FetchBookCollection(){
   const response = await fetch(`https://www.anapioficeandfire.com/api/books`, {
    method:"GET"
   })

   const data = await response.json();
    data.forEach((ele)=>{
        const bookData = {
            ...ele,
            name : ele.name,
            isbn: ele.isbn,
            numberOfPages: ele.numberOfPages,
        }
        console.log(bookData)
        BookCollection(bookData)
    })
}



function BookCollection({name, isbn, numberOfPages}){
    console.log("Bookcollection called")
    bookConatiner.innerHTML += `
    <div class="book-card">
    <h3>${name}</h3>
    <p>${isbn}<p>
    <p>${numberOfPages}</p>
     <p>actorname1</p>
     <p>actorname1</p>
     <p>actorname1</p>
     <p>actorname1</p>
     <p>actorname1</p>
    <button className="actor-btn">Actors Name</button>
    </<div>
    `
}

const actorBtn = document.querySelector(".actor-btn");
actorBtn.addEventListener("click", async()=>{

})

FetchBookCollection()