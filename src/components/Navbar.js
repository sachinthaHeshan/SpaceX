import logo from '../images/logo.png';
export const Navbar = () => {
  return(
    <div className="h-16 flex items-center bg-black">
      <img className="pl-6" alt="SapceX Logo" src={logo}/>
    </div>
  )
}