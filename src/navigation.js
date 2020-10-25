// Navigation
// To add more top level buttons in comment the out commented code below and in public/index.html
const btnEx1 = document.getElementById('btnEx1');
const btnEx2 = document.getElementById('btnEx2');
const btnEx3 = document.getElementById('btnEx3');

const sectionEx1 = document.getElementById('1');
const sectionEx2 = document.getElementById('2');
const sectionEx3 = document.getElementById('3');
// const sectionEx4 = document.getElementById('4');
let s1Content = sectionEx1.innerHTML;
let s2Content = sectionEx2.innerHTML;
let s3Content = sectionEx3.innerHTML;

const saveContent= (id)=>{
    s1Content = sectionEx1.innerHTML;
    s2Content = sectionEx2.innerHTML;
    s3Content = sectionEx3.innerHTML;
}
// const s4Content = sectionEx4.innerHTML;

removeContent();

btnEx1.onclick = (e)=>{
    e.preventDefault();
    removeContent();
    insertContent(1);
}

btnEx2.onclick = (e)=>{
    e.preventDefault();
    removeContent();
    insertContent(2);
}

btnEx3.onclick = (e)=>{
    e.preventDefault();
    removeContent();
    insertContent(3);
}
// btnEx4.onclick = (e)=>{
    //     e.preventDefault();
    //     removeContent();
    //     insertContent(4);
    // }
    
    
function removeContent(){
    s1Content = sectionEx1.innerHTML? sectionEx1.innerHTML:s1Content; 
    sectionEx1.innerHTML = '';
    s2Content = sectionEx2.innerHTML? sectionEx2.innerHTML:s2Content; 
    sectionEx2.innerHTML = '';
    s3Content = sectionEx3.innerHTML? sectionEx3.innerHTML:s3Content; 
    sectionEx3.innerHTML = '';
    // sectionEx4.innerHTML = '';
}
export default removeContent;

function insertContent(id){
    if(id === 1)
        sectionEx1.innerHTML = s1Content;
    if(id === 2)
        sectionEx2.innerHTML = s2Content;
    if(id === 3)
        sectionEx3.innerHTML = s3Content;
    // if(id === 4)
    //     sectionEx3.innerHTML = s3Content;
}

