import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import Sidebar from '../../components/Header/Sidebar'
import '../css/Card.css'
import { NavLink } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import MOCK_DATA from '../../utils/MOCK_DATA.json'
import { COLUMNS } from '../../utils/columns'
import '../../screens/css/table.css'

const Assets = () => {

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0}
    },
    usePagination
  )

  const { pageIndex, pageSize } = state



  return (
    <div style={{ display: 'flex' }}>

      <Sidebar active ='assets' />

      <div style={{ width: '100%', padding: 40 }}>

        <div className='card'>
          <div className='card-body'>

            <div className='card-title'>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '22.5px' }}>Assets</div>
                <div className='form-inline'>
                  {/* <NavLink to='' className='button-links' style={{ backgroundColor:  '#005D8E'}}>Reports</NavLink> */}
                  <NavLink to="" className='button-links' style={{ backgroundColor:'#209FCA'  }}>Create New Assets</NavLink>

                </div>
              </div>

            </div>



            <div className='user-index-table'>

              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '20px 0' }}>

                <div className='search-icon-container'>
                  <FiSearch className='search-icon' />
                </div>
                <input placeholder='Search users...' type='text' className='search-input' />

              </div>


              <>
                <table {...getTableProps()}>
                  <thead>
                    {headerGroups.map(headerGroup => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                          <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                      prepareRow(row)
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>

                  <div style={{ margin: '6px', color: '#005D8E' }}>
                    <span style={{fontSize: '12.6px'}}>
                      Page{' '}
                      {/* <strong> */}
                        {pageIndex + 1} of {pageOptions.length}
                      {/* </strong>{' '} */}
                    </span>
                    {/* <span>
                    | Go to page:{' '}
                    <input
                      type='number'
                      defaultValue={pageIndex + 1}
                      onChange={e => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                      }}
                      style={{ width: '50px' }}
                    />
                  </span>{' '} */}
                    <select style={{ marginLeft:20,padding: '2px', color: '#005D8E',border:'1px solid #005D8E',borderRadius:'2px' }}
                      value={pageSize}
                      onChange={e => setPageSize(Number(e.target.value))}>
                      {[10, 25, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                          Show {pageSize}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                  <button className='table-btn' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                  </button>{' '}
                  <button className='table-btn' onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                  </button>{' '}
                  <button className='table-btn' onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                  </button>{' '}
                  <button className='table-btn' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                  </button>{' '}
                </div>


                </div>



               

              </>

            </div>





          </div>
        </div>

      </div>

    </div>
  )
}

export default Assets