//Code snippet taken from https://www.geeksforgeeks.org/javascript/how-to-make-dark-mode-for-websites-using-html-css-javascript/

document.addEventListener('DOMContentLoaded',()=>{
	
const toggleButton = document.getElementById('theme');
const body = document.body;
body.classList.add('light-mode');	

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
    } else {
        body.classList.replace('dark-mode', 'light-mode');
    }
});
});
