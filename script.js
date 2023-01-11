//your code here
var textArea = document.getElementById('evaluatedText');
var count = document.getElementById('letterCount');

textArea.addEventListener('keyup', function(){
    let text = textArea.value;
    text = removeSpaces(text);

    count.innerText = text.length;
})


function removeSpaces(string) { return string.split(' ').join(''); }
