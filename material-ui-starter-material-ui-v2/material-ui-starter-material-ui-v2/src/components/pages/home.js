import React,{Component} from 'react'
import {Box , Typography , Button} from '@material-ui/core'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from 'react-router-dom'
import simon from '../layout/simon.png'








const home =(classes) => {
    return (  
        
        
           <div>
<Box py={1} textAlign='bottom'>
            <Typography color="inherit">
          <  img src={simon} backgroundcolor='inherit'/>   
          <span style={{lineHeight:'2',fontWeight:'500' ,backgroundColor:'white'}}>Simmon Bradley</span>    
          </Typography>
          
            
        

          <Button flex='center' color='inherit' component={Link} to ='/'>Home Feed</Button>
          <br />
         <Button  color='inherit' component={Link} to ='/map'>Personal info</Button>
         <br/>
         <Button  color='inherit' component={Link} to ='/family'>Photo</Button>
         <br/>
         <Button  color='inherit' component={Link} to ='/friend'>Feed</Button><br/>
         <Button  color='inherit' component={Link} to ='/friend'>Chat</Button><br/>
         <Button  color='inherit' component={Link} to ='/friend'>Settings</Button><br/>
        </Box>
        </div>

       

    )



    


}

export default (home)