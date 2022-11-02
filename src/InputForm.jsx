function InputForm(props) {
  const id = "myId";

  
  return (
    <div className="inputForm">
      <label className="font-mono text-lg" htmlFor={id}>{props.label}First Name</label>
      <input className="border-2 border-black h-[30px]  w-[300px]" placeholder="...type here"  id={id} type={props.type} />
      <label className="font-mono text-lg" htmlFor={id}>{props.label}Last Name</label>
      <input className="border-2 border-black h-[30px]  w-[300px]" placeholder="...type here"  id={id} type={props.type} />
      <label className="font-mono text-lg" htmlFor={id}>{props.label}Email</label>
      <input className="border-2 border-black h-[30px]  w-[300px]" placeholder="...type here" id={id} type={props.type} />
    </div>
  );
}

export default InputForm;
