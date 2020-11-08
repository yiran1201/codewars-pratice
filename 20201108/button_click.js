
const toggle=()=>{
const [isActive,setIsactive]=useState(true)
return (
 <button onClick={()=>setIsactive(!isActive)}>
{isActive?'ON':'OFF'}

 </button>
)

}
