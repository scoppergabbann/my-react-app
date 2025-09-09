const Input = (props) => {
    const  { type, placeholder, name } = props
    return (
        <input
            className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            type={type}
            placeholder={placeholder}
            name={name}
            id={name}>
        </input>
    )
}

export default Input