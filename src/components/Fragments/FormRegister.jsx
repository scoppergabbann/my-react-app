import InputForm from "../Elements/Input"
import Button from "../Elements/Button"


const FormRegister = () => {
    return (
        <form action={""}>
            <div className="mt-4 mb-6">
              <InputForm label="Full Name" type="text" name="fullname" placeholder="Inser your name" />
            </div>
            <div className="mt-4 mb-6">
              <InputForm label="Email" type="email" name="email" placeholder="Inser your email" />
            </div>
             <div className="mb-6">
              <InputForm label="Password" type="password" name="password" placeholder="*****" />
            </div>
             <div className="mb-6">
              <InputForm label="Confirm Password" type="password" name="confirm-password" placeholder="*****" />
            </div>
            <Button variant='bg-blue-600 w-full'>Register</Button>
          </form>
    )
}

export default FormRegister