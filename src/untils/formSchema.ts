import * as Yup from 'yup'
export const loginSchema = Yup.object({
  username: Yup.string()
    .required('username là bắt buộc')
    .min(6, 'Độ dài từ 6 - 100 ký tự')
    .max(100, 'Độ dài từ 6 - 100 ký tự'),
  password: Yup.string()
    .required('password là bắt buộc')
    .min(6, 'Độ dài từ 6 - 100 ký tự')
    .max(100, 'Độ dài từ 6 - 100 ký tự'),
  company_id: Yup.string().required('Factory is required !')
})
