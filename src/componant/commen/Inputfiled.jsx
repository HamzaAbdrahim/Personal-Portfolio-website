
const Inputfiled = ({name,type,label,value,placeholder,error,onChange}) => {
  return (
    <div>
    <label htmlFor={name}className= {`${error.length > 0 ? 'text-[#ff5555]' : 'text-gray-700'} block text-base font-medium `}>
      {error.length > 0 ? error : label}</label>
    <input onChange={onChange} value={value} placeholder={placeholder} type={type} id={name} name={name} 
    className= {`${error.length > 0 ? 'border-[#ff5555] outline-[#ff5555]' : 'focus:border-[#000]'} mt-2 w-full rounded-md border border-[#e0e0e0]  py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md transition-colors duration-300`}/>
  </div>
  )
}

export default Inputfiled