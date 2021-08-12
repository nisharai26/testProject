document.querySelector('form').addEventListener('submit',handlePlace);
document.querySelector('ul').addEventListener('addNewPlace',addNewPlaces);

function handlePlace(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != ''){
     addNewPlaces(input.value);
    input.value = '';
    }
}

function addNewPlaces(addPlace){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = 
    `<span class = 'addPlace'>${addPlace}</span>`;
    li.classList.add('add-new-places');
    ul.appendChild(li);
}