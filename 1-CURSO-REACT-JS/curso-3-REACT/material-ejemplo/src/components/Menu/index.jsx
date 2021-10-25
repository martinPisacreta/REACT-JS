import React,{PureComponent} from 'react'
import {Paper,Grid,Icon} from '@material-ui/core'
import { NavLink } from 'react-router-dom'


export default class  Menu extends PureComponent  {
    state = 
    {
        menuItems : [
            {id: 'memes', label: 'Memes', icon:'view_comfy'},
            {id: 'create-meme', label: 'Create Meme', icon: 'add_box'},
            {id: 'my-memes', label: 'My Memes', icon: 'perm_identity'}
        ]
    }
    
render() {
                // Paper -> nos muestra como una hoja elevada , da como el efecto
                // elevation -> la elevacion de la hoja
                return  <Paper elevation={3}>
                   { 
                        this.state.menuItems.map((menuItem) => {
                        return <Grid container spacing={3} justify="center">
                                <Grid item xs={3}  align="center">
                                    {/* to -> a donde quiero que vaya  */}
                                    <NavLink to={"/" + menuItem.id}>
                                        {menuItem.label}
                                        {<Icon >{menuItem.icon}</Icon>}
                                    </NavLink>
                                </Grid>
                            </Grid>
                        })}   
                </Paper>  
    }
}

