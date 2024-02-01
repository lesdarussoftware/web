import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import ScrollReveal from "scrollreveal";

export function Contact() {

    useEffect(() => {
        ScrollReveal().reveal('.contactContainer')
    }, [])

    return (
        <article className="contactContainer">
            <div className="socialIconContainer">
                <div>
                    <FaInstagram className="socialIcon" />
                    <p><a href="https://www.instagram.com/lesdarus/" target="_blank">/lesdarus</a></p>
                </div>
                <div>
                    <CgMail className="socialIcon" />
                    <p>lesdarusweb@gmail.com</p>
                </div>
            </div>
        </article>
    )
}