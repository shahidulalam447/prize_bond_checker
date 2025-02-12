// Predefined list of data
// const dataList = [10,20,30,40,50,60,70,80,90,100];

// Function to check if the input matches any item in the list
function checkMatch() {
    const userInput = document.getElementById('userInput').value;
    const messageElement = document.getElementById('message');

    // Convert input to a number
    const inputNumber = parseFloat(userInput);

    // Check if the input is a valid number
    if (isNaN(inputNumber)) {
        messageElement.textContent = "Please enter a valid number.";
        messageElement.style.color = "red";
        return;
    }

    // Check if the input matches any item in the list
    if (dataList.includes(inputNumber)) {
        messageElement.textContent = "The number is a match!";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "The number is not a match.";
        messageElement.style.color = "red";
    }
}

// Function to toggle between dark and light mode
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}