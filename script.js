//your code here
// Input array of band names
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd', 'Queen'];

// Function to remove articles and return a modified string
function removeArticles(name) {
    return name.replace(/^(a|an|the) /i, '').trim();
}

// Remove articles and sort the band names
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the ul element with id "band"
const bandList = document.getElementById('band');

// Create list items and append them to the ul
bandNames.forEach((bandName) => {
    const listItem = document.createElement('li');
    listItem.textContent = bandName;
    bandList.appendChild(listItem);
});