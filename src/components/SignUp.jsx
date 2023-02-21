import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import { useHistory} from "react-router-dom";

import { Redirect } from "react-router-dom";
import axios from 'axios';



const SignUp = () => {

    const [hasAccount, setHasAccount] = useState(true);

    const [value,setValue]=useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Pasword:"",
        ConfirmPassword:""
    })

    {/*const [FirstName,setFirstName] = useState('');
    const [LastName,setLastName] = useState('');
     const [EmailAddress,setEmailAddress] = useState('');*/}

    const history=useHistory();
    const [FirstNameError,setFirstNameError]=useState("");
    const [LastNameError,setLastNameError]=useState("");
    const [EmailAddressError,setEmailAddressError]=useState("");
    const [PasswordError,setpasswordError]=useState("");
    const [ConfirmPasswordError,setConfirmPasswordError]=useState("");

    

    const handle_FirstNameInputChange=(event)=>{
        setValue({...value,FirstName:event.target.value})
        if(value.FirstName.length<50){
            setFirstNameError("please Enter the first name");
        }
        else{
            setFirstNameError(null);
        }
    }

    const handle_LastNameInputChange=(event)=>{
        setValue({...value,LastName:event.target.value})
        if(value.LastName.length<50){
            setLastNameError("please Enter the last name");
        }
        else{
            setLastNameError(null);
        }
    }

    const handle_EmailInputChange=(event)=>{
        setValue({...value,Email:event.target.value})
        if(value.Email.length<50){
            setEmailAddressError("Enter Valid Email");
        }
        else{
            setEmailAddressError(null);
        }
    }

    const handle_PasswordInputChange=(event)=>{
        setValue({...value,Pasword:event.target.value})
        if(value.Pasword.length<50){
            setpasswordError("Please Enter the Password");
        }
        else{
            setpasswordError(null);
        }
    }

    const handle_ConfirmPasswordInputChange=(event)=>{
        setValue({...value,ConfirmPassword:event.target.value})
        if(value.ConfirmPassword.length<7){
            setConfirmPasswordError("Please confirm password");
        }
        else{
            setConfirmPasswordError(null);
        }
    }

    const submit_Deatils= async(event)=>{
        
        if(value.FirstName.length<50){
            setFirstNameError("please Enter the first name");
        }
        else{
            setFirstNameError(null);
        }
       
         if(value.LastName.length<50){
            setLastNameError("please Enter the Last name");
        }
        else{
            setLastNameError(null);
        }
       
        if(value.Email.length<50){
            setEmailAddressError("please Enter the Email");
        }
        else{
            setEmailAddressError(null);
        }
       
        if(value.Pasword.length<50){
            setpasswordError("Please Enter the Password");
        }
        else{
            setpasswordError(null);
        }
        
         if(value.ConfirmPassword.length<50){
            setConfirmPasswordError("Please Enter the Password");
        }
        else{
            setConfirmPasswordError(null);
        }
        if(FirstNameError===null && LastNameError===null && EmailAddressError===null && PasswordError===null && ConfirmPasswordError===null ){
            event.preventDefault();

            console.log(value)
            
            await axios.post('http://localhost:4000/api/v1/register',{
                firstName:value.FirstName,
                lastName:value.LastName,
                email:value.Email,
                password:value.Pasword,
                confirmPassword:value.ConfirmPassword
               
            }).then(res =>{
                alert("Register succesfull");
      
            }).catch(err =>{
              alert(err);
            })   
            
        }

       
    }


    
    const reg = (
                <form className="register-form" autoComplete={"off"}>
                    <div className="gridy">
                        <input type="text" placeholder="*First_Name" value={value.FirstName} onChange={handle_FirstNameInputChange} />
                        <h2>{FirstNameError}</h2>
                        <input type="text" placeholder="*Last_Name" value={value.LastName} onChange={handle_LastNameInputChange} />
                        <h2>{LastNameError}</h2>
                        <input type="email" placeholder="*Email_Address" value={value.Email} onChange={handle_EmailInputChange}  autoComplete="off"/>
                        <h2>{EmailAddressError}</h2>
                       
                    </div>
                    <div className="gridy">
                        <input type="password" placeholder="*Password" value={value.password} onChange={handle_PasswordInputChange} />
                        <h2>{PasswordError}</h2>
                        <input type="password" placeholder="*Confirm_Password" value={value.ConfirmPassword} onChange={handle_ConfirmPasswordInputChange} />
                        <h2>{ConfirmPasswordError}</h2>
                    <button className="register-btn" onClick={submit_Deatils}>Join Now</button>
                    </div>
                </form>
                

    );
    
    const [values,setValues]=useState({
        email:"",
        pasword:""
    })

    {const history=useHistory();}

    const [emailError,setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("");
    {const [authMessage,setAuthMessage]=useState("");}

    const handleEmailInputChange=(event)=>{
        setValues({...values,email:event.target.value})
        if(values.email.length<7){
            setEmailError("Enter Valid Email");
        }
        else{
            setEmailError(null);
        }
    }

    const handlePasswordInputChange=(event)=>{
        setValues({...values,pasword:event.target.value})
        if(values.pasword.length<7){
            setPasswordError("Please Enter the Password");
        }
        else{
            setPasswordError(null);
        }
    }

    const submitDeatils= async(event)=>{
        
        
        if(values.email.length<7){
            setEmailError("Enter Valid Email");
        }
        else{
            setEmailError(null);
        }
        if(values.pasword.length<7){
            setPasswordError("Please Enter the Password");
        }
        else{
            setPasswordError(null);
        }
        if(emailError===null && passwordError===null){
            event.preventDefault();
      
      await axios.post('http://localhost:4000/api/v1/login',{
        email:values.email,
        password:values.pasword
      }).then((res) =>{
       if(res.data.success===true){
        localStorage.setItem("email",values.email) ;
        history.push("/");
        setEmailError(null);
        console.log(res.data.success);}
    

    }).catch(err =>{
        alert(err);
      })
            
     
        }}
    

    const log = (

        <form className="log-form" autoComplete={"off"}>
            <div className="gridy">
                <input type="email" placeholder="*Email Address" value={values.email} onChange={handleEmailInputChange} autoComplete={"off"}/>
                <h2>{emailError}</h2>
                <input type="password" placeholder="*Password" value={values.pasword} onChange={handlePasswordInputChange}/>
                <h2>{passwordError}</h2>
            <button className="register-btn" onClick={submitDeatils}>Log In</button>
            </div>
        </form>
    )
    return (
        <main>
            <Navbar />
            
            <div className="register-content">
                <button className="sign-toggle-box">
                    <span className={`sign-toggle sign-toggle-${hasAccount}`} onClick={()=>setHasAccount(!hasAccount)}></span>
                </button>
                {hasAccount? log:reg}
            </div>
            <Footer />
        </main>
    )
    }


export default SignUp