import { useState } from "react"

const Login = () => {
  const [isSignInForm,setSignInForm] = useState(true)
  const signUpForm = () => {
    setSignInForm(!isSignInForm)
  }
  return (
    <div>
    <div className = "absolute"><img src = "https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"/></div>
    
      <form className = "absolute bg-black w-4/12 p-12 my-36 left-0 right-0 mx-auto text-white bg-black/50 rounded-lg">
      <h1 className = "font-bold text-xl py-4">{ isSignInForm ? "Sign-In" : "Sign-Up"}</h1>
      {!isSignInForm&&(<input type = "test" placeholder="Username" className = "my-4 p-4 w-full bg-slate-500 rounded-lg h-15"/>)}
        <input type = "text" placeholder = "Email or Mobile Number" className = "my-4 p-4 w-full bg-slate-500 rounded-lg h-15"/>
        <input type = "password" placeholder = " Password" className = "my-4 p-4 w-full bg-slate-500 rounded-lg h-15" />
        {!isSignInForm&&(<input type = "password" placeholder="Confirm Password" className = "my-4 p-4 w-full bg-slate-500 rounded-lg h-15"/>)}
         <button className = "my-6 p-2 w-full h-10 bg-red-600 rounded-lg">{isSignInForm? "Sign-In":"Sign-Up"}</button>
         <p  className = " cursor-pointer"onClick={signUpForm}>{isSignInForm ? "New to Movies-GPT? Sign up now." : "Already have an account? Sign in."}</p>
      </form>
    </div>
  
  )
}

export default Login