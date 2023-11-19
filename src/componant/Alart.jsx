import Button from "./commen/Button"
import useClickOutside from "../hooks/useclickoutside"

const Alart = ({toggolshowalrt , showalrt}) => {
  const Ref = useClickOutside(toggolshowalrt)
  return (
    <>
    {showalrt && <div x-show="showModal" class="fixed inset-0 transition-opacity" aria-hidden="true">
    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
  </div>}
    {showalrt && <div
    data-te-animation-init
    data-te-animation-start="manually"
    data-te-animation="[fade-in_1s_ease-in-out]"
    ref={Ref}
     className={` flex  rounded-lg 
     items-center justify-center bg-gray-100 ${showalrt? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' :''}`}>
  <div className="rounded-lg bg-gray-50 px-16 py-14">
    <div className="flex justify-center">
      <div className="rounded-full bg-green-200 p-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
      </div>
    </div>
    <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">Congratuation!!!</h3>
    <p className="w-[230px] text-center mb-10 font-normal text-gray-600">Your Masseg have been taken and is being attended to Me</p>
    <Button apistate={'not_loding'} value='Close' onClick={toggolshowalrt} type='button' />
  </div>
</div>}
</>
  )
}

export default Alart