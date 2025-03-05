import '../static/About.css'
import image from '../img/Analysis.jpeg'
import image1 from '../img/Design.jpeg'
import image2 from '../img/Planning.jpeg'
import person from '../img/Person.jpeg'

function About() {
    return (
        <>
            <div className="main">
                <div className="row">
                    <div className="section">
                        <div className="left">
                        </div>
                        <div className="right">
                            <div className="title">
                                <p>About Us</p>
                            </div>
                            <div className="header">
                                <h1>Branding & Design Agency</h1>
                            </div>
                            <div className="text">
                                <p>
                                    We are Procreate Branding, a seasoned brand design and
                                    communication agency driving profitable growth for brands,
                                    leveraging end-to-end solutions. Critical thinking, precise
                                    strategies, brilliant design language and boundless …
                                </p>
                            </div>
                            <div className="btn mb-5">Learn More</div>
                        </div>
                    </div>
                    <div className="box-group mt-5">
                        <div className="box1">
                            <img src={image} alt="" />
                            <h2>Analysis</h2>
                            <div className="text1">
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                                    commodi quidem exercitationem quam dolor vel nostrum quaerat
                                    consequatur fuga omnis nam quibusdam numquam, blanditiis culpa
                                    aspernatur ullam ea. Ducimus, sit.
                                </p>
                                <div className="btn1">More</div>
                            </div>
                        </div>
                        <div className="box2">
                            <img src={image2} alt="" />
                            <h2>Planning</h2>
                            <div className="text1">
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                                    commodi quidem exercitationem quam dolor vel nostrum quaerat
                                    consequatur fuga omnis nam quibusdam numquam, blanditiis culpa
                                    aspernatur ullam ea. Ducimus, sit.
                                </p>
                                <div className="btn1">More</div>
                            </div>
                        </div>
                        <div className="box3">
                            <img src={image1} alt="" />
                            <h2>Design</h2>
                            <div className="text1">
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                                    commodi quidem exercitationem quam dolor vel nostrum quaerat
                                    consequatur fuga omnis nam quibusdam numquam, blanditiis culpa
                                    aspernatur ullam ea. Ducimus, sit.
                                </p>
                                <div className="btn1">More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;