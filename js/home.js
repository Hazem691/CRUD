var sitename = document.getElementById("siteName") ;

var siteUrl = document.getElementById("siteURL") ;

var siteList ; 

if(localStorage.getItem('siteList') === null){
    siteList = [];
}
else{
    siteList = JSON.parse(localStorage.getItem('siteList')) ;
    displaydata(siteList);
}

function createsite(){

    if(validateName()===true && validateURL()===true){
        siteinfo = {
            name : sitename.value ,
            urle : siteUrl.value,
        };
    
        siteList.push(siteinfo) ;
        localStorage.setItem('siteList',JSON.stringify(siteList)) ;
        cleardata() ;
        displaydata(siteList) ;

    }

   
   
}


function cleardata(){
    sitename.value =" " ;
    siteUrl.value = " " ;
}


function displaydata(siteList){
    var cartona = " " ;

   
    for(var i = 0 ; i < siteList.length ; i++){
        cartona+= `
        
        <tr>
        <td>${i+1}</td>
        <td>${siteList[i].name}</td>
        <td><button class="btn btn-warning" onclick="visitingwebsite('${siteList[i].urle}')"><span><i class="fa-solid fa-eye"></i></span><span>Visit</span></button></td>
        <td><button class="btn btn-danger" onclick="deletedata(${i})"><span><i class="fa-solid fa-trash"></i></span><span>Delete</span></button></td>
    </tr>
        
        
        
        ` ;
    }

    document.getElementById("data").innerHTML = cartona;

   

    
}

function deletedata(index){
    
    siteList.splice(index,1);
    localStorage.setItem('siteList',JSON.stringify(siteList)) ;
    displaydata(siteList) ;
}


function validateName(){
    var regex = /^[a-zA-Z]{3,12}$/;
    if(regex.test(sitename.value)){

        document.getElementById("siteName").classList.replace('is-invalid','is-valid');


        return true ;
        

    }
    else{

        document.getElementById("siteName").classList.add('is-invalid');
       
    }
}

function validateURL(){
    var regex = /^((http:\/\/))(www\.)[a-zA-Z]{3,20}\.com$/;
    if(regex.test(siteUrl.value)){

        document.getElementById("siteURL").classList.replace('is-invalid','is-valid');
        document.getElementById("error-msg").classList.replace('d-block','d-none') ;
        return true ;
        

    }
    else{

        document.getElementById("siteURL").classList.add('is-invalid');
        document.getElementById("error-msg").classList.replace('d-none','d-block');


       

    }
}

function visitingwebsite(link){
    window.open(link, '_blank');
}