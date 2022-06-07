import { makeStyles } from "@mui/styles"
import React from "react"
import GooglePlay from '../../../../public/assets/images/googleplay.png'
import AppStore from '../../../../public/assets/images/appstore.png'
import Facebook from '../../../../public/assets/images/facebook.svg'
import Twitter from '../../../../public/assets/images/twitter.svg'
import { Colors } from "../../../theme/theme"



let useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20.6
    },
    otherImages: {
        display: 'flex',
        flexDirection: 'row',
        gap: 18
    },
    twitterDiv: {
        backgroundColor: Colors.light_blue,
        width: 20, height: 20,
        borderRadius: '50%'
    },
    twitter: {
        position: 'relative',
        left: 2,
        top: 3.5,
        width: 16,
        height: 13
    },
    googlePlay: {
        width: 111.06,
        height: 32
    },
    appStore: {
        width: 109.63,
        height: 30.79
    },
    facebook: {
        width: 20,
        height: 19.88,
        marginLeft: 50
    }
})

let SocialLinks = () => {
    let styles = useStyles()
    return (
        <div className={styles.main}>
            <img src={GooglePlay} className={styles.googlePlay} alt="google Play" />
            <img src={AppStore} className={styles.appStore} alt="app store" />
            <div className={styles.otherImages}>
                <img src={Facebook} className={styles.facebook} alt="facebook" />
                <div className={styles.twitterDiv}>
                    <img src={Twitter} className={styles.twitter} alt="twitter" />
                </div>
            </div>
        </div>
    )
}

export default SocialLinks