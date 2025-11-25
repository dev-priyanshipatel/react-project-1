const Button = ({text, icon}) => {
  return (
    <button className="btn px-4 py-2 rounded-4 fw-semibold">
        {icon}
        {text}
    </button>
  )
}

export default Button