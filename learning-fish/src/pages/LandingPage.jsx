import React from 'react'
import './LandingPage.css';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import SmallCard from '../components/SmallCard';
import BigCard from '../components/BigCard';
import FootText from '../components/FootText';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <div className="detailTabs">
                <div className="left">
                    <SmallCard title="Recommends Learning Materials" text="Explore personalized learning resources tailored to your interests and goals, ensuring engaging study sessions catered just for you." image="rectangle" />
                    <SmallCard title="Creates Personalized Study Plans" text="Craft personalized study plans aligned with your goals and schedule, maximizing productivity." image="circle" />
                </div>
                <BigCard />
                <div className="right">
                    <SmallCard title="Skill Recommendation" text="Transform Your Learning Journey: Personalized Skill Recommendations Propel Your Expertise Forward, Navigating Your Path to Success." image="circle" />
                    <SmallCard title="Creates Personalized Study Plans" text="Craft personalized study plans aligned with your goals and schedule, maximizing productivity." image="rectangle" />
                </div>
            </div>
            <FootText />
            <Footer />
        </>
    )
}

export default LandingPage