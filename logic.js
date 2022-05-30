let btn=document.getElementById('inputBtn');
let btndelete=document.getElementById('inputBtnd');
let search=document.getElementById('search');
let deleteBtns=document.getElementsByClassName('deleteBtns');
MakeList(JSON.parse(localStorage.getItem('notes')));
btndelete.addEventListener('click',()=>{
    localStorage.clear();
    MakeList(JSON.parse(localStorage.getItem('notes')));

});
btn.addEventListener('click',()=>{
    let inputText=document.getElementById('inputText');
    let notes=localStorage.getItem("notes");
    if(notes===null){
     notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(inputText.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    inputText.value="";
    MakeList(notesObj);
});
function MakeList(notesObj){
    let html="";
    let listitems=document.getElementById('items');
    if(notesObj===null){
        html="please add some notes using above box";
    }
    else{
    notesObj.forEach((element,index)=> {
    html+=`<div class="noteCard card mx-2 my-2" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Note ${index+1}</h5>
      <p class="card-text">${element}</p>
      <button class="btn btn-primary deleteBtns" id=${index} onClick="deleteNotes(this.id)">Delete Post</button>
    </div>
    </div>`;
});
}
listitems.innerHTML=html;
}
function deleteNotes(index){
    let notes=localStorage.getItem('notes');
    if(notes===null){
        notesObj=[]
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    MakeList(notesObj);
}
search.addEventListener("input",()=>{
   let noteCard=document.getElementsByClassName('noteCard');
   let txt=search.value;
   Array.from(noteCard).forEach((element,index)=>{
       let cardTxt=document.getElementsByTagName("p")[index];
       let txtVal=cardTxt.innerText;
       if(txtVal.includes(txt)){
           element.style.display='block';
       }
       else{
           element.style.display='none';
       }
   });
});

