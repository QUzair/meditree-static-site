import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import featureImage from "../../static/images/hero.png";
import thumbnailEvent from "../../static/images/all_funcs_view.png"
import thumbnailBoard from "../../static/images/backlog_view.png"
import thumbnailNews from "../../static/images/notification_view.png"
import thumbnailTeams from "../../static/images/analysis.png"
import thumbnailStaff from "../../static/images/doctors.jpg"
import meditree_demo_gif from "../../static/images/demo_vid.gif"

import TextLoop from "react-text-loop";
import Fade from 'react-reveal/Fade';

const IndexPage = () => (
    <Layout>
        <SEO title="Make your Workflows Smarter" />

        <div className={"page-header home"}>
            <h1>Make your Workflows <TextLoop>
                <div>Smarter</div>
                <div >Faster</div>
                <div>Cheaper</div>
                <div>Transparent</div>
                <div>Automated</div>
            </TextLoop>{" "}</h1>
            <p>MediTree offers a self-learning digital platform for medical professionals to access, collaborate and publish on predefined medical documents. All while providing analytics on orders and requests being carried out to enhance administrative decisions.</p>
            <img alt={"Demo"} src={meditree_demo_gif} />
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <Fade left>
                    <div className={"feature__item"}>
                        <div className={"row"}>
                            <div className={"col-6 first"}>
                                <div className={"thumbnail"}>
                                    <img alt={"Event"} src={thumbnailEvent} />
                                </div>
                            </div>

                            <div className={"col-6"}>
                                <div className={"feature__content"}>
                                    <h2>Automate Records</h2>
                                    <p>Save your time and energy by letting MediTree to manage recurrent medical documents (automate document fields prior to request)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade right>
                    <div className={"feature__item"}>
                        <div className={"row"}>
                            <div className={"col-6"}>
                                <div className={"feature__content"}>
                                    <h2>Manage Backlog </h2>
                                    <p>View all recent requests and their details to carry out on the go, for a more mobile experience.</p>
                                </div>
                            </div>

                            <div className={"col-6 first"}>
                                <div className={"thumbnail"}>
                                    <img alt={"Board"} src={thumbnailBoard} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade left>
                    <div className={"feature__item"}>
                        <div className={"row"}>
                            <div className={"col-6 first"}>
                                <div className={"thumbnail"}>
                                    <img alt={"News"} src={thumbnailNews} />
                                </div>
                            </div>

                            <div className={"col-6"}>
                                <div className={"feature__content"}>
                                    <h2>Notifications</h2>
                                    <p>Be notified immediately about result of request to cater patient diagnosis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade right>
                    <div className={"feature__item"}>
                        <div className={"row"}>
                            <div className={"col-6"}>
                                <div className={"feature__content"}>
                                    <h2>Make Data-Driven Decisions</h2>
                                    <p>MediTree allows data-driven administrative decisions to be made, with checkpointed workflows. MediTree highlights any inefficiencies, such as, latency of requests, bottleneck in testing and more.</p>
                                </div>
                            </div>

                            <div className={"col-6 first"}>
                                <div className={"thumbnail"}>
                                    <img alt={"Team"} src={thumbnailTeams} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade left>
                    <div className={"feature__item"}>
                        <div className={"row"}>
                            <div className={"col-6 first"}>
                                <div className={"thumbnail"}>
                                    <img alt={"Users"} src={thumbnailStaff} />
                                </div>
                            </div>

                            <div className={"col-6"}>
                                <div className={"feature__content"}>
                                    <h2>Staff management</h2>
                                    <p>Manage staff performance, by viewinig daily workload, even highlight need for better resource allocation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Sign up for free</h2>
                    <p>Sign up and start increasing the productivity of your medical staff with MediTree.</p>
                </div>

                <div className={"button"}>
                    <a href="meditree.tech@gmail.com" target={"_blank"}>Get Started</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
