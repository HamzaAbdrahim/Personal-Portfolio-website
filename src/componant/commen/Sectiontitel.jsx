import styles from "../../style"

const Sectiontitel = ({titel}) => {
  return (
    <h1 className={`${styles.heading3} px-5 py-1.5 !text-[1.400rem] bg-[#E5E7EB] rounded-xl leading-8 xl:leading-9 xl:tracking-[-0.0375rem] tracking-[-0.03rem] mb-4 w-fit mx-auto dark:bg-gray_dark_200 dark:text-white text-Gray_600`}>{titel}</h1>

  )
}

export default Sectiontitel