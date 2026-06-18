import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'

export default function AdminHomePage() {
    return (
        <div className='container-fluid my-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminSidebar />
                </div>
                <div className='col-md-9'>
                    <h5 className='bg-primary p-2 text-light text-center rounded'>Admin</h5>
                    <table className='table table-bordered text-dark'>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>Priyam Srivastava</td>
                            </tr>
                            <tr>
                                <th>User Name</th>
                                <td>Priyam</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>er.priyamsrivastava@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>+91 8858148653</td>
                            </tr>
                            <tr>
                                <th>Role</th>
                                <td>Super Admin</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
