const Label = (props) => {
   const { htmlFor, children }= props 
   return (
    <label className="block text-sm font-semibold text-gray-800" htmlFor={htmlFor}>
                {children}
    </label>
   ) 
}

export default Label