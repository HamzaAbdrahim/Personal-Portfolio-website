import styles from "../style"

const Inbutton = (prop) => {
  return (
    <button onClick={prop.onClick} className={`${styles.flexCenter}  ${prop.styles}  bg-Gray_900 w-40 h-12`}><a target="_blank" download={"Hamza_aabd_rahim_Resume"} className={`${styles.Body2} ${prop.styles} text-[#F9FAFB]`} href={prop.link}>{prop.name}</a></button>
  )
}

export default Inbutton