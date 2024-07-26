import React, { useEffect, useState } from 'react'
import './DataList.css'
import Pager from './Pager'

const DataList = () => {

  const [data, setData] = useState([])
  const [pages, setPages] = useState(1)
  const [curPage, setCurPage] = useState(1)

  useEffect(() => {
    fetchData()
  }, [curPage])

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setData(data)
      if(data.length % 10 !== 0){
        setPages(Math.ceil(data.length / 10))
      } else {
        setPages(data.length / 10)
      }
  }



  return (
    <div>
      <h1>DataList</h1>
      <p>Pages: {curPage} / {pages}</p>
      <Pager pages={pages} curPage={curPage} setCurPage={setCurPage} />
      <div className='table-wrapper'>
        <table>
          <thead>
            <tr>
              <th>UID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
          {
          data.slice(10 * (curPage -1), 10*curPage).map((item) => {
            console.log(item)
            return (
              <tr key={item.id}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            )
          })
        }
        </tbody>
        </table>
      </div>
      <Pager pages={pages} curPage={curPage} setCurPage={setCurPage} />
    </div>
  )
}

export default DataList
