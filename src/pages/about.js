import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import informationImage from "../../static/images/Information-document.svg";
import eventImage from "../../static/images/Event-managment.svg";
import ProductivityImage from "../../static/images/Increase-Productivity.svg";
import happinessImage from "../../static/images/Make-happiness.svg";

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>

        <div className={"page-header"}>
            <h2>What’s MediTree?</h2>
            <p>MediTree aims to solce operational inefficiencies in Healthcare workflows<br />to increase customer and medical staff satisfaction and make data-driven admin de.</p>
        </div>

        <div className={"container"}>
            <div className={"targets"}>
                <div className={"title"}>
                    <h2>Our Targets</h2>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Information"} src={informationImage}/>
                            <h3>Prevent Data Leakage</h3>
                            <p>Manual workflows open up several inefficiencies by using non-digital mediums. In the 20th Century mass computations on machine-readable has been a staple of our recent advances. Everyday we gain data which we can use to make better decisions for future circumstances.</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Event"} src={eventImage}/>
                            <h3>Manage Workflows</h3>
                            <p>Within the busy busy schedules of Medical professinals, MediTree offers all their functionalities at their fingertips, the mobilised experience, further enhances doctor to patient time and subsequently, patient satisfaction.</p>
                        </div>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Productivity"} src={ProductivityImage}/>
                            <h3>Communication Efficacy</h3>
                            <p>Reuqests and Results between departments can be shared easily, removing the intermediary transport of manual documents.</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Happiness"} src={happinessImage}/>
                            <h3>Reduce Workload</h3>
                            <p>Doctors have large daily workloads and most (40-60%), of these tasks are recurrent. Over time, MediTree can learn these tasks and provide predefined templates, which would subsequently cut 40-60% of these tasks. The templates fields would be predefine and the Doctor can approve of the fields prior to sending, rather than write them manually.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage
