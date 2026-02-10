import { TextField, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import axios from 'axios';

import { loginSchema } from '../../validation/loginSchema';

export default function Login() {
 
  const {register,handleSubmit, formState: { errors }}=useForm({
        resolver: yupResolver(loginSchema)

  });
  const loginForm=async(values)=>{
    try{
const response =await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`,values);
console.log('response',response);
    }catch(error){
    console.log('Catch Error',error);

    }
  }
  return (
    <Box component={'section'} className='Login-form' py={5} textAlign={'center'}>
      <Typography component={'h1'} fontSize={70} fontWeight='bold' color='black' variant='h1'>Login</Typography>

    <Box component={'form'}
    onSubmit={handleSubmit(loginForm )}
     display={'flex'} flexDirection={'column'} gap={4} mt={3} alignItems={'center'}>

    <TextField {...register('email')}  fullWidth label="Email" variant="standard"
     error={errors.email}
      helperText={errors.email?.message} />

    <TextField  {...register('password')}  fullWidth label="Password" variant="standard"
     error={errors.password}
      helperText={errors.password?.message} />

   
    <Button type='submit'  variant="contained" sx={{ backgroundColor: 'black' }}>Login</Button>

        </Box>
  
    </Box>
  )
}
