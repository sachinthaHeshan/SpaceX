import { Link } from 'react-router-dom';

export const PaginationBar = ({currentPage, dataCount}) => {

  let prevBtn = [];
  let PageBtnMin2 = []
  let PageBtnMin1 = []
  let currentPageBtn = []
  let PageBtnPlus1 = []
  let PageBtnPlus2 = []
  let nextBtn = [];

  let pageCount;

  if( dataCount%10 ){
      pageCount = Math.trunc(+dataCount/10)+1
    }
  else{ 
    pageCount = Math.trunc(+dataCount/10)
  }

  if(currentPage <= 2 ){
    PageBtnMin2.push("hidden")
  }
  
  if(currentPage <= 1){
    prevBtn.push("hidden");
    PageBtnMin1.push("hidden")
    currentPageBtn.push("rounded-l-full")
  }
  else if(currentPage >= pageCount){
    currentPageBtn.push("rounded-r-full")
    PageBtnPlus1.push("hidden")
    nextBtn.push("hidden");
  }

  if(currentPage >= pageCount-1){
    PageBtnPlus2.push("hidden")
  }

 
  return(
    <div className="flex justify-center mb-10">
      <Link 
        className={"p-3 bg-gray-500 rounded-l-full " + prevBtn.join(" ")} 
        to={String(+currentPage-1)}
      >
        <i  className="fa fa-angle-left"></i>
      </Link>

      <Link 
        className={"p-3 bg-gray-500 " + PageBtnMin2.join(" ")}
        to={String(+currentPage-2)}
      >
        {+currentPage-2}
      </Link>

      <Link 
        className={"p-3 bg-gray-500 " + PageBtnMin1.join(" ")}
        to={String(+currentPage-1)}
      >
        {+currentPage-1}
      </Link>

      <Link 
        className={"p-3 bg-gray-500  border border-gray-400 " + currentPageBtn.join(" ")}
        to="1"
      >
        {currentPage}
      </Link>

      <Link 
        className={"p-3 bg-gray-500 " + PageBtnPlus1.join(" ")}
        to={String(+currentPage+1)}
      >
        {+currentPage+1}
      </Link>

      <Link 
        className={"p-3 bg-gray-500 " + PageBtnPlus2.join(" ")}
        to={String(+currentPage+2)}
      >
        {+currentPage+2}
      </Link>

      <Link 
        className={"p-3 bg-gray-500 rounded-r-full " + nextBtn.join(" ")} 
        to={String(+currentPage+1)}
      >
        <i className="fa fa-angle-right "></i>
      </Link>
    </div>
  )
}