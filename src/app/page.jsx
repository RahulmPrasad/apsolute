import React from "react";
import Navbar from "@/components/Navbar";
// import ScrollProgress from "@/components/ScrollProgress";
import MousePointer from "@/components/MousePointer";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import ServiceItem from "@/components/ServiceItem";
import ContentWrapper from "@/components/ContentWrapper";
import ScrollFloat from "@/components/ScrollFloat";
import TiltedCard from "@/components/TiltedCard";
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack'
import ProjectCard from "@/components/ProjectCard";

const Home = () => {
  return (
    <>
       {/* Spring mouse pointer */}
      <MousePointer />

      {/* Scroll progress bar */}
      {/* <ScrollProgress /> */}
      <Navbar />

      <section className="Hero">
        <div className="container">
          <div className="hero-wrapper">
              <div className="hero-content-box">
                 <div className="hero-content">
                    <h4> Precision Guaranteed </h4>
                    <h2> We're Your Most trusted Inspection partner </h2>
                    <p> Independent third-party inspection and QA services <br/> you can rely on to minimize risks </p>
                 </div>
                
                 <div className="button-wrapper">
                 <button className="hero-btn-1">Get Started Now</button>
                 <button className="hero-btn-2">Learn More
                   <span className="material-symbols-outlined">north_east</span>
                 </button>
                 </div>

                 <div className="company-highlights">
                    <div className="company-title">
                    <h4> Trusted By Company All Over the world</h4>
                    </div>

                  <div className="company-wrapper">
                    {/* <div className="company-items">
                        <img src="/images/12.png" alt="Logo" />
                    </div>

                    <div className="company-items">
                        <img src="/images/13.png" alt="Logo" />
                    </div>

                    <div className="company-items">
                        <img src="/images/14.png" alt="Logo" />
                    </div> */}
                    <li>
                      <img src="/images/12.png" alt="Logo" />
                    </li>

                    <li>
                      <img src="/images/13.png" alt="Logo" />
                    </li>

                    <li>
                      <img src="/images/14.png" alt="Logo" />
                    </li>
                  </div>

                 </div>

              </div>
              <div className="hero-img-box">
                  <div className="hero-img">
                    <img src="/images/hero3.jpeg" alt="Logo" />
                  </div>

                  <div className="hero-float">

                  </div>
              </div>
          </div>
        </div>

      </section>


      <section className="Count">
        <div className="container">
          <div className="count-wrapper">
           <div className="count-items-wrapper">
             <Counter target={6471} label="ACTIVE INSPECTORS" />
             <Counter target={105} label="SATISFIED CLIENTS" />
             <Counter target={3271} label="COMPLETED PROJECTS" />
           </div>
          </div>
        </div>

      </section>

      <section className="About">
        <div className="container">
          <div className="about-wrapper">
           <div className="about-img-wrapper">
            <div className="about-img">
              <TiltedCard
  imageSrc="/images/18.jpeg"
  captionText=""
  containerHeight="70vh"
  containerWidth="100%"
  imageHeight="100%"
  imageWidth="100%"
  rotateAmplitude={12}

  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
/>
            </div> 
           </div>

           <div className="about-content">

            {/* <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                    >
                    hii
            </ScrollFloat> */}
            <ContentWrapper 
              content="About Us"
              title="Third Party Inspections You Can Trust"
              description="Apsolute provides professional third-party inspections and audits, delivering accurate and trustworthy results."
              data="Learn More"
            >

              <div className="about-item-wrapper">
                <div className="about-item">
                  <span className="material-symbols-outlined">handshake</span>
                  <div className="about-item-content">
                   <h3>Trusted Partner</h3>
                   <p>Delivering accurate inspections every time</p>
                  </div>
                </div>

                <div className="about-item">
                  <span className="material-symbols-outlined">check_circle</span>
                  <div className="about-item-content">
                   <h3>Quality Assurance</h3>
                   <p>Ensuring compliance with global standards</p>
                  </div>
                </div>

              </div>
            </ContentWrapper>

           </div>
          </div>
        </div>
      </section>


      <section className="Choose">
        <div className="container">
         <div className="choose-wrapper">
          <div className="choose-content">
           <div className="choose-title">
            <h3>We Are a <br></br> Choice for trust</h3>
            <p>We are a strategic choice for global <br></br>quality assurance.</p>
           </div>

           <button className="choose-btn"><i className="fa-solid fa-circle-play"></i> Watch Video Guide</button>
          </div>

          <div className="choose-service">
            <ServiceItem
            icon="fa-solid fa-helmet-safety" 
            title="Expert Inspectors"
            description="Certified and industry-experienced teams"
          />
          <ServiceItem
            icon="fa-regular fa-file-lines"
            title="Trusted Reports"
            description="Clear, accurate, and unbiased documentation"
          />
          <ServiceItem
            icon="fas fa-globe"
            title="Global Reach"
            description="Serving oil & gas, petrochemicals and infrastructure"
          />
          <ServiceItem
            icon="fa-solid fa-gear"
            title="Compliance First"
            description="Aligned with ISO, ASME, API, and IBR standards"
          />
          </div>
         </div>
        </div>
      </section>

      <section className="Operation">
        <div className="container">
          <div className="operation-head">
            <h4>What We Do</h4>
            <h2>Inspection Services Built for Critical Industries</h2>
            <p>From factory floor to offshore platform, every inspection is carried out to international standards.</p>
          </div>

          <div className="operation-wrapper">
            <ScrollStack>
              <ScrollStackItem>
                <ProjectCard
                index={1}
                total={4}
                title="Preshipment Inspection"
                description="Aligned with ISO, ASME, API, and IBR standards" 
                content="Preshipment inspection ensures product quality, quantity, and compliance before dispatch, verifying specifications, packaging, and standards to reduce risks, prevent defects, and protect buyers and suppliers."
                tag="NDT"
                src="/images/20.jpg"
                />
              </ScrollStackItem>

              <ScrollStackItem>
                <ProjectCard
                index={2}
                total={4}
                title="Welding Inspection"
                description="Aligned with ISO, ASME, API, and IBR standards" 
                content="Welding inspection verifies weld quality, strength, and compliance using visual and advanced testing methods, ensuring defect-free joints, structural safety, and long-term durability across various industrial applications."
                src="/images/17.jpg"
                />
              </ScrollStackItem>

              <ScrollStackItem>
                <ProjectCard
                index={3}
                total={4}
                title="Onshore Inspection"
                description="Aligned with ISO, ASME, API, and IBR standards" 
                content="Onshore inspection evaluates industrial facilities, pipelines, structures, and equipment for quality, safety, and compliance, detecting issues early to ensure reliability, reduce downtime, and maintain operational performance."
                src="/images/19.jpg"
                />
              </ScrollStackItem>

              <ScrollStackItem>
                <ProjectCard
                index={4}
                total={4}
                title="Offshore Inspection"
                description="Aligned with ISO, ASME, API, and IBR standards" 
                content="Offshore inspection ensures structural integrity, safety, and compliance of marine and oil-gas assets, identifying defects early to prevent failures, optimize maintenance, and protect operations in challenging ocean environments."
                src="/images/18.jpg"
                />
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;