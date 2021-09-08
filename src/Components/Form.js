import React,{useEffect, useState} from 'react';
import erroricon from '../image/icon-error.svg';


 function Form() {

    const [data, setData] = useState({
        name:"",
        lastName:"",
        email:"",
        password:""
    });

    const [errors, setErrors] = useState({});
    const [touch, setTouch] = useState({});

    useEffect(() => {
        setErrors(validate(data))
    },[data])

    const validate = data =>{

        const errors ={};

        if(!data.name.trim()){
            errors.name = "First Name cannot be empty"
        } else{
            delete errors.name
        }

         if(!data.lastName.trim()){
            errors.lastName = "Last Name cannot be empty"
        } else{
            delete errors.lastName
        }

        if(!data.email){
            errors.email = "Email cannot be empty"
        } else if (!/\S+@\S+\.\S+/.test(data.email)){
            errors.email = "Email address is inavalid"
        } else{
            delete errors.email
        }

        if(!data.password){
            errors.password = "Password cannot be empty"
        } else if(data.password.length < 6) {
            errors.password = "Password need to be 6 character or more"
        } else{
            delete errors.password
        }

        return errors ;
    }

    const changeHandler = event =>{
        setData({...data, [event.target.name] : event.target.value});
    }

    const focusHandler = event =>{
        setTouch({...touch, [event.target.name]:true})
    }

    const submitHandler = event =>{
        event.preventDefault();
        if(!Object.keys(errors).length){
            console.log(data)
        }else{
            setTouch({
                name: true,
                lastName:true,
                email:true,
                password:true
            })
        }  
    }

    return (
        <div className=" p-4 lg:p-10 max-w-xl mx-auto bg-white rounded-xl shadow-new  ">
            <form onSubmit={submitHandler}>
                
                <div className="relative">
                    <input 
                        style={{borderColor: touch.name && errors.name ? "#ff7a7a" : "" , 
                                borderWidth: touch.name && errors.name ? "2px" : "1px"}}         
                        className="border relative border-gray-500 p-3.5 border-opacity-30 rounded-md placeholder-gray-500 font-semibold outline-none focus:border-gray-850 w-full" 
                        type="text" 
                        name="name" 
                        value={data.name} 
                        placeholder={touch.name ? "" : "First Name"} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                        {errors.name && touch.name && <p className="w-full text-red-450 text-right text-xs mt-2 italic font-semibold ">{errors.name}</p>}
                        {errors.name && touch.name && <img className="absolute right-6 top-4" src={erroricon} alt="error-icon" />}
                </div>

                <div className="relative">
                    <input 
                        style={{borderColor: touch.lastName && errors.lastName ? "#ff7a7a" : "",
                                borderWidth: touch.lastName && errors.lastName ? "2px" : "1px" }}
                        className="border border-gray-500 mt-8 p-3.5 border-opacity-30 rounded-md placeholder-gray-500 font-semibold outline-none focus:border-gray-850 w-full" 
                        type="text" 
                        name="lastName" 
                        value={data.lastName} 
                        placeholder={touch.lastName ? "" : "Last Name"} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                        {errors.lastName && touch.lastName && <p className="w-full text-red-450 text-right text-xs mt-2 italic font-semibold ">{errors.lastName}</p>}
                        {errors.lastName && touch.lastName && <img className="absolute right-6 top-12" src={erroricon} alt="error-icon2" />}
                </div>

                <div className="relative">
                    <input 
                        style={{borderColor: touch.email && errors.email ? "#ff7a7a" : "",
                                borderWidth: touch.email && errors.email ? "2px" : "1px" }}
                        className="border border-gray-500 mt-8 p-3.5 border-opacity-30 rounded-md placeholder-gray-500 font-semibold outline-none focus:border-gray-850 w-full" 
                        type="text" 
                        name="email" 
                        value={data.email} 
                        placeholder={touch.email ? "" : "Email"} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                        {errors.email && touch.email && <p className="w-full text-red-450 text-right text-xs mt-2 italic font-semibold ">{errors.email}</p>}
                        {errors.email && touch.email && <img className="absolute right-6 top-12" src={erroricon} alt="error-icon" />}
                </div>

                <div className="relative"> 
                    <input 
                        style={{borderColor: touch.password && errors.password ? "#ff7a7a" : "",
                                borderWidth: touch.password && errors.password ? "2px" : "1px" }}
                        className="border border-gray-500 mt-8 p-3.5 border-opacity-30 rounded-md placeholder-gray-500 font-semibold outline-none focus:border-gray-850 w-full" 
                        type="password" 
                        name="password" 
                        value={data.password} 
                        placeholder={touch.password ? "" : "Password"} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                        {errors.password && touch.password && <p className="w-full text-red-450 text-right text-xs mt-2 italic font-semibold ">{errors.password}</p>}
                        {errors.password && touch.password && <img className="absolute right-6 top-12" src={erroricon} alt="error-icon" />}
                </div>

                    <button className=" mt-8 p-3.5 cursor-pointer rounded-md border-2 border-green-500 border-b-4 bg-green-450 text-white shadow-inner w-full hover:bg-green-300" >CLAIM YOUR FREE TRAIL</button>
                    <p className="mt-4 text-xs flex justify-center text-purple-350 w-full "> By clicking the button, you are agreeing to our <span className="text-red-450 font-bold translate-x-1.5"> Terms and Services </span></p>    
            
            </form>
        </div>
    );
}

export default Form;
