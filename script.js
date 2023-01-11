//your code here
var textArea = document.getElementById('evaluatedText');
var count = document.getElementById('letterCount');

textArea.addEventListener('keydown', function(){
    let text = textArea.value;

    count.innerText = text.length;
})
