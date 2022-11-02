
function InputForm({id,label,type}) {
  // const id = "myId";

  
  // console.log(id);

  return (
    <div className="inputForm">
      <label className="font-mono text-lg" htmlFor={`${id}+${label}`}>{label}</label>
      <input className="border-2 border-black h-[30px]  w-[300px]" placeholder="...type here"  
      id={`${id}+${label}`} type={type} />    
    </div>
  );
}

export default InputForm;
