import React from 'react'

const UpLoadCv = () => {
  return (
    <section className='contacts'>
      <div className="container text-white">
        <div className="row">
          <div className="col-12">
            <h1 className='upload-header'>Upload Cv</h1>
            <p className='personal-info'>personal information</p>
            <form className='row g-3 py-4  align-items-center justify-content-center'>
              <div className="col-md-5">
              <label className='labels'>Firstname</label>
              <input type="text" className='form-control form-control-1' />
              </div>
              <div className="col-md-5">
              <label className='labels'>Lastname</label>
              <input type="text" className='form-control form-control-2' />
              </div>
              <div className="col-md-5">
              <label className='labels'>Email</label>
              <input type="email" className='form-control form-control-1' />
              </div>
              <div className="col-md-5">
              <label className='labels'>Phone Number</label>
              <input type="number" className='form-control form-control-2' />
              </div>
              <div className="col-md-5">
              <label className='labels'>Country</label>
              <input type="text" className='form-control form-control-1' />
              </div>
              <div className="col-md-5">
              <label className='labels'>State/Province</label>
              <input type="text" className='form-control form-control-2' />
              </div>
              <div className="col-md-5">
                <label className='text-dark '>Willing to relocate</label>
                <br />
                <button type='submit' className='btn btn-primary mb-3 py-2 px-5'>Yes</button>
                <button type='submit' className='btn btn-primary mb-3 py-2 px-5 ml-2'>No</button>
              </div>
              <div className="col-md-5"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpLoadCv