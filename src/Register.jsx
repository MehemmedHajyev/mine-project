import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {

  const [id, setid] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")
  const [adress, setAdress] = useState("")
  const [gender, setGender] = useState("famale")

  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault();

    // Form alanlarını kontrol et
    if (!id || !name || !password || !email || !phone || !country || !adress || !gender) {
      toast.error('Tüm alanları doldurunuz.');
      const inputElements = document.querySelectorAll('.form-control');
      inputElements.forEach((input) => {
        if (!input.value) {
          input.classList.add('invalid');
        } else {
          input.classList.remove('border-danger');
        }
      });
      return; // Eğer bir alan eksikse işlemi durdur
    }

    const regObj = { id, name, password, email, phone, country, adress, gender };
    console.log(regObj);

    fetch("http://localhost:9000/user", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(regObj),
    }).then((res) => {
      toast.success('Register successfully!');
      navigate('/login');
    }).catch((err) => {
      toast.error('Failed: ' + err.message);
    });
  };

  return (
    <>
      <div className='offset-lg-3 col-lg-6'>
        <form action="" className='container needs-validation' onSubmit={handlesubmit} >
          <div className="card">
            <div className="card-header">
              <h1>user Register</h1>
            </div>
            <div className="card-body">
              <div className="row">

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="validationCustom01" className='form-label'>
                      User Name

                      <span className='errmsg'>*</span>
                      <input value={id} onChange={e => setid(e.target.value)} type="text" className='form-control' id="validationCustom01" />
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Password
                      <span className='errmsg'>*</span>
                      <input value={password} onChange={e => setPassword(e.target.value)} type="password" className='form-control' />
                    </label>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Full Name
                      <span className='errmsg'>*</span>
                      <input value={name} onChange={e => setName(e.target.value)} type="text" className='form-control' />
                    </label>
                  </div>
                </div>
             

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Email
                      <span className='errmsg'>*</span>
                      <input value={email} onChange={e => setEmail(e.target.value)} type="email" className='form-control' />
                    </label>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Phone
                      <span className='errmsg'>*</span>
                      <input value={phone} onChange={e => setPhone(e.target.value)} type="number" className='form-control' />
                    </label>
                  </div>
                </div>

                <div className="col-lg-6">
                  <br />
                  <div className="form-group">
                    <label htmlFor="" >
                      Country
                      {/* <span className='errmsg'>*</span> */}
                      <select value={country} onChange={e => setCountry(e.target.value)} name="" id="" className='ms-2'>
                        <option value="baku">Baku</option>
                        <option value="usa">USA</option>
                        <option value="france">France</option>


                      </select>
                    </label>
                  </div>
                </div>


                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Address
                      <span className='errmsg'>*</span> </label>
                    <textarea value={adress} onChange={e => setAdress(e.target.value)} className='form-control'></textarea>

                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Gender
                      <br />
                      <input type="radio" checked={gender === 'male'} onChange={e => setGender(e.target.value)} name='gender' value='male' className='app-check' />
                      <label>Male</label>
                      <input type="radio" checked={gender === 'famale'} onChange={e => setGender(e.target.value)} name='gender' value='famale' className='app-check' />
                      <label>Female</label>
                    </label>
                  </div>
                </div>




              </div>

            </div>
            <div className="card-footer">
              <button type='submit' className='btn btn-primary'>Register</button>
              <Link className='btn btn-danger ms-3' to='/login'>Login</Link>
            </div>
          </div>
        </form>

      </div>
    </>

  )
}

export default Register