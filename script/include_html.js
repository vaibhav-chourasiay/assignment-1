
function includeHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML file:', error));
}

// Include navbar, sidbar and footer
includeHTML('navbar', 'navbar.html');
includeHTML("sidebar-section", "sidebar.html");
includeHTML("footer-section", "footer.html");


// includeHTML('section-footer', 'footer.html');