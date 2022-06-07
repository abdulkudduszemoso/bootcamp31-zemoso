import { makeStyles } from "@mui/styles"
import React from "react"
import Buttons from "../../atoms/Button/index"
import TypographyComponent from "../../atoms/Typography/index"
import Plus from '../../../../public/assets/images/plus.svg'
import Image from '../../atoms/Image/index'
import { getAllPatients } from "./hook"
import SelectPatientCard from "../../molecules/SelectPatientCard/index"
import { PatientDetails } from "../AddPatient/index"

const useStyles = makeStyles({
    main: {
        position: 'relative',
        width: 583,
        height: 560,
        borderRadius: 8,
        boxShadow: "0px 0px 8px rgba(233, 232, 237, 0.5)"
    },
    topContainer: {
        width: 535,
        height: 42,
        position: 'absolute',
        left: 24,
        top: 24
    },
    textSelectAddress: {
        width: 146,
        height: 24,
        position: 'absolute',
        top: 9
    },
    textAddAddress: {
        position: 'absolute',
        top: 13,
        right: 16,
        display: 'flex',
        flexDirection: 'row',
        gap: 12.5
    },
    plusImg: {
        width: 12.5,
        height: 12.5
    },
    selectAddressContainer: {
        position: 'absolute',
        left: 24,
        top: 90
    },
    dataContainer: {
        position: 'absolute',
        top: 122,
        left: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 42,
        flexGrow: 1
    }
})

export interface SelectPatientsListProps {
    handleClick?: (data: PatientDetails) => void;
}

const SelectPatientsList = ({handleClick}: SelectPatientsListProps) => {
    
    const styles = useStyles()
    const patients: PatientDetails[] = getAllPatients();


    return (
        <div className={styles.main}>
            <div className={styles.topContainer}>
                <div className={styles.textSelectAddress}>
                    <TypographyComponent text="Add Patient" variant="heading4" color="secondary.main" />
                </div>
                <div className={styles.textAddAddress}>
                    <Buttons variant="text" name="New Patient" variantSize="text" startIcon={<Image src={Plus} alt="plus" />} />
                </div>
            </div>
            <div className={styles.dataContainer}>
                {patients.map((data, key) => {
                    return (
                        <div key={key}>
                            <SelectPatientCard patientName={data.patientName} 
                            relation={data.relation} age={data.dob + " years"}
                            gender={data.gender} key={data.id} 
                            checked={data.selected} onClick={() => handleClick!(data)} /> 
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SelectPatientsList