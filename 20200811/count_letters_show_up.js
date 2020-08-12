let getStrings=(s)=>{

let obj={};
for(let item of s){

  obj[item]=obj[item]+1||1
}
return obj

}

console.log(getStrings("hhdkj"))
