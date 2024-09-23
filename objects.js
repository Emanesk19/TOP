let user = {
    "name" : "Jhon",
    "surname": "Smith",

}

user.name ="Pete"

delete user.name

function isEmpty(obj){
    if( isEmpty(obj)){
        return true
    }
    return false
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let result = 0;
  for(let sal in salaries){
    result += salaries[sal]
  }
  console.log(result);
  
  // before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
for(let i in menu){
    if(typeof menu[i] == 'number' ){
        menu[i] *=2
    }
    
}  