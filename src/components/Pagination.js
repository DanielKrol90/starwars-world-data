import React from 'react'
import './Pagination.css'


const Pagination = (props) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalPlanets / props.planetsPerPage); i++) {
        pageNumbers.push(i);

    }

  return (
    <div className="pagination">
        <ul className='listOfPagination'>
            {pageNumbers.map(number => (
                <li key={number} className="pageItem">
                <a onClick={() => props.paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination