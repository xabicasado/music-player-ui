export function NextIcon(props: { colorStyle: string }) {
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
        <path d="M21.5 4.5C21.5 3.94772 21.0523 3.5 20.5 3.5H19.5C18.9477 3.5 18.5 3.94772 18.5 4.5V19.5C18.5 20.0523 18.9477 20.5 19.5 20.5H20.5C21.0523 20.5 21.5 20.0523 21.5 19.5V4.5Z"></path>
        <path d="M3 5.86854C3 4.27115 4.78029 3.31836 6.1094 4.20444L15.3066 10.3359C16.4941 11.1276 16.4941 12.8725 15.3066 13.6641L6.1094 19.7956C4.78029 20.6817 3 19.7289 3 18.1315V5.86854Z"></path>
      </g>
    </svg>
  )
}
