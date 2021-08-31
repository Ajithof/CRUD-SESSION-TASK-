var url='https://612e9620d11e5c001755863f.mockapi.io/use';
//read
function getdata(){
    fetch(url)
    .then((result) => result.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));
}
//create -> http method should be post
function createdata(){
    let data={
        name:"guvi geek",
        email:"geek@guvi.in"
    };

    fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-type":"application/json; charset=UTF-8",


        },
    }).then((result)=>result.json())
    .then((data) => {
        console.log(data)
    }).catch((err) => {
       console.log(err); 
    });
}
createdata();
getdata();
//update:->http method is put
function updatedata(){
    let data={
        name:"john doe",
        email:"john@guvi.in"
    };
    fetch(url+"/10",{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-type":"application/json; charset=UTF-8",


        },
    }).then((result)=>result.json())
    .then((data) => {
        console.log(data)
    }).catch((err) => {
       console.log(err); 
    });
    
}

//delete-> deleteing the specific data HTTP: DELETE
function deletedata(){
    fetch(url+"/5",{
        method:"DELETE",
       
    }).then((result)=>result.json())
    .then((data) => {
        console.log(data)
    }).catch((err) => {
       console.log(err); 
    });
}
 deletedata();