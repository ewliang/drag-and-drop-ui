var dragDropArea = document.getElementById('dragDropArea');
var imageUploader = document.getElementById('myImages');
var showFilesButton = document.getElementById('showFilesBtn');

// Valid File Type Checker
var validFileTypes = [
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/png',
    'image/bmp'
];

function isValidFileType(file) {
    return validFileTypes.includes(file.type) ? true : false;
}

// Debug - Show Uploaded Files Button
showFilesButton.onclick = function(event) {
    for(let i = 0; i < imageUploader.files.length; i++) {
        console.log(imageUploader.files[i].name + " Valid: " + isValidFileType(imageUploader.files[i]));
    }
}


// Click Upload
dragDropArea.onclick = function(event) {
    event.dataTransfer.setData();
    event.preventDefault();
}

// Drag & Drop Event Handlers
dragDropArea.ondragenter = function(event) {
    console.log("ENTER");
    event.preventDefault();
    dragDropArea.style.borderColor = "#1296d4";
    event.preventDefault();
}

dragDropArea.ondragover = function(event) {
    console.log("OVER");
    event.preventDefault();
    dragDropArea.style.borderColor = "#1296d4";
    event.preventDefault();
}
dragDropArea.ondrop = function(event) {
    console.log("DROP");
    event.preventDefault();
    imageUploader.click();
    dragDropArea.style.borderColor = "#eeeeee";
    event.preventDefault();
}
dragDropArea.ondragleave = function(event) {
    console.log("BYE");
    event.preventDefault();
    dragDropArea.style.borderColor = "#eeeeee";
    event.preventDefault();
}
dragDropArea.ondragend = function(event) {
    console.log("END");
    event.preventDefault();
    dragDropArea.style.borderColor = "#eeeeee";
    event.preventDefault();
}