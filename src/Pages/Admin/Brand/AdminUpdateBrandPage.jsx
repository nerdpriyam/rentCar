import React from 'react'
    import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import { Link } from 'react-router-dom'

export default function AdminUpdateBrandPage() {
  return (
     <div className='container-fluid my-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9'>
                  <h5 className='bg-primary p-2 text-light text-center rounded'>Update Brand<Link className='float-end text-light' to="/admin/category/create">+</Link></h5>                        
                    </div>
                </div>
            </div>
  )
}
