import assets from "../assets/imges"
import styles from "../style"

const hamza = `<HaMza />`

const Footer = () => {
  return (
    <div className={`${styles.flexBetween} px-10 py-4 container`}>
        <div>
    <h1 className="text-3xl not-italic font-bold leading-9 tracking-[-0.0375rem] font-Inter dark:text-white text-Gray_900 ">{hamza}</h1>
        </div>
    <div className="inline-flex gap-4">
        <a target="_blank"  className = {`p-3 duration-200 ease-linear hover:scale-125 rounded-full bg-Gray_100 shadow-xl`} href="https://github.com/ess-maker"><img src={assets.github} alt="github" className="w-6 h-6" /></a>
        <a target="_blank"  className = {`p-3 duration-200 ease-linear hover:scale-125 rounded-full bg-Gray_100 shadow-xl`} href="https://www.linkedin.com/in/hamza-abd-rahim-42bb93267/"><img src={assets.linkedin} alt="linkedin" className="w-6 h-6" /></a>
    </div>

    </div>
  )
}

export default Footer