import logo from './logo.svg';
import './App.css';
import { useState, setState} from "react";
import { RadioButton, RadioGroup } from '@trendmicro/react-radio';
import '@trendmicro/react-radio/dist/react-radio.css';
import React, { Component } from 'react'
import Select from 'react-select'

function App() {
  const initialValues = {username : "", radiobutton :""};
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

/*/this.state = {
    selectedOption: '',
  }
  */

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({...formValues, [name]:value, })
   console.log(formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log("Hasil Submit",formValues)
  }

  const options = [
    { value: 'Memasak', label: 'Memasak' },
    { value: 'Mendengarkan Musik', label: 'Mendengarkan Musik' },
    { value: 'Membaca', label: 'Membaca' },
    { value: 'Menulis', label: 'Menulis' }
  ]

  return (
    <div className="container">
      <header>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </header>

			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-5">
					<div className="login-wrap p-4 p-md-5">
		      	<div className="icon d-flex align-items-center justify-content-center">
		      		<span className="fa fa-user-o"></span>
		      	</div>
		      	<h1 className="text-center mb-4">Data Mahasiswa</h1>
						<form onSubmit={handleSubmit} className="login-form">
		      		<div className="form-group">
                <h3>Nama</h3>
		      			<input type="text" className="form-control rounded-left" name="username" placeholder="Masukkan nama Mahasiswa" value={formValues.name} onChange={handleChange}/>
		      		</div>
              <RadioGroup onChange={handleChange}>
                      <div className="row">
                          <div className="col-xs-12 col-sm-6" >
                              <h3>Jenis Kelamin</h3>
                              <RadioButton value={formValues.radiobutton="Perempuan"}>Perempuan</RadioButton>
                              <RadioButton value={formValues.radiobutton="Laki-laki"}>Laki-laki</RadioButton>
                          </div>
                      </div>
              </RadioGroup>
              <div>
                <h3>Hobi</h3>
                <Select options={options}/> 
              </div>
              <div className="form-group">
                <h3>Komentar</h3>
		      			<input type="text" className="form-control rounded-left" name="username" placeholder="Masukkan komentar Anda" value={formValues.name} onChange={handleChange}/>
		      		</div>
              
              <div className = "reset">
                <button className="btn submit">Reset Data</button>
              </div>
	            <div className="form-group">
	            	<button type="submit" className="btn btn-primary rounded submit p-3 px-5">Add</button>
	            </div>
            </form>
              
	          
	        </div>
				</div>
			</div>
    </div>
  );
}

export default App;
