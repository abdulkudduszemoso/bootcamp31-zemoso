import { ThemeProvider } from "@mui/material"
import React from "react"
import theme from "./theme/theme"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReportsPage from "./pages/ReportPage";
import ListPatientDetailsPage from "./pages/ListPatientsPage";
import AddAddressPage from "./pages/AddAddressPage";
import AddPatientDetailsPage from "./pages/AddPatientDetailsPage";
import Appointment from "./pages/AppointmentPage";
import CheckoutPage from "./pages/CheckoutPage";
import LabTest from "./pages/LabTest";
import OrderTrackingPage from "./pages/OrderTrackingPage";
import ReviewOrderPage from "./pages/ReviewOrderPage";
import SelectAddressPage from "./pages/SelectAddressPage";
import TestInfoPage from "./pages/TestInfo";
import OrderPlaced from "./pages/OrderPlaced";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/reports" element={<ReportsPage />} />
                    <Route path="/patient-details" element={<ListPatientDetailsPage />} />
                    <Route path="/add-address" element={<AddAddressPage />} />
                    <Route path="/add-patient" element={<AddPatientDetailsPage />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/lab-test" element={<LabTest />} />
                    <Route path="/track-order" element={<OrderTrackingPage />} />
                    <Route path="/review-order" element={<ReviewOrderPage />} />
                    <Route path="/address-list" element={<SelectAddressPage />} />
                    <Route path="/test-info" element={<TestInfoPage />} />
                    <Route path="/order-placed" element={<OrderPlaced />} />
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default App