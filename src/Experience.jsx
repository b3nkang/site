import { useEffect, useState } from "react"
import './App.css'
import ExperienceItem from "./components/ExperienceItem"

function Experience({nextSectionRef, color = {r:0,g:0,b:0,a:1.0,}}){
    // const divStyling = {
    //     backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
    // }
    const [divStyling, setDivStyling] = useState({ 
        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        position: `relative`
    })

    const [refStyling, setRefStyling] = useState({})
    const [wave0Styling, setWave0Styling] = useState({})
    const [wave1Styling, setWave1Styling] = useState({})
    const [wave2Styling, setWave2Styling] = useState({})
    const [wave3Styling, setWave3Styling] = useState({})
    const [wave4Styling, setWave4Styling] = useState({})
    const [iconStyling, setIconStyling] = useState({ opacity: 0 })
    const waveSetStateArray = [setWave0Styling,setWave1Styling,setWave2Styling,setWave3Styling,setWave4Styling]
    const expWaveColorArray = [
        { backgroundColor: 'rgba(47,47,47,1.0)' },
        { backgroundColor: 'rgba(80,80,80,1.0)' },
        { backgroundColor: 'rgba(120,120,120,1.0)' },
        { backgroundColor: 'rgba(205,205,205,1.0)' },
        { backgroundColor: 'rgba(235,235,235,1.0)' }
    ]

    useEffect(() => {
        function checkRefLocation() {
            if (nextSectionRef.current) {
                if (nextSectionRef.current.getBoundingClientRect().top < 0) {
                    setRefStyling({ 
                        // backgroundColor: 'rgba(255, 255, 255, 1.0)', 
                        backgroundColor: 'rgba(25,25,25,1.0)', 
                        // boxShadow: `0px 0px 0px 30px rgba(255, 255, 255, 1.0)`
                    });
                                        
                    setDivStyling({        
                        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
                        // position: 'fixed'
                    })

                    setIconStyling({ 
                        width: "52px",
                        height: "52px",
                        borderRadius: "4px",
                        marginBottom: "4px",
                        opacity: 1, 
                        transition: "opacity 1.75s ease-in-out" 
                    })

                    for (let i = 0; i < 5; i++) {
                        waveSetStateArray[i](expWaveColorArray[i])
                    }

                    console.log("Set ref styling to grey");
                } else {
                    setRefStyling({ backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})` });
                    waveSetStateArray.forEach((setter) => {
                        setter({ backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})` })
                    })

                    setIconStyling({
                        width: "52px",
                        height: "52px",
                        borderRadius: "4px",
                        marginBottom: "4px",
                        opacity: 0, 
                        transition: "opacity 1.75s ease-in-out" 
                    })
                    console.log("Reset ref styling to original color");
                }
            } else {
                console.log("nextSectionRef.current is null");
            }
        }
        window.addEventListener('scroll', checkRefLocation)
        checkRefLocation();

        return () => {
            window.removeEventListener("scroll", checkRefLocation);
        };
    }, [])

    return(
        <div className="panelEd" style={divStyling}>
            <div className={`expPanel`} style={refStyling}>
                <div className="wave0" style={wave0Styling}>
                    <div className="wave1" style={wave1Styling}>
                        <div className="wave2" style={wave2Styling}>
                            <div className="wave3" style={wave3Styling}>
                                <div className="expCont"><h2>past experience</h2></div>
                                <div className="wave4" style={wave4Styling}>
                                    <ExperienceItem
                                        imgSrc={"/src/assets/images/intus_care_logo.jpeg"} 
                                        alt={"Intus Care logo"}
                                        name="Intus Care"
                                        title="Software Engineering Intern"
                                        period="Jun. 2024 – Aug. 2024"
                                        location="Cambridge, MA"
                                        desc="Incoming for summer 2024."
                                        iconStyling={iconStyling}
                                    />
                                    <ExperienceItem 
                                        imgSrc={"/src/assets/images/usereferme_logo.jpeg"} 
                                        alt={"Refer Me logo"}
                                        name="Refer Me"
                                        title="Software Engineering Intern"
                                        period="Feb. 2024 – Apr. 2024"
                                        location="(Remote) Seattle, WA"
                                        desc="Engineered job scraper with bs4/Selenium, utilizing instructor & Pydantic to extract JSON via OpenAI's API. Reduced scraper API costs by 10^3% ($0.01 to $0.0005/call) via chunking inputs and model downgrades while holding 98% accuracy."
                                        iconStyling={iconStyling}
                                    />
                                    <ExperienceItem 
                                        imgSrc={"/src/assets/images/letsift_logo.jpeg"} 
                                        alt={"Sift logo"}
                                        name="Sift"
                                        title="Software Engineering Intern"
                                        period="Nov. 2023 – Jan. 2024"
                                        location="Providence, RI"
                                        desc="Led homepage migration to React/TypeScript/Next.js stack, deprecating thousands of lines of code. Optimized site performance with React Lazy Load, Next.js Image and server-side rendering to achieve Lighthouse SEO score of 100."
                                        iconStyling={iconStyling}
                                    />
                                    <ExperienceItem
                                        imgSrc={"/src/assets/images/cims_logo.jpeg"} 
                                        alt={"NYU Courant logo"}
                                        name="AI & Predictive Analytics Lab"
                                        title="Visiting Researcher, NYU Courant"
                                        period="June 2023 – Oct. 2023"
                                        location="New York, NY"
                                        desc="Built world’s largest corpus of queryable LENR research on AI & Low-Energy Nuclear Reactions (AI-LENR) team. Co-authored paper in IEEE ICBDA 2024 and was main contributor to LENRdashboard.com, built with D3.js, JS, HTML/CSS."
                                        bottomPadding={0}
                                        mt={4.5}
                                        mb={0}
                                        iconStyling={iconStyling}
                                    />  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;