import React from "react";
import "./styles.scss";

import airplaneIcon from "../../UI/Icons/airplane.svg";
import lupaIcon from "../../UI/Icons/loupe.svg";

function Index() {
    return (
        <div className="index">
            <section className="animation">
                <div className="upLoad" />
                <div className="downLoad" />
            </section>
            <iframe
                width="100%"
                height="100%"
                controls="0"
                src="https://www.youtube.com/embed/Wiw5kYi1TL0?start=2300&hd=1&autoplay=1&loop=1&autopause=0&mute=1"
                frameborder="0"
            ></iframe>
            <div className="container">
                <div className="box">
                    <header>
                        <img src={airplaneIcon} className="airplaneIcon" />
                        <div className="pages">
                            <div className="pagesItem">
                                <a href="#">Home</a>
                            </div>
                            <div className="pagesItem">
                                <a href="#">About us</a>
                            </div>
                            <div className="pagesItem">
                                <a href="#">Our Services</a>
                            </div>
                            <div className="pagesItem">
                                <a href="#">Places</a>
                            </div>
                            <div className="pagesItem">
                                <a href="#">Contact</a>
                            </div>
                        </div>
                        <div className="search">
                            <div className="searchContainer">
                                <input
                                    type="text"
                                    placeholder="Search by Places"
                                />
                                <img src={lupaIcon} alt="" />
                            </div>
                        </div>
                    </header>

                    <footer>
                        <div className="myCredits">
                            Created by:{" "}
                            <div className="creditContainer">
                                <a
                                    className="name"
                                    target="_blank"
                                    href="https://github.com/Rgnwld?tab=repositories"
                                >
                                    Reginaldo Filho
                                </a>
                            </div>
                        </div>
                        <div className="credits">
                            Inspired on:{" "}
                            <div className="creditContainer">
                                <a
                                    className="name"
                                    target="_blank"
                                    href="https://www.instagram.com/p/Bv2WK01BPSR/"
                                >
                                    Daniel Snows Design
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Index;
