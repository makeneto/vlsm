// Validação do IP
function validateIP(ip) {
    const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipPattern.test(ip);
}

// Mudar o tema
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Copyright-Year
function year() {
    const currentYear = new Date()
    const year = currentYear.getFullYear()

    const copyright = document.createElement('p')
    copyright.textContent = `© ${year} makeneDev, Inc.`
    copyright.className = 'copyright'
    document.querySelector('#copyright').appendChild(copyright)
}
year() 
