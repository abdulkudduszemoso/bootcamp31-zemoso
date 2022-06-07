import { Grid, Typography } from "@mui/material"
import React from "react";
import Image from '../../atoms/Image';
import theme from "../../../theme/theme"; 


interface IconWithTextProps{
    buttonText: string,
    startIcon: any
}

const sxStyles = {
    item1:{
        marginRight: '12.5px',
        marginTop: '3px'
    }
}


const IconWithText = (props: IconWithTextProps) => {
    return(
        <Grid item container flexDirection="row">
            <Grid item sx={sxStyles.item1}><Image src={props.startIcon} alt="plus" /></Grid>
            <Grid item><Typography variant="heading4" color={theme.palette.primary.main}>{props.buttonText}</Typography></Grid>
        </Grid>
    )
}

export default IconWithText;

