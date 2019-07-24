var dragDropArea = document.getElementById('dragDropArea');
var imageUploader = document.getElementById('imageUploader');
var showFilesButton = document.getElementById('showFilesBtn');

var imagePreviewer = document.getElementById('imagePreviewer');

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
showFilesButton.onclick = function() {
    for(let i = 0; i < imageUploader.files.length; i++) {
        console.log(imageUploader.files[i].name + " Valid: " + isValidFileType(imageUploader.files[i]));
    }
}


// Click Upload
dragDropArea.onclick = function() {
    imageUploader.click();
}

// Drag & Drop Event Handlers
dragDropArea.ondragenter = function(event) {
    dragDropArea.style.borderColor = "#f19066";
    event.preventDefault();
}

dragDropArea.ondragover = function(event) {
    dragDropArea.style.borderColor = "#f19066";
    event.preventDefault();
}

dragDropArea.ondrop = function(event) {
    dragDropArea.style.borderColor = "#f3a683";
    var dt = event.dataTransfer;
    var files = dt.files;
    for(let i = 0; i < files.length; i++) {
        // Read Drag & Dropped File Content
        var reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = function(event) {
            // Create Image Element to Display Preview
            var img = new Image();
            img.src = event.target.result;
            img.onload = function() {
                dragDropArea.appendChild(img);
                var listItem = document.createElement('li');
                listItem.appendChild(img);
                imagePreviewer.appendChild(listItem);
            }
        }
    }
    event.preventDefault();
}

dragDropArea.ondragleave = function(event) {
    dragDropArea.style.borderColor = "#f3a683";
    event.preventDefault();
}

dragDropArea.ondragend = function(event) {
    dragDropArea.style.borderColor = "#f3a683";
    event.preventDefault();
}