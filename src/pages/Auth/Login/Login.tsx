import React from 'react'
import auth from 'src/apis/auth'
import { useMutation } from '@tanstack/react-query'
import { Formik } from 'formik'
import { loginSchema } from 'src/untils/formSchema'
import { TextField, Button, Box, Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from 'src/redux/Reducer/userReducer'
export default function Login() {
  const user = useSelector((state: any) => state.auth.value)
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
        // navigate('/employee')
      }
    })
  }
  console.log(user)
  const Logout = async () => {
    await auth.logout()
  }
  return (
    <div>
      <button onClick={Logout}>logout</button>
      <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
        <Formik
          initialValues={{ username: '', password: '', company_id: '' }}
          validationSchema={loginSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={(data) => {
            // console.log(data)
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
              <Button type='submit' variant='contained' color='primary' className=''>
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  )
}
