
fetch('https://crudcrud.com/api/de16b323fd164c95a0aa60cc8cfe776c/users' )
.then((response)=>{
    response.json()
    .then((response)=>{
        console.log(response)

        response.map((item)=>{
            
            let addstudent=document.getElementById('allstudent')
            let liTag=document.createElement('li');
            let div1=document.createElement('div');
            let div2=document.createElement('div');
            let div3=document.createElement('div');

            let deleteBtn=document.createElement('button');
                      deleteBtn.innerText='Delete';
                      deleteBtn.setAttribute('id',item._id)
                      deleteBtn.addEventListener('click',function(){deleteUser(item._id)});

                      let editBtn=document.createElement('button');
                      editBtn.innerHTML='Edit';
                      editBtn.setAttribute('id',item._id)
                    //   editBtn.addEventListener('click',editUser);
            
            div1.innerHTML=item.name
            div2.innerHTML=item.mobile
            div3.innerHTML=item.address
            liTag.appendChild(div1)
            liTag.appendChild(div2)
            liTag.appendChild(div3)
            liTag.appendChild(deleteBtn)
            liTag.appendChild(editBtn)
            addstudent.appendChild(liTag)
            
        })
    })
})
.catch((err)=>{
    console.log(err);
})




function adduser(event){
    event.preventDefault()
    let nameEle=document.getElementById('name');
    let nameVal=nameEle.value
    let phoneEle=document.getElementById('phone')
    let phoneVal=phoneEle.value;
    let addressEle=document.getElementById('address')
    let addressVal=addressEle.value

    

    fetch('https://crudcrud.com/api/de16b323fd164c95a0aa60cc8cfe776c/users', {
       method:"POST",
          body: JSON.stringify({
            name:nameVal,
            mobile:phoneVal,
            address:addressVal
          }),
          headers: { 
            "Content-type": "application/json; charset=UTF-8"
        }
          
        })
          .then((response) => response.json())
          .then((json) => {
            
                      let addstudent=document.getElementById('allstudent')
                      let liTag=document.createElement('li');
                      let div1=document.createElement('div');
                      let div2=document.createElement('div');
                      let div3=document.createElement('div');
                      
                      div1.innerHTML=json.name
                      div2.innerHTML=json.mobile
                      div3.innerHTML=json.address
                      

                      let deleteBtn=document.createElement('button');
                      deleteBtn.innerText='Delete';
                      deleteBtn.setAttribute('id',json._id)
                      deleteBtn.addEventListener('click',function(){deleteUser(json._id)});

                      let editBtn=document.createElement('button');
                      editBtn.innerHTML='Edit';
                      editBtn.setAttribute('id',json._id)
                    //   editBtn.addEventListener('click',editUser);
                      

                      liTag.appendChild(div1)
                      liTag.appendChild(div2)
                      liTag.appendChild(div3)
                      liTag.appendChild(deleteBtn)
                      liTag.appendChild(editBtn)
                      addstudent.appendChild(liTag)
                      })
                      .catch((error)=>{
                    console.log(error)
                      })  
}


function deleteUser(id){

    fetch(`https://crudcrud.com/api/de16b323fd164c95a0aa60cc8cfe776c/users/${id}`, {
        method:"DELETE",
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        }
})
.then((response)=>{
    response.json();
    // let deleteId=document.getElementById('item._id');
    // let deleteParenEle=deleteId.parentElement;
    // console.log(deleteParenEle)
    // deleteParenEle.remove();
})
.catch((err)=>{
    console.log(err)
})
}