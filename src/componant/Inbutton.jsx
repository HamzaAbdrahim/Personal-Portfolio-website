import styles from "../style"

const Inbutton = (prop) => {
  return (
    <button onClick={prop.onClick} className={`${styles.flexCenter}  ${prop.styles} duration-200 ease-in-out hover:scale-125 active:bg-black bg-Gray_900 w-40 h-12`}><a target="_blank" className={`${styles.Body2} ${prop.styles} text-[#F9FAFB]`} href={prop.link}>{prop.name}</a></button>
  )
}

export default Inbutton