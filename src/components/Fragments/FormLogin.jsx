import InputForm from "../Elements/Input"
import Button from "../Elements/Button"


const FormLogin = () => {
    return (
        <form action={""}>
            <div className="mt-4 mb-6">
              <InputForm label="Email" type="email" name="email" placeholder="Enter your email" />
              
            </div>
             <div className="mb-6">
              <InputForm label="Password" type="password" name="password" placeholder="*****" />

            </div>
            <Button variant='bg-blue-600 w-full'>Login</Button>
          </form>
    )
}

export default FormLogin