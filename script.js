window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        loader.parentNode.removeChild(loader);
    });
});

document.getElementById('downloadButton').addEventListener('click', function() {
    var link = document.createElement('a');
    var filePath = './assets/Aquino.Resume.pdf'; // Path to your file
    link.href = filePath;

    // Extract the file name from the file path
    var fileName = filePath.split('/').pop();
    link.download = fileName; // Set the download attribute to the file name

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
