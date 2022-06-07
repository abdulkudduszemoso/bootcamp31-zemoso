import { makeStyles } from "@mui/styles"
import React from "react"
import ZemosoLogo from '../../../../public/assets/images/logo.png'
import TypographyComponent from "../../atoms/Typography"
import {FooterMenu} from '../../../utils/constants'
import SocialLinks from "../SocialLinks"
import { Colors } from "../../../theme/theme"


let useStyles = makeStyles({
    main: {
        width: 1366,
        height: 256,
        backgroundColor: Colors.violet,
        position: 'relative'
    },
    leftContainer: {
        width: 139,
        height: 156,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        position: 'absolute',
        left: 90,
        top: 60
    },
    imageText: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4
    },
    zemosoLogo: {
        width: 16,
        height: 16
    },
    menuItems: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
    },
    rightContainer: {
        position: 'absolute',
        left: 1164,
        top: 66
    }
})

let Footer = () => {
    let styles = useStyles()
    return (
        <div className={styles.main}>
            <div className={styles.leftContainer}>
                <div className={styles.imageText}>
                    <div>
                        <img src={ZemosoLogo} className={styles.zemosoLogo} alt="logo" />
                    </div>
                    <TypographyComponent variant="body4" color={Colors.white} text="Zemoso Diagnostics" />
                </div>
                <div className={styles.menuItems}>
                    {FooterMenu.map((item, index) => {
                        return (
                            <TypographyComponent text={item.title} key={index} color={Colors.light_blue} variant="body6" />
                        )
                    })}
                </div>
            </div>
            <div className={styles.rightContainer}>
                <SocialLinks />
            </div>
        </div>
    )   
}

export default Footer