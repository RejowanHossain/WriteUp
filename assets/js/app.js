const textValue = document.getElementById('textValue');
const uppercaseBtn = document.getElementById('uppercase');
const lowercaseBtn = document.getElementById('lowercase');
const removeSpaceBtn = document.getElementById('removeSpace');
const points = document.getElementById('points');
const deleteBtn = document.getElementById('delete');
const previewText = document.getElementById('previewText');

let word = document.getElementById('words');
let readingTime = document.getElementById('readingTime');

let toggleSwitch = document.getElementById('flexSwitchCheckChecked')

// helper function for controlling the meta info such as word count and reading time
const helper = (variant) => {
    if (textValue.value === '') {
        variant.innerHTML = 0;
    }
}

// function for making uppercase
const uppercase = () => {
    let newValue = textValue.value.toUpperCase();
    previewText.innerHTML = newValue
}


// function for making lowercase
const lowercase = () => {
    let newValue = textValue.value.toLowerCase();
    previewText.innerHTML = newValue
}


// function for removing extra space
const removespace = () => {
    let newValue = textValue.value.split(/[ ]+/);
    previewText.innerHTML = newValue.join();
}

// function for converting the text into a list
const listView = () => {
    let textareaSentence = textValue.value;

    var stringArray = new Array();
    stringArray = textareaSentence.split(" ");

    var outputString = "<ul>";
    for (i = 0; i < stringArray.length; i++) {
        outputString += "<li>" + stringArray[i] + "</li>";
    }
    outputString += "</ul>";
    previewText.innerHTML = outputString;
}

// function for deleting text
const deleteText = () => {
    textValue.value = '';
    previewText.innerHTML = '';

    helper(word);
    helper(readingTime);
}

// function for getting the input value while wrtting
const write = () => {
    let textLength = textValue.value.split(' ').length
    word.innerHTML = textLength;

    readingTime.innerHTML = 0.08 * textLength;

    helper(word);
    helper(readingTime);
}

// removing the value on page refresh
window.addEventListener('DOMContentLoaded', () => {
    textValue.value = ''
})

// toggle dark/light mode
toggleSwitch.addEventListener('change', () => {
    var element = document.body;
    element.classList.toggle("dark-mode")



})

textValue.addEventListener('input', write);
uppercaseBtn.addEventListener('click', uppercase);
lowercaseBtn.addEventListener('click', lowercase);
removeSpaceBtn.addEventListener('click', removespace);
points.addEventListener('click', listView);
deleteBtn.addEventListener('click', deleteText);