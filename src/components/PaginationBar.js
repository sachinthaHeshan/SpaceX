import { Link } from 'react-router-dom';

export const PaginationBar = (props) => {
  const page = props.currentPage;

  return(
    <div className="flex justify-center mb-10">

    <Link className="p-3 bg-gray-500 rounded-l-full" to={String(+page-1)}>
    <i  className="fa fa-angle-left"></i>
    </Link>
    <Link className="p-3 bg-gray-500 " to={String(+page-2)}>{+page-2}</Link>
    <Link className="p-3 bg-gray-500 " to={String(+page-1)}>{+page-1}</Link>
    <Link className="p-3 bg-gray-500 border border-gray-400" to="1">{page}</Link>

    <Link className="p-3 bg-gray-500 " to={String(+page+1)}>{+page+1}</Link>

    <Link className="p-3 bg-gray-500 " to={String(+page+2)}>{+page+2}</Link>

    <Link className="p-3 bg-gray-500 rounded-r-full" to={String(+page+1)}>
      <i className="fa fa-angle-right "></i>
    </Link>

    </div>
  )
}