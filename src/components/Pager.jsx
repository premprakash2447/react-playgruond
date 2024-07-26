import React from 'react'

const Pager = ({pages, curPage, setCurPage}) => {
  let nextPage = curPage + 1;
  let prevPage = curPage - 1;
  return (
    <div>
      {
        curPage > 1 && <button onClick={() => setCurPage(curPage - 1)}>Prev {prevPage}</button>
      }
      {
        pages > curPage && <button onClick={() => setCurPage(curPage + 1)}>Next {nextPage}</button>
      }
    </div>
  )
}

export default Pager
