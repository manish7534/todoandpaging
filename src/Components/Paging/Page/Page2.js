import React,{useEffect,useState} from 'react'
import './Page.css';
function Page2(){
    const[data,setData]=useState([])
    useEffect(()=>{
            fetch('https://reqres.in/api/users?page=2')
            .then((resp)=>{resp.json()
                .then((result)=>{
                // console.log(result)
                setData(result.data)
            })
        })
           
        },[])
      
console.log(data)
    return(
        <div className="table_div">
            

            <table border='5px'>
             <tbody>
                 <tr>
                 <td>id</td>
                     <td>email</td>
                     <td>First name</td>
                     <td>Last name</td>
                     <td>avatar</td>
                 </tr>
                 {
                     data.map((item)=>
                     <tr>
                         <td>{item.id}</td>
                        <td>{item.email}</td>
                         <td>{item.first_name}</td>
                         <td>{item.last_name}</td>
                         <td>{item.avatar}</td>
                     </tr>
                     
                     )
                 }
             </tbody>
         </table>
         </div>
    )
}
export default Page2