const Button = (props) => {
  const { children, variant} = props 
  return (
    <button className={`h-10 px-6 ${variant} hover:bg-blue-700 text-white font-semibold rounded`}>
      {children}
    </button>
  )
}

export default Button