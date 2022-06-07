import { makeStyles } from "@mui/styles"
import React from "react"
import Footer from "../../components/molecules/Footer"
import Jumbotron from "../../components/molecules/Jumbotron"
import PrimaryCardList from "../../components/molecules/PrimaryCardList"
import SearchBar from "../../components/molecules/SearchBar"
import GammaCardList from "../../components/organisms/GammaCardList"
import Header from "../../components/organisms/Header"
import SecondaryCardList from "../../components/organisms/SecondaryCardList"
import HomePageTemplate from "../../components/templates/HomePageTemplate"
import BodyTest from '../../../public/assets/images/bodytest.svg';
import CardiacTest from '../../../public/assets/images/cardiac.svg'
import StressTest from '../../../public/assets/images/stress.svg'
import TestimonialCard from "../../components/molecules/TestimonialCard"
import FAQs from "../../components/molecules/FAQs"

const HomePage = () => {
    return (
        <>
            <HomePageTemplate searchBar={<SearchBar />} 
            header={<Header activeItem={"Home"} />} 
            footer={<Footer />} 
            jumbotron={<Jumbotron />}
            gammaCardList={<GammaCardList />}
            primaryCardList={<PrimaryCardList />}
            testimonialCard={<TestimonialCard />}
            secondaryCardList={<SecondaryCardList variant="square" src={[BodyTest, CardiacTest, StressTest]} title={['Full Body Checkup', 'Cardiac Risk Assessment', 'Stress Assessment']}/>}
            faqs={<FAQs />}
            />
        </>
    )
}

export default HomePage