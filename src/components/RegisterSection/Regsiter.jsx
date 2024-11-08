import React, { useState, useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

function Register() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [isCommunityFormVisible, setIsCommunityFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        skills: [],
        mobile: '',
        purpose: ''
    });

    const toggleForm = () => {
        setIsCommunityFormVisible(!isCommunityFormVisible);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                skills: checked
                    ? [...prevData.skills, value]
                    : prevData.skills.filter((skill) => skill !== value),
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_zt4fg5t',
            'template_00c4kjd',
            {
                name: formData.name,
                email: formData.email,
                skills: formData.skills.join(', '),
                mobile: formData.mobile,
                purpose: formData.purpose,
            },
            'Xp9XHhe3UNLQ5et1I'
        )
            .then((result) => {
                alert("Message sent successfully!");
                setFormData({
                    name: '',
                    email: '',
                    skills: [],
                    mobile: '',
                    purpose: ''
                });
            }, (error) => {
                alert("Failed to send message. Please try again.");
            });
    };

    return (
        <div id="ConnectUs" className='bg-[#F1EFE3] register w-full px-8 lg:px-24 py-14'>
            <div className='flex w-full justify-center py-11' data-aos="flip-right">
                <button
                    className={isCommunityFormVisible ? "text-sm lg:text-lg bg-black text-white px-4 py-3 rounded-l-full" : "text-sm lg:text-lg border-2 border-black px-4 py-3 rounded-l-full"}
                    onClick={toggleForm}
                >
                    Join the Community
                </button>
                <button
                    className={!isCommunityFormVisible ? "text-sm lg:text-lg bg-black text-white px-4 py-3 rounded-r-full" : "text-sm lg:text-lg border-2 border-black px-4 py-3 rounded-r-full"}
                    onClick={toggleForm}
                >
                    Contact Team
                </button>
            </div>

            <form onSubmit={sendEmail} className='flex flex-col justify-center lg:w-[50%] mx-auto' data-aos='fade-up'> 
                <h2 className='text-center text-2xl font-bold'>Enter the details</h2>
                <div className='my-3'>
                    <p className='py-2 text-xl font-semibold'>Name:</p>
                    <input
                        placeholder='Enter the full name'
                        type='text'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className='w-full h-10 rounded-full px-4'
                        required
                    />
                </div>
                <div className='my-3'>
                    <p className='py-2 text-xl font-semibold'>Email:</p>
                    <input
                        placeholder='Enter the Email id'
                        type='email'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full h-10 rounded-full px-4'
                        required
                    />
                </div>
                {isCommunityFormVisible ? (
                    <>
                        <div className='my-3'>
                            <p className='py-2 text-xl font-semibold'>Skills we need:</p>
                            <div className='lg:flex gap-4'>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="Web Developer"
                                        checked={formData.skills.includes("Web Developer")}
                                        onChange={handleChange}
                                    />
                                    Web Developer
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="AI Engineer"
                                        checked={formData.skills.includes("AI Engineer")}
                                        onChange={handleChange}
                                    />
                                    AI Engineer
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="App Developer"
                                        checked={formData.skills.includes("App Developer")}
                                        onChange={handleChange}
                                    />
                                    App Developer
                                </label>
                            </div>
                        </div>
                        <div className='my-3'>
                            <p className='py-2 text-xl font-semibold'>Mobile:</p>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className='w-full h-10 rounded-full px-4'
                                placeholder='Enter the contact no.'
                                required
                            />
                        </div>
                    </>
                ) : (
                    <div className='my-3'>
                        <p className='py-2 text-xl font-semibold'>Purpose:</p>
                        <textarea
                            name="purpose"
                            value={formData.purpose}
                            onChange={handleChange}
                            className='w-full h-36 px-4 py-2'
                            placeholder='Write purpose of contacting us!'
                            required
                        />
                    </div>
                )}
                <button type="submit" className='py-3 my-5 bg-black text-white px-9 rounded-full'>Submit</button>
            </form>
        </div>
    );
}

export default Register;
