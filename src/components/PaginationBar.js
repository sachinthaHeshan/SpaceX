import { Link } from 'react-router-dom';

export const PaginationBar = ({ currentPage, dataCount }) => {

  const paginationBar = {
    prevBtn : ["p-3", "bg-gray-500", "rounded-l-full"],
    prevPageBtnMin1 : ["p-3", "bg-gray-500"],
    prevPageBtn : ["p-3", "bg-gray-500"],
    currentPageBtn : ["p-3", "bg-gray-500", "border", "border-gray-400"],
    nextPageBtn : ["p-3", "bg-gray-500"],
    nextPagePlus1 : ["p-3", "bg-gray-500"],
    nextBtn : ["p-3", "bg-gray-500", "rounded-r-full"],
  }

  const pageCount = dataCount%10 ? Math.trunc(+dataCount/10)+1 : Math.trunc(+dataCount/10);

  if(currentPage <= 2 ){
    paginationBar.prevPageBtnMin1.push("hidden")
  }
  if(currentPage <= 1){
    paginationBar.prevBtn.push("hidden");
    paginationBar.prevPageBtn.push("hidden")
    paginationBar.currentPageBtn.push("rounded-l-full")
  }
  if(currentPage >= pageCount){
    paginationBar.currentPageBtn.push("rounded-r-full")
    paginationBar.nextPageBtn.push("hidden")
    paginationBar.nextBtn.push("hidden");
  }
  if(currentPage >= pageCount-1){
    paginationBar.nextPagePlus1.push("hidden")
  }

  return(
    <div className="flex justify-center mb-10">
      <Link className={paginationBar.prevBtn.join(" ")} to={String(+currentPage-1)}>
        <i  className="fa fa-angle-left"></i>
      </Link>
      <Link className={paginationBar.prevPageBtnMin1.join(" ")} to={String(+currentPage-2)}>
        {+currentPage-2}
      </Link>
      <Link className={paginationBar.prevPageBtn.join(" ")} to={String(+currentPage-1)}>
        {+currentPage-1}
      </Link>
      <div className={paginationBar.currentPageBtn.join(" ")}>
        {currentPage}
      </div>
      <Link className={paginationBar.nextPageBtn.join(" ")} to={String(+currentPage+1)}>
        {+currentPage+1}
      </Link>
      <Link className={paginationBar.nextPagePlus1.join(" ")} to={String(+currentPage+2)}>
        {+currentPage+2}
      </Link>
      <Link className={paginationBar.nextBtn.join(" ")} to={String(+currentPage+1)}>
        <i className="fa fa-angle-right"></i>
      </Link>
    </div>
  )
}