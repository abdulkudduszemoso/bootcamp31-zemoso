import { makeStyles } from "@mui/styles";
import React from "react";
import { CommonlyBookedTests as tests } from "../../../utils/constants";
import TypographyComponent from "../../atoms/Typography";
import GammaCard from "../../molecules/GammaCard";
import Arrow from "../../../../public/assets/images/arrow.svg";
import {useNavigate} from "react-router-dom"

let useStyles = makeStyles({
    main: {
        display: "flex",
        flexDirection: "column",
        gap: 40
    },
    list: {
        display: "flex",
        flexWrap: "wrap",
        gap: "18px 18px",
        width: 1186,
        height: 206,
    },
    text: {
        display: "flex",
        flexDirection: "row",
        gap: 870,
    },
    textImgDiv: {
        alignSelf: "center",
    },
    leftMargin: {
        marginLeft: 6
    }
});


let GammaCardList = () => {
  let styles = useStyles();

  let navigate = useNavigate()

  return (
    <div className={styles.main}>
        <div className={styles.text}>
            <TypographyComponent variant="heading1" text="Commonly Booked Test" />
            <div className={styles.textImgDiv}>
                <TypographyComponent
                variant="body5"
                text="See more"
                color="primary"
                />
                <img src={Arrow} className={styles.leftMargin} />
                <img src={Arrow} />
            </div>
        </div>
        <div className={styles.list}>
            {tests.map((item, index) => {
            return <GammaCard image={item.image} key={index} title={item.name} onClick={index === 1 ? () => navigate('/test-info') : undefined} />;
            })}
        </div>
    </div>
  );
};

export default GammaCardList;
