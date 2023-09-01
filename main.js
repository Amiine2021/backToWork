let container =  document.createElement('div');
document.body.appendChild(container);
let name = ["hassan","khalid", "amine"];
let ages = [" 22 years old"," 44 years old"," 16 years old"] 

console.log(container);


function element(name, ages){
    // create element
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');
    // create Content
    
    let head = document.createTextNode(name)
    let ageContent = document.createTextNode(ages)
    img.src = 'images/img1.jpeg';
    // append child 
    title.appendChild(head);
    age.appendChild(ageContent);

    //
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    //
    container.appendChild(card)
    console.log(container)
    // style 
    card.style.textAlign = "center";
    img.style.width = "100%"
    card.style.display = "inline-block";
    card.style.color = "#FFFFFF";
    card.style.background = "black";
    card.style.width = "200px";
    card.style.padding = "10px"
    card.style.margin = "5px"
    


}
for(let i = 0 ; i < 3 ; i++ ){
    element(name[i],ages[i])
} 
