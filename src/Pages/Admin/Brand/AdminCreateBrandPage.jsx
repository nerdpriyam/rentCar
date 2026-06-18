import React from 'react'
    import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import { Link } from 'react-router-dom'

export default function AdminCreateBrandPage() {
  return (
     <div className='container-fluid my-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9'>
                        <h5 className='bg-primary p-2 text-light text-center rounded'>Create Brand <Link className='float-end text-light' to="/admin/brand"><i className='bi bi-arrow-left'></i></Link></h5>         
                    </div>
                </div>
            </div>
  )
}
