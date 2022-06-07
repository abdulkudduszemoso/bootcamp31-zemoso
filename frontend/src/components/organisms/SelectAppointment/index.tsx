import { makeStyles } from "@mui/styles"
import React, { useEffect, useState } from "react"
import TypographyComponent from "../../atoms/Typography/index"
import {Days, Months, Time} from '../../../utils/constants'
import { Chip } from "@mui/material"
import { Colors } from "../../../theme/theme"
import GrayArrow from '../../../../public/assets/images/arrow_gray.svg'

const useStyles = makeStyles({
    main: {
        position: 'relative',
        width: 583,
        height: 780,
        boxShadow: "0px 0px 8px rgba(233, 232, 237, 0.5)"
    },
    container: {
        position: 'absolute',
        width: 470,
        height: 660,
        left: 24,
        top: 24
    },
    elements: {
        display: 'flex',
        flexDirection: 'column',
        gap: 48
    },
    monthsDiv: {
        display: 'flex',
        flexDirection: 'row',
        gap: 22,
        overflowX: 'hidden'
    },
    monthChip: {
        width: '142px !important',
        height: '40px !important',
        borderRadius: 12,
        backgroundColor: Colors.chip_background + '!important',
    },
    chipDefault: {
        backgroundColor: Colors.chip_background + '!important',
    },
    chipSelected: {
        backgroundColor: Colors.chip_selected + '!important'
    },
    dayAndDateDiv: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16
    },
    dayChip: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        width: 65,
        height: 76,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        "&:hover": {
            cursor: 'pointer'
        }
    },
    timeAndTimeSelectionDiv: {
        width: 378,
        height: 144,
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        gap: 10
    },
    timeAndTimeSelectionDiv2: {
        width: 378,
        height: 92,
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        gap: 10
    },
    morningDiv: {
        width: 268,
        height: 144,
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px 4px'
    },
    afternoonDiv: {
        width: 268,
        height: 92,
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px 12px'
    },
    eveningDiv: {
        width: 268,
        height: 40,
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px 4px'
    },
    timeChip: {
        width: 128,
        height: 40,
        borderRadius: 12
    },
    monthsContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        gap: 25,
    },
    dayAndDateContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        gap: 25
    },
    imgDiv: {
        width: 24,
        height: 24,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 8,
        left: 480
    },
    imgDiv2: {
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 25,
        left: -5
    },
    leftArrowImg: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        transform: 'rotate(180deg)'
    },
    typoDiv: {
        width: 110
    }
})

export interface SelectAppointmentProps {
    monthSelected?: (key: number) => void;
    dateSelected?: (key: number) => void;
    timeSelected?: (key: number) => void;
    selectedMonth?: number;
    selectedDate?: number;
    selectedTime?: number;
}



const SelectAppointment = ({monthSelected, dateSelected, timeSelected, selectedDate, selectedMonth, selectedTime }: SelectAppointmentProps) => {
    const styles = useStyles()


    const fun1 = (a:number,b:number)=>{
      return  Time.slice(a,b).map((item) => {
            return (
                <Chip  className={`${styles.timeChip} ${item.index === selectedTime ? styles.chipSelected : styles.chipDefault}`}
                onClick={() => timeSelected!(item.index)}
                label={<TypographyComponent text={item.time.replaceAll(/AM|PM/g, "")} 
                variant="body3" color={item.index === selectedTime ? "white" : "secondary.main" }
                />} key={item.index} />
            )
        })
    }

    const [lowerMonthCount, setLowerMonthCount] = useState(0)
    const [upperMonthCount, setUpperMonthCount] = useState(3)

    const [lowerDayCount, setLowerDayCount] = useState(0);
    const [upperDayCount, setUpperDayCount] = useState(6);

    const handleRightClick = () => {
        if(upperMonthCount != 12) {
            setLowerMonthCount(lowerMonthCount+3)
            setUpperMonthCount(upperMonthCount+3)
        }
    }
    
    const handleLeftClick = () => {
        if(lowerMonthCount != 0) {
            setLowerMonthCount(lowerMonthCount-3)
            setUpperMonthCount(upperMonthCount-3)
        }
    }

    const handleRightDayClick = () => {
        if(upperDayCount < 30) {
            setLowerDayCount(lowerDayCount+6);
            setUpperDayCount(upperDayCount+6);
        }
    }

    const handleLeftDayClick = () => {
        if(lowerDayCount != 0) {
            setLowerDayCount(lowerDayCount-6);
            setUpperDayCount(upperDayCount-6);
        }
    }

    useEffect(() => {
    }, [lowerMonthCount, upperMonthCount])

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.elements}>
                    <TypographyComponent variant="heading4" color="secondary.dark" text="Select Appointment" />
                    <div className={styles.monthsContainer}>
                        {lowerMonthCount !== 0 && <div className={styles.leftArrowImg}>
                                <img src={GrayArrow} alt="arrow" width={6} height={12} onClick={handleLeftClick} />
                            </div> 
                        }
                        <div className={styles.monthsDiv}>
                            {Months.slice(lowerMonthCount, upperMonthCount).map((item, index) => {
                                return (
                                    <Chip className={`${styles.monthChip} ${item.index === selectedMonth ? styles.chipSelected : styles.chipDefault}`} 
                                    onClick={() => monthSelected!(item.index)} label={<TypographyComponent text={item.month} 
                                    variant="body3" color={item.index === selectedMonth ? "white" : "secondary.main" } />} key={index} />
                                )
                            })}
                        </div>
                        <div className={styles.imgDiv}>
                            <img src={GrayArrow} alt="arrow" width={6} height={12} onClick={handleRightClick} />
                        </div>
                    </div>
                    <div className={styles.dayAndDateContainer}>
                    {lowerDayCount !== 0 && <div className={styles.leftArrowImg}>
                                <img src={GrayArrow} alt="arrow" width={6} height={12} onClick={handleLeftDayClick} />
                            </div> 
                        }
                        <div className={styles.dayAndDateDiv}>
                            {Days.slice(lowerDayCount, upperDayCount).map((item, index) => {
                                return (
                                    <div className={`${styles.dayChip} ${item.index === selectedDate ? styles.chipSelected : styles.chipDefault}`} 
                                    onClick={() => dateSelected!(item.index)} key={index}>
                                        <TypographyComponent text={item.day} variant="body5" color={item.index === selectedDate ? "white" : "secondary.light" } />
                                        <TypographyComponent text={item.date} variant="heading2" color={item.index === selectedDate ? "white" : "secondary.main" } />
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.imgDiv2}>
                            <img src={GrayArrow} alt="arrow" width={6} height={12} onClick={handleRightDayClick} />
                        </div>
                    </div>
                    <div className={styles.timeAndTimeSelectionDiv}>
                        <div className={styles.typoDiv}>
                            <TypographyComponent text="06 AM - 12 AM" color="secondary.dark" variant="body1" />
                        </div>
                        <div className={styles.morningDiv}>
                            {fun1(0,6)}
                        </div>
                    </div>
                    <div className={styles.timeAndTimeSelectionDiv2}>
                        <TypographyComponent text="12 PM - 04 PM" color="secondary.dark" variant="body1" />
                        <div className={styles.afternoonDiv}>
                            {fun1(6,10)}
                        </div>
                    </div>
                    <div className={styles.timeAndTimeSelectionDiv2}>
                        <div className={styles.typoDiv}>
                            <TypographyComponent text="04 PM - 06 PM" color="secondary.dark" variant="body1" />
                        </div>
                        <div className={styles.eveningDiv}>
                            {fun1(10,12)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectAppointment
