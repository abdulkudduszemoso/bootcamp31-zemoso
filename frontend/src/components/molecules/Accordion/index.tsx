import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import { AccordionDetails, AccordionSummary, Grid, styled, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme, {Colors} from '../../../theme/theme';
import Image from '../../atoms/Image';


interface IAccordionProps {
    heading: string,
    information: string,
    icon: any,
}

const Accordion = ({
    heading,
    information,
    icon
}: IAccordionProps) => {
    const MainGrid = styled(Grid)({
        display: 'flex',
        flexDirection: 'row',
        columnGap: '0.625rem',
        marginTop: '-0.3125rem',
    })
    const sxStyles = {
        trackOrderGrid: {
            width: '27.125rem',
            maxHeight: '5.25rem',
            backgroundColor: theme.palette.grey[100]
        },
        accordionDetails:{
            marginTop: '-2.125rem', 
            paddingTop: '0.625rem'
        }
    }
    return(
        <MuiAccordion sx={sxStyles.trackOrderGrid}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <MainGrid>
                    <Image src={icon} alt="information"/>
                    <Typography color={theme.palette.primary.dark}>
                        {heading}
                    </Typography>
                </MainGrid>
            </AccordionSummary>
            <AccordionDetails sx={sxStyles.accordionDetails}>
                 <Typography 
                 variant="caption"
                 color={Colors.medium_emphasis}>
                    {information}
                </Typography>
            </AccordionDetails>
        </MuiAccordion>
    )
}

export default Accordion;