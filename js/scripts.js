/*
    Title: Drag & Drop UI
    File: scripts.js
    Author: Eric Liang
    Author URI: https://www.eric-liang.com
    Repository: https://github.com/ewliang/file-uploader-ui
    License: MIT License
*/

var dragDropArea = document.getElementById('dragDropArea');
var imageUploader = document.getElementById('imageUploader');
var showFilesButton = document.getElementById('showFilesBtn');
var imagePreviewer = document.getElementById('imagePreviewer');
var imageFileListPreviewer = document.getElementById('imageFileListPreview');

var uploads = []; // Keep track of file uploads via drag & drop and file system upload

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
    for(let i = 0; i < uploads.length; i++) {
        console.log(uploads[i]);
    }
}

// Click Upload
dragDropArea.onclick = function() {
    imageUploader.click();
}

// Click Upload - Append Uploads From File System Upload
imageUploader.onchange = function() {
    for(var i = 0; i < imageUploader.files.length; i++) {
        uploads.push(imageUploader.files[i]);
        displayImagePreview(imageUploader.files[i]);
        displayImageList(imageUploader.files[i]);
    }
}

// Drag & Drop Upload - Event Handlers for Drag & Drop Upload
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
        uploads.push(files[i]);
        displayImagePreview(files[i]);
        displayImageList(files[i]);
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

// Display Preview of Uploaded Image
function displayImagePreview(file) {
    // Read Drag & Dropped File Content
    var reader = new FileReader();
    reader.readAsDataURL(file);
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

// Display List of Uploaded Images
function displayImageList(file) {
    var newImageFileItem = document.createElement('li');
    newImageFileItem.textContent = file.name + '<br>' + file.size;
    imageFileListPreviewer.appendChild(newImageFileItem);
}