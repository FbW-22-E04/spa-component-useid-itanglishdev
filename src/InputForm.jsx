
function InputForm(props) {
  // const id = "myId";

  
  // console.log(id);

  return (
    <div className="inputForm">
      <label className="font-mono text-lg" htmlFor={`${props.id}+${props.label}`}>{props.label}</label>
      <input className="border-2 border-black h-[30px]  w-[300px]" placeholder="...type here"  
      id={`${props.id}+${props.label}`} type={props.type} />    
    </div>
  );
}

export default InputForm;
