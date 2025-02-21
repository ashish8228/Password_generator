import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';

function Passgenerator(){



    const [password, setpassword] = useState("");
    const [length , setlength] = useState("")
    const [lowerchecked , setlower] = useState(false)
    const [numberchecked , setnumber] = useState(false)
    const [specialchecked , setspeacial] = useState(false)


    function Passcreate(){
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(lowerchecked){
            str+= "abcdefghijklmnopqrstuvwxyz";
        }
        if(numberchecked){
            str+="1234567890";
        }
        if(specialchecked){
            str+="<>/\?|\;:{}+=_-)(*&^%$#@!~`,.?";
        }

        let pass = ""

        for(let i = 0;i<length;i++){
            pass += str[Math.floor(Math.random()*str.length)]
            console.log(pass)
        }
        
        setpassword(pass)
    }

    useEffect(()=>{
        Passcreate();
    },[length,lowerchecked,numberchecked,specialchecked])

    return(
        <div id='parent'>
            <h1 style={{textAlign : "center", color:"#008080"}}>PASSWORD GENERATOR</h1>
            <hr/>
            <div id='pass'>
                <h2>{password}</h2>
            </div>
            <h3>Password Length   ({length})</h3>
            <input type='range' style={{width : "100%"}} min={5} max={30} defaultValue={5} onChange={(e)=>{setlength(e.target.value)}}></input>

            <div className='check'>
                <h3>Lowercase </h3>
                <input type='checkbox' defaultChecked = {lowerchecked} onChange={()=>{setlower(!lowerchecked)}}></input>
            </div>
            <div className='check'>
                <h3>Number </h3>
                <input type='checkbox' defaultChecked ={numberchecked}  onChange={()=>{setnumber(!numberchecked)}}></input>
            </div>
            <div className='check'>
                <h3>Special character </h3>
                <input type='checkbox' defaultChecked={specialchecked}  onChange={()=>{setspeacial(!specialchecked)}}></input>
            </div>
        </div>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<Passgenerator></Passgenerator>)