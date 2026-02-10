import { TextField, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import axios from 'axios';
import { registerSchema } from '../../validation/RegisterSchema';

export default function Register() {

  const {register,handleSubmit, formState: { errors }}=useForm({
        resolver: yupResolver(registerSchema)

  });
  const registerForm=async(values)=>{
    try{
const response =await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`,values);
console.log('response',response);
    }catch(error){
    console.log('Catch Error',error);

    }
  }
  return (
    <Box component={'section'} className='register-form' py={5} textAlign={'center'}>
      <Typography component={'h1'} fontSize={70} fontWeight='bold' color='black' variant='h1'>Register</Typography>

    <Box component={'form'}
    onSubmit={handleSubmit(registerForm)}
     display={'flex'} flexDirection={'column'} gap={4} mt={3} alignItems={'center'}>
    <TextField  {...register('userName')} fullWidth label="User Name" variant="standard" 
      error={errors.userName}
      helperText={errors.userName?.message}
    />

    <TextField  {...register('fullName')}  fullWidth label="Full Name" variant="standard"
     error={errors.fullName}
      helperText={errors.fullName?.message} />

    <TextField {...register('email')}  fullWidth label="Email" variant="standard"
     error={errors.email}
      helperText={errors.email?.message} />

    <TextField  {...register('password')}  fullWidth label="Password" variant="standard"
     error={errors.password}
      helperText={errors.password?.message} />

    <TextField  {...register('phoneNumber')}  fullWidth label="Phone Number" variant="standard"
     error={errors.phoneNumber}
      helperText={errors.phoneNumber?.message} />
    <Button type='submit'  variant="contained" sx={{ backgroundColor: 'black' }}>Register</Button>

        </Box>
  
    </Box>
  )
}
