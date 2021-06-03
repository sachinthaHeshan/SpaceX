import { Link } from 'react-router-dom';
import { FC, useRef, useEffect } from 'react'

interface PopupSearchBarProps{
  value:string,
  onchange:any,
  setVisible:any
  }

export const PopupSearchBar:FC<PopupSearchBarProps> = ({value, onchange, setVisible}) =>{

  const searchFeild = useRef<any>();

  const hidePopupBox = () => {
    setTimeout(() => {
      setVisible(false)
    })
  };

  useEffect(() => {
    searchFeild.current.focus();
    searchFeild.current.addEventListener('focusout', hidePopupBox);
  },[])

  return(
    <div 
      className="fixed rounded-full mt-1 p-2 pr-4 sm:hidden top-16 bg-gray-700 opacity-95"
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
          className="rounded-full outline-none p-1 pl-4 border-4 focus:border-blue-400 border-blue-200"
          placeholder="search..."
          style={{width:"calc(100% - 50px)"}}
        />

        <Link to={"/1/"+value}>
          <i className="fa fa-search text-white ml-3 text-2xl"/>
        </Link>
      </div>
    </div>
  )
}