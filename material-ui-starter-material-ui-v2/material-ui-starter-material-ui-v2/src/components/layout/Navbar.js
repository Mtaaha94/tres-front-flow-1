import React ,{Component} from 'react'
import {  Typography,AppBar,Toolbar ,Button  } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import lifetwig from './Lifetwig.png'
import simon from './simon.png'
import leaves from './leafs.png'
import search from './Search.png'
import bars from './bars.png'
import bells from './bell.png'
import ellipse from '../pages/Ellipse 13.png'


const navbar =() =>{
    
    return (
        <AppBar style={{backgroundImage:`url(${leaves})`}}
        padding='5px' color="inherit"  position ='static'>
        <Toolbar>
         <Typography variant='h1' padding='10px'  >
             <div >
             < img src={lifetwig} />
             </div>
             
             
            
           

            
         </Typography>
        <div  style={{width:'100%',display:'flex',justifyContent:'center'}}>
         <Button flex='center' color='inherit' component={Link} to ='/'>Home Feed</Button>
         <Button  color='inherit' component={Link} to ='/map'>Map</Button>
         <Button  color='inherit' component={Link} to ='/family'>Family Tree</Button>
         <Button  color='inherit' component={Link} to ='/friends'>Friends</Button>
         </div>
         <div style={{display:'flex',width:'25%'}}>
         <  img src={simon}/>
         <span style={{lineHeight:'2',fontWeight:'600'}}>Simmon Bradley</span>
         
         </div>
         <div style={{display:'flex',width:'25%',justifyContent:'space-around'}} >
        
       <a><img style={{backgroundColor:'#88B235',width:'25%',borderRadius:'41px',height:'35px'}} src ={search}/></a> 
         <img style={{backgroundColor:'#88B235',width:'25%',borderRadius:'21px',height:'35px'}} src ={bells} />
         <img style={{backgroundColor:'#88B235',width:'25%',borderRadius:'21px',height:'35px'}} src ={bars}/>
         </div>
         <div>
            
               
             
           
         </div>

         
         </Toolbar>
         </AppBar>

       
    )
    }


export default  (navbar)