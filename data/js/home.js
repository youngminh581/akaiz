let maxImage = 10;
let i = 0;

function generateLoli(){
    if (i < maxImage){
        let image = document.createElement('img');
        image.id = 'img'
        let a = document.createElement('a');
        let div = document.getElementById('flex-loli-gen');
        image.src = `data/img/${i}.png`
        a.href = image.src;
        a.target = '_blank';
        image.width = 280;
        image.height = 250;
        div.appendChild(a);
        a.appendChild(image);
        i++;
    } else if (i == maxImage) alert(`We just have ${i} pictures, we will update more, thanks`)
  
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

}
function clearLoli(){
    let div = document.getElementById('flex-loli-gen');
    removeAllChildNodes(div);
    i = 0;
}
