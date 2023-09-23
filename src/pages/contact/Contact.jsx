import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
} from 'react-icons/fa'
import { BsCheckCircle } from 'react-icons/bs'
import { BiMessageError } from 'react-icons/bi'
import { FiSend } from 'react-icons/fi'
import './Contact.css'

const Contact = () => {

    const [succesMessage, setsuccesMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        let timer__error;
        let timer__succes;
        if (succesMessage) {
            timer__succes = setTimeout(() => {
                setsuccesMessage(false)
            }, 5000)
        } else
            if (errorMessage) {
                timer__error = setTimeout(() => {
                    setErrorMessage(false)
                }, 5000)
            }

        return () => {
            clearTimeout(timer__succes)
            clearTimeout(timer__error)
        }
    }, [succesMessage, errorMessage])



    const handleSubmit = (e) => {
        setLoader(true)
        e.preventDefault();
        const form = e.target;


        const formData = new FormData(form);
        const name = formData.get("to_name").trim();
        const email = formData.get("from_name").trim();
        const subject = formData.get("from_subject").trim();
        const message = formData.get("message").trim();

        if (
            name.trim().length &&
            email.trim().length &&
            subject.trim().length &&
            message.trim().length
        ) {
            emailjs.sendForm('service_aeyoknt', 'template_k7pv56j', form, '4ZhzVSguJdTXpExH9')
                .then((result) => {
                    setsuccesMessage(true)
                    setLoader(false)
                    console.log(result.text);
                }, (error) => {
                    setErrorMessage(true)
                    setLoader(false)
                    console.log(error.text);
                });
            form.reset();
        } else {
            setLoader(false)
            setErrorMessage(true)
        }
    }
    return (
        <>
            {succesMessage && (
                <div className="container__message">
                    <div className="disappearing-element"></div>
                    <div className="message__icon"><BsCheckCircle /></div>
                    <p className="h1__message">Success</p>
                    <p className="p__message">Thank you for taking the time to contact us.
                        We will get back to you as soon as possible.</p>
                    <p onClick={() => setsuccesMessage(!succesMessage)} className="p__continue">Continue</p>
                </div>
            )}

            {errorMessage && (
                <div className="container__message">
                    <div className="disappearing-element"></div>
                    <div className="message__icon" ><BiMessageError /></div>
                    <p className="h1__message">Error</p>
                    <p className="p__message">Please fill in all the fields or check your connection</p>
                    <p onClick={() => setErrorMessage(!errorMessage)} className="p__continue">Continue</p>
                </div>
            )}
            <section className="contact section">
                <h2 className="section__title">
                    Get In <span>Touch</span>
                </h2>

                <div className="contact__container container grid">
                    <div className="contact__data">
                        <h3 className="contact__title">Don't be Shy !</h3>

                        <p className="contact__description">
                            Feel free to get in touch with me.
                            I am always open to discussing new projects,
                            creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="contact__info">
                            <div className="info__item">
                                <FaEnvelopeOpen className="info__icon" />

                                <div>
                                    <span className="info__title">Mail Me</span>
                                    <h4 className="info__desc">syllasiaka227@gmail.com</h4>
                                </div>
                            </div>

                            <div className="info__item">
                                <FaPhoneSquareAlt className="info__icon" />

                                <div>
                                    <span className="info__title">Call Me</span>
                                    <h4 className="info__desc">+225 05 44 84 92 56</h4>
                                </div>
                            </div>
                        </div>

                        <div className="contact__socials">
                            <a href="https://facebook.com" target='blanc' className="contact__social-link">
                                <FaFacebookF />
                            </a>

                            <a href="https://facebook.com" target='blanc' className="contact__social-link">
                                <FaLinkedin />
                            </a>

                            <a href="https://facebook.com" target='blanc' className="contact__social-link">
                                <FaTwitter />
                            </a>

                            <a href="https://facebook.com" target='blanc' className="contact__social-link">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="contact__form">
                        <div className="form__input-div">
                            <div className="form__input-group">
                                <input
                                    type="text"
                                    name="to_name"
                                    className="form__control"
                                    placeholder="Your Name"
                                />
                                <input
                                    type="email"
                                    name="from_name"
                                    className="form__control"
                                    placeholder="Your Email"
                                />
                                <input
                                    type="text"
                                    name="from_subject"
                                    className="form__control"
                                    placeholder="Your subject"
                                />
                            </div>
                        </div>

                        <div className="form__input-div">
                            <textarea
                                className="form__control textarea"
                                placeholder="Your Message"
                                name="message"
                            >
                            </textarea>
                        </div>
                        <div className="loader__and-button-container">
                            <button className="button">
                                Send Message
                                <span className="button__icon contact__button-icon">
                                    <FiSend />
                                </span>
                            </button>
                            {loader && (
                                <div className="container__loader">
                                    <div className="loader"></div>
                                </div>
                            )}
                        </div>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Contact