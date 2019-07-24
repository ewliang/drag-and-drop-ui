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
    event.preventDefault();
}

// Drag & Drop Event Handlers
dragDropArea.ondragenter = function(event) {
    console.log("ENTER");
    dragDropArea.style.borderColor = "#f19066";
    event.preventDefault();
}

dragDropArea.ondragover = function(event) {
    console.log("OVER");
    dragDropArea.style.borderColor = "#f19066";
    event.preventDefault();
}
dragDropArea.ondrop = function(event) {
    console.log("DROP");
    dragDropArea.style.borderColor = "#f3a683";
    var dt = event.dataTransfer;
    var files = dt.files;
    for(let i = 0; i < files.length; i++) {
        console.log(files[i]);
    }
    event.preventDefault();
}
dragDropArea.ondragleave = function(event) {
    console.log("BYE");
    dragDropArea.style.borderColor = "#f3a683";
    event.preventDefault();
}
dragDropArea.ondragend = function(event) {
    console.log("END");
    dragDropArea.style.borderColor = "#f3a683";
    event.preventDefault();
}