import React from 'react'
import auth from 'src/apis/auth'
import { useMutation } from '@tanstack/react-query'
import { Formik } from 'formik'
import { loginSchema } from 'src/untils/formSchema'
import { TextField, Button, Box, Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from 'src/redux/Reducer/userReducer'
import './Login.style.scss'
import path from 'src/constants/path'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginMutation = useMutation({
    mutationFn: (body: { username: string; password: string; company_id: string }) => auth.login(body)
  })
  const handleSubmit = (body: { username: string; password: string; company_id: string }) => {
    loginMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
        dispatch(setLogin())
        navigate('/employee')
      }
    })
  }
  return (
    <div className='Wrap-Container'>
      <Formik
        initialValues={{ username: '', password: '', company_id: '' }}
        validationSchema={loginSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(data) => {
          handleSubmit(data)
        }}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <div className='Container'>
            <form onSubmit={handleSubmit} className='formContainer'>
              <Box mb={2}>
                <TextField
                  fullWidth
                  margin='normal'
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
                  margin='normal'
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
                <FormControl fullWidth error={touched.company_id && !!errors.company_id} margin='normal'>
                  <InputLabel>Company</InputLabel>
                  <Select label='Company' name='company_id' value={values.company_id} onChange={handleChange}>
                    <MenuItem value={1}>SBM</MenuItem>
                    <MenuItem value={2}>DFM</MenuItem>
                  </Select>
                  {touched.company_id && errors.company_id && <FormHelperText>{errors.company_id}</FormHelperText>}
                </FormControl>
              </Box>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className=''
                sx={{
                  marginTop: '30px',
                  backgroundColor: 'rgb(0, 145, 255)',
                  '&:hover': {
                    backgroundColor: 'rgb(0, 100, 255)'
                  },
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  height: '50px'
                }}
              >
                Sign In
              </Button>
            </form>
            <div
              style={{
                margin: '10px',
                display: 'flex',
                justifyContent: 'center',
                padding: '10px'
              }}
            >
              <Link to={path.forgot} style={{ textDecoration: 'none', fontFamily: 'cursive', fontSize: '18px' }}>
                Forgot Your Password ?{' '}
              </Link>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}
