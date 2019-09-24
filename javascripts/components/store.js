const printToDom = (divId, toPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = toPrint;
}



const makeStore = () => {
    const domString = 'hi new store';
    printToDom('store-container', domString);
}


// need to export this function to main.js
// export default {makeStore: makeStore} --- like a key value pair

export default {makeStore};