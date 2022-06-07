import { Grid } from "@mui/material";
import React from "react";

export interface HomePageTemplateProps {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    searchBar?: React.ReactNode;
    jumbotron?: React.ReactNode;
    gammaCardList?: React.ReactNode;
    primaryCardList?: React.ReactNode;
    secondaryCardList?: React.ReactNode;
    testimonialCard?: React.ReactNode;
    faqs?: React.ReactNode;
}

const sxStyles = {
    searchBar: {
        marginTop: '2.5rem'
    },
    jumbotron: {
        marginTop: '2rem'
    },
    gammaCardList: {
        marginTop: '3rem'
    },
    primaryCardList: {
        marginTop: '9rem'
    },
    marginTop5: {
        marginTop: '5rem'
    },
    mainGrid: {
        display: 'flex'
    }
}

const HomePageTemplate = (props: HomePageTemplateProps) => {
    const {searchBar, header, 
        footer, jumbotron, 
        gammaCardList, primaryCardList,
        testimonialCard, secondaryCardList,
        faqs} = props
    return (
        <Grid container sx={sxStyles.mainGrid} justifyContent="center">
            {header}
            <Grid item sx={sxStyles.searchBar}>
                {searchBar}
            </Grid>
            <Grid item sx={sxStyles.jumbotron}>
                {jumbotron}
            </Grid>
            <Grid item sx={sxStyles.gammaCardList}>
                {gammaCardList}
            </Grid>
            <Grid item sx={sxStyles.primaryCardList}>
                {primaryCardList}
            </Grid>
            <Grid item sx={sxStyles.marginTop5}>
                {secondaryCardList}
            </Grid>
            <Grid item sx={sxStyles.marginTop5}>
                {testimonialCard}
            </Grid>
            <Grid item sx={sxStyles.marginTop5}>
                {faqs}
            </Grid>
            <Grid item sx={sxStyles.marginTop5}>
                {footer}
            </Grid>
            
        </Grid>
    )
}

export default HomePageTemplate