import React, { useState } from 'react'

function useForm() {
    let [formData,setFormData] = useState({fn:"",mob:"",email:"",pwd:""})
    let [error,setError] = useState({})
    let changeFormData = ({target:{name,value}})=>
    {
        setFormData({...formData,[name]:value})
        // setError(validate(formData))
    }
    let getFormData = (e)=>
    {
        e.preventDefault()
        console.log(formData);
        setError(validate(formData))
    }
    let validate = (fdata)=>{
        let errorMessage = {}

        // ~Full name validation
        if(!fdata.fn)
        {
            errorMessage.fnMessage="Fullname is mandatory"
        }
        else if(fdata.fn.length<6)
        {
            errorMessage.fnMessage="Fullname must have minimum 6 characters"
        }
        else if(!/^[A-Za-z\s]+$/g.test(fdata.fn))
        {
            errorMessage.fnMessage="Fullname should not have numbers"
        }

        // ~Mobile validation
        if(!fdata.mob)
        {
            errorMessage.mobMessage="Mobile number is mandatory"
        }
        else if(fdata.mob.length<10)
        {
            errorMessage.mobMessage="Mobile number must have 10 digits"
        }
        // else if(fdata.mob.length>10)
        // {
        //     errorMessage.mobMessage="Mobile number must have 10 digits"
        // }
        else if(!/^[6-9][0-9]{9}$/.test(fdata.mob))
        {
            errorMessage.mobMessage="Mobile number should be starting from 6 to 9 numbers"
        }

        // ~Email validation
        if(!fdata.email)
        {
            errorMessage.emailMessage="Email is mandatory"
        }
        else if(fdata.email.length<15)
        {
            errorMessage.emailMessage="Email should have minimum 15 characters"
        }
        else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(fdata.email))
        {
            errorMessage.emailMessage="Email Format is wrong"
        }

        // ~Password validation
        if(!fdata.pwd)
        {
            errorMessage.pwdMessage="Password is mandatory"
        }
        else if(fdata.pwd.length<8 || fdata.pwd.length>15)
        {
            errorMessage.pwdMessage="Password must have minimum 8 characters and maximum 15 characters"
        }
        else if(!/^[A-Za-z0-9\@!#$%&*^?]+$/.test(fdata.pwd))
        {
            errorMessage.pwdMessage="Password Format is wrong"
        }

        return errorMessage
    }
  return [formData,error,changeFormData,getFormData]
}

export default useForm