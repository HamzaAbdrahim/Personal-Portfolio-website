const Toggle_switch = ({onClick , theme}) => {
  return (

<div className="flex flex-row justify-between toggle">
<label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
    <div className="relative">
    <input type="checkbox" onChange={onClick} name="dark-mode" id="dark-toggle" className="checkbox hidden" />
    <div className={`block border-[1px]  w-10 h-6 rounded-full ${theme === 'dark' ? 'border-white' : 'border-gray-900'}`} ></div>
    <div className={`${theme === 'dark' ? 'bg-white' : 'bg-gray-800' } dot absolute left-1 top-1  w-4 h-4 rounded-full transition`}></div>
    </div>
    <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} ml-3  font-medium`}>
    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
    </div>
</label>
</div>

  )
}

export default Toggle_switch