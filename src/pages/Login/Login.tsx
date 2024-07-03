import React from 'react'
import auth from 'src/apis/auth'

import { Formik } from 'formik'
import { loginSchema } from 'src/untils/formSchema'
import { TextField, Button, Box, Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material'
export default function Login() {
  const handleSubmit = async (data: { username: string; password: string; company_id: string }) => {
    await auth.login(data)
  }
  return (
    <div>
      <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
        <Formik
          initialValues={{ username: '', password: '', company_id: '' }}
          validationSchema={loginSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={(data) => {
            console.log(data)
            handleSubmit(data)
          }}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label='Username'
                  name='username'
                  value={values.username}
                  onChange={handleChange}
                  error={touched.username && !!errors.username}
                  helperText={touched.username && errors.username}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label='Password'
                  name='password'
                  type='password'
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
              </Box>
              <Box mb={2}>
                <FormControl fullWidth error={touched.company_id && !!errors.company_id}>
                  <InputLabel>Company</InputLabel>
                  <Select label='Company' name='company_id' value={values.company_id} onChange={handleChange}>
                    <MenuItem value={1}>SBM</MenuItem>
                    <MenuItem value={2}>DFM</MenuItem>
                  </Select>
                  {touched.company_id && errors.company_id && <FormHelperText>{errors.company_id}</FormHelperText>}
                </FormControl>
              </Box>
              <Button type='submit' variant='contained' color='primary'>
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  )
}
