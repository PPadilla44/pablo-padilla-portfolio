import React, { useState } from 'react'
import Section from '../../components/Section'
import { send } from 'emailjs-com';
import SendButton from '../../components/SendButton';
import HeroIcons from '../../components/HeroIcons';

const Contact = () => {

    const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/
    const [form, setForm] = useState({
        user_name: "",
        user_email: "",
        message: ""
    });
    const [errors, setErrors] = useState({
        nameErr: "",
        emailErr: "",
        messageErr: ""
    })
    const [success, setSuccess] = useState(false);
    const [isLoading, setLoading] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSuccess(false)
        setForm(f => ({
            ...f, [e.target.name]: e.target.value
        }))
    }

    const validateForm = () => {
        const { message, user_email, user_name } = form;
        let isValid = true;
        if (message.length < 3) {
            isValid = false;
            setErrors(err => ({ ...err, messageErr: "Message must be longer than 2 characters" }))
        } else {
            setErrors(err => ({ ...err, messageErr: "" }))
        }

        if (user_name.length < 2) {
            isValid = false;
            setErrors(err => ({ ...err, nameErr: "Name must be longer than 1 character" }))
        } else {
            setErrors(err => ({ ...err, nameErr: "" }))
        }

        if (user_email.length < 3 || !regex.test(user_email)) {
            isValid = false;
            setErrors(err => ({ ...err, emailErr: "Invalid Email" }))
        } else {
            setErrors(err => ({ ...err, emailErr: "" }))
        }

        return isValid;
    }

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let isValid = validateForm();
        if (!isValid || success) {
            return
        }
        setLoading(true);

        send("service_hfz1snb", 'template_j8pik3h', form, process.env.REACT_APP_EMAIL_USERID)
            .then((result) => {
                setSuccess(true);
                setLoading(false);
            }, (error) => {
                setSuccess(false);
                setLoading(false);
            });

    }

    return (
        <Section className='pt-20 pb-6 flex bg-blue-300' >
            <h1 className='text-center mb-20'>Contact</h1>
            <div className='flex items-center justify-center w-full flex-col '>

                <form onSubmit={sendEmail} className="flex flex-col gap-1 md:max-w-lg w-full items-center" noValidate>
                    <div className='w-full'>
                        <input className={`${errors.nameErr && "border-2 border-red-600"}  w-full rounded-md p-2 text-lg`} type="text" name="user_name" placeholder='Name' value={form.user_name} onChange={handleChange} />
                        {
                            errors.nameErr ?
                                <p className="text-red-600 text-sm text-center">{errors.nameErr}</p>
                                :
                                <p>&nbsp;</p>
                        }
                    </div>
                    <div className='w-full'>
                        <input className={`${errors.emailErr && "border-2 border-red-600"}  w-full rounded-md p-2 text-lg`} type="email" name="user_email" placeholder='Email' value={form.user_email} onChange={handleChange} />
                        {
                            errors.emailErr ?
                                <p className="text-red-600 text-sm text-center">{errors.emailErr}</p>
                                :
                                <p>&nbsp;</p>
                        }
                    </div>
                    <div className='w-full'>
                        <textarea className={`${errors.messageErr && "border-2 border-red-600"}  w-full rounded-md p-2 text-lg resize-none`} rows={4} name="message" value={form.message} placeholder="Message" onChange={handleChange} />
                        {
                            errors.messageErr ?
                                <p className="text-red-600 text-sm text-center" >{errors.messageErr}</p>
                                :
                                <p>&nbsp;</p>
                        }
                    </div>
                    <div className='text-center'>
                        <SendButton isLoading={isLoading} isSuccess={success} />
                    </div>
                </form>
            </div>
            <div className='flex flex-col gap-2 items-center mt-20'>
                <HeroIcons />
                <a className='hover:text-accent' href='mailto:Padilla.Pablo1998@gmail.com'>Padilla.Pablo1998@gmail.com</a>
            </div>

        </Section>
    )
}

export default Contact