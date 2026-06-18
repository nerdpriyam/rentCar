import React from 'react'
    import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import { Link } from 'react-router-dom'

export default function AdminCarPage() {
  return (
     <div className='container-fluid my-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9'>
                        <h5 className='bg-primary p-2 text-light text-center rounded'>Car<Link className='float-end text-light' to="/admin/car/create"><i className='bi bi-plus'></i></Link></h5> 
                    </div>
                </div>
            </div>
  )
}
