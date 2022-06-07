import { useEffect, useState } from "react";
import getReportsService from "../../service/getReports";

export const getAllReports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        getReportsService().then((res) => { 
            setReports(res) 
        }).catch((err) => {throw err; })
    }, [])

    return reports;
}