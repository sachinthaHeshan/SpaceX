import { Link } from 'react-router-dom';
import { FC, useRef, useEffect } from 'react'

interface PopupSearchBoxProps{
  value:string,
  onchange:any,
  setVisible:any
  }

export const PopupSearchBox:FC<PopupSearchBoxProps> = ({value, onchange, setVisible}) =>{

  const searchFeild = useRef<any>();

  const hidePopupBox = () => {
    setTimeout(() => {
      setVisible(false)
    },150)
  };

  useEffect(() => {
    searchFeild.current.focus();
    searchFeild.current.addEventListener('focusout', hidePopupBox);
  },[])

  return(
    <div 
      className="fixed text-white rounded-full mt-1 p-2 pr-4 sm:hidden shadow-2xl top-16 bg-gray-700 "
      style={{
        left:"calc(50% - calc(50% - 25px) + 20px)",
        width:"calc(100% - 100px)"
      }}
    >
      <div className="whitespace-nowrap ">
        <input
          ref={searchFeild}
          type="text" 
          value={value} 
          onChange={(event) => onchange(event.target.value)}
          className="rounded-full outline-none bg-gray-700 p-1 pl-4 border-4 border-gray-500 focus:border-gray-500"
          placeholder="Search ..."
          style={{width:"calc(100% - 50px)"}}
        />

        <Link to={"/1/"+value}>
          <i className="fa fa-search ml-3 text-xl rounded-full bg-gray-500 px-2 py-1"/>
        </Link>
      </div>
    </div>
  )
}