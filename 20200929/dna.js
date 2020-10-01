const dnaFun=(dna)=>{
const dna=dna.toUppCase()
let complement='';
for(item of dna){
  if(item==='A'){
   complement+='T'
  }else if(item==='T'){
    complement+='A'
  }else if(item==='C'){
    complement+='G'
  }else if(item==='G'){
    complement+='C'
  }
}
return complement
}
