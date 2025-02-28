import Logo2 from "../utils/Images/Logo2.png"

const Header = () => {
  return (
    <div className = " absolute flex  z-10">
     
      <img src = {Logo2} alt = "Logo " className = " w-20 h-20 rounded-full m-4"/> 
        <h3 className="font-bold text-3xl text-red-600 mt-8 mb- 4 pr-2 pl-2" >Movies-GPT</h3>
      {/* <h3 className="font-extrabold text-4xl text-white mt-6 mb-6 px-6 py-3 
               bg-gradient-to-r from-red-600 via-orange-500 to-black 
               rounded-2xl shadow-2xl border-2 border-red-500 
               tracking-wide uppercase animate-pulse">
  Movies-GPT
</h3> */}
      </div>
  )
}

export default Header