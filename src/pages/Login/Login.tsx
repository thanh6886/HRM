import React from 'react'
import auth from 'src/apis/auth'

import { Formik } from 'formik'
import { loginSchema } from 'src/untils/formSchema'
export default function Login() {
  return (
    <div>
      <Formik
        initialValues={{ username: '', password: '', company_id: '' }}
        validationSchema={loginSchema}
        onSubmit={(data) => {
          console.log()
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input type='text' name='username' value={values.username} onChange={handleChange} />
            <input type='text' name='password' value={values.password} onChange={handleChange} />
            <input type='text' name='company_id' value={values.company_id} onChange={handleChange} />
            <button type='submit'>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}
