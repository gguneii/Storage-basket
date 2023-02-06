// let btn=document.querySelector('.btn')
// //storage string kimi saxlanilir ona gore obyekti stringe cevirmek lazimdir.

// if(localStorage.getItem('users')=== null){
//     localStorage.setItem('users', JSON.stringify([]))
// }
 
// btn.onclick = function(){
//     let username=document.querySelector("#name").value
//     let email=document.querySelector("#email").value
//     let password=document.querySelector("#password").value
  
//      let basket= JSON.parse(localStorage.getItem('users'))
//      basket.push({
//           Name: username,
//           Email: email,
//           Password: password

//      })
    
//      localStorage.setItem('users',JSON.stringify(basket))
//      getUsers()
    
//     }
//     function getUsers(){
//         let users= JSON.parse(localStorage.getItem('users'))

//         let html='';
//         for(let user of users){
//             html += `
//             <ul>
//                     <li>${user.Name}</li>
//                     <li>${user.Email}</li>
                  
//                 </ul>
            
//             `
//         }
//        document.getElementById('list').innerHTML=html
//     }
//     getUsers()


if(localStorage.getItem('products')===null){
    localStorage.setItem('products',JSON.stringify([]))
}
let buttons=document.querySelectorAll('.btn')

for(let btn of buttons){
    btn.onclick=function(e){
       e.preventDefault();
       let pr_id = e.target.parentElement.parentElement.id;
       let pr_name=e.target.previousElementSibling.previousElementSibling.innerHTML;
       let pr_price = e.target.previousElementSibling.innerHTML;
       let pr_image = e.target.parentElement.previousElementSibling.src


       let basket=JSON.parse(localStorage.getItem('products'))
       
       let exist_prod = basket.find(pr => pr.Id == pr_id)
   if(exist_prod ===undefined){
    basket.push({
        Id: pr_id,
        Name: pr_name,
        Price: pr_price,
        Image: pr_image,
        Count: 1
       })
       document.querySelector('.alert p').innerHTML='Added to basket'
       document.querySelector('.alert').style.right='20px'
   }
   else{
    exist_prod.Count +=1;
    document.querySelector('.alert p').innerHTML='You have already it'
       document.querySelector('.alert').style.right='20px'
       document.querySelector('.alert').style.backgroundColor='red'
   }
      
       localStorage.setItem('products',JSON.stringify(basket))
       setTimeout(() => {
        document.querySelector('.alert').style.right='-500px'
       }, 1500);
       BasketCount()
    }
}

function BasketCount(){
    let basket=JSON.parse(localStorage.getItem('products'));
    document.getElementById('count').innerHTML = basket.length;
}
BasketCount()