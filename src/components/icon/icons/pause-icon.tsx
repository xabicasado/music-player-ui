export function PauseIcon(props: { colorStyle: string }) {
  const { colorStyle } = props

  return (
    <svg
      viewBox="0 0 24 24"
      className={`${colorStyle}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M6 3C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H9C10.1046 21 11 20.1046 11 19V5C11 3.89543 10.1046 3 9 3H6Z"></path>
        <path d="M15 3C13.8954 3 13 3.89543 13 5V19C13 20.1046 13.8954 21 15 21H18C19.1046 21 20 20.1046 20 19V5C20 3.89543 19.1046 3 18 3H15Z"></path>
      </g>
    </svg>
  )
}
