import assets from "../assets/imges";


const Social_media_links = () => {
  return (
    <div className='hidden lg:flex fixed z-10 flex-col top-[35%] left-0'>
    <ul>
      <li className='dark:bg-gray_dark_500 w-[160px] border-y border-r hover:border-y border-gray-400 h-12 text-gray-900 flex justify-between px-4 items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-Gray_100 shadow-xl'>
        <a
        target="_blank"
          className='flex justify-between items-center w-full'
          href='https://www.linkedin.com/in/hamza-abd-rahim-42bb93267/'
        >
          Linkedin <img src={assets.linkedin} className="h-5" alt="linkedin" />
        </a>
      </li>
      <li className='dark:bg-gray_dark_500 w-[160px] border-b border-r hover:border-y border-gray-400 h-12 text-gray-900 flex justify-between px-4 items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-Gray_100 shadow-xl'>
        <a
        target="_blank"
          className='flex justify-between items-center w-full'
          href='https://github.com/ess-maker'
        >
          Github <img src={assets.github} className="h-5" alt="github" />
        </a>
      </li>
      <li className='dark:bg-gray_dark_500 w-[160px] border-b border-r hover:border-y border-gray-400 h-12 text-gray-900 flex justify-between px-4 items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-Gray_100 shadow-xl'>
        <a
        target="_blank"
          className='flex justify-between items-center w-full'
          href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHvpDhMXQlhJCSpvfvrPhbtBfGZJRtNtlPHfCGFWvVxFhRKLxJQmpcgNRphdsBvdKHxwLKr'
        >
          Email <img src={assets.mail} className="h-5" alt="mail" />
        </a>
      </li>
    </ul>
  </div>
  )
}

export default Social_media_links