import { makeStyles } from "@mui/styles";
import React from "react"
import TypographyComponent from "../../atoms/Typography";

export interface GammaCardProps {
    image?: any;
    title?: string;
    onClick?: () => void;
}

const useStyles = makeStyles({
  main: {
    width: 283,
    height: 116,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 14,
    boxShadow: "0px 0px 8px rgba(233, 232, 237, 0.5)",
    borderRadius: 8,
    paddingTop: 10,
    "&:hover": {
        cursor: 'pointer'
    }
  },
  topMargin: {
    marginTop: 10,
  },
  imageDiv: {
    width: 50,
    height: 50,
    backgroundColor: "#F2F5FF",
    borderRadius: 8,
  },
  image: {
    width: 33.33,
    height: 33.33,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    top: 8.33,
    position: "relative",
  },
});

const GammaCard = (props: GammaCardProps) => {
    const {image, title, onClick} = props
    const styles = useStyles()

    return (
        <div className={styles.main} onClick={onClick}>
            <div className={styles.topMargin}>
                <div className={styles.imageDiv}>
                    <img src={image} alt="Image" className={styles.image} />
                </div>
            </div>
            <div>
                <TypographyComponent variant="body5" text={title} color="secondary.main" />
            </div>
        </div>
    )
}

export default GammaCard