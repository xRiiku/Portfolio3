import React from 'react';
import { useTranslation } from 'react-i18next';
import useForm from './useForm';
import styles from './Contact.module.css'


export function Contact() {

    const { t } = useTranslation()


    const initialData = {
        name: '',
        email: '',
        topic: '',
        message: ''
    }
    
    const onValidate = (form) => {

        let errors = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexComments = /^.{1,255}$/;
    
        if (!form.name.trim()) {
            errors.name = t('error.name')
        } else if (!regexName.test(form.name)){
            errors.name = t('error.name2')
        }
    
        if (!form.email.trim()) {
            errors.email = t('error.email')
        } else if (!regexEmail.test(form.email)){
            errors.email = t('error.email2')
        }
    
        if (!form.message.trim()) {
            errors.message = t('error.message')
        } else if (!regexComments.test(form.message)){
            errors.message = t('error.message2')
        }
    
        return errors
    }
    
    
    const { form, errors, handleChange, handleSubmit } = useForm(initialData, onValidate)
    
    return (

        <div className={styles.contactPage} id='contact'>
        
            <div className={styles.leftContainer}>
                <div className={styles.leftInfo}>
                    <h2>{t('contact.leftinfoh2')}</h2>
                    <p>{t('contact.leftinfop1')}</p>
                    <p>{t('contact.leftinfop2')}</p>
                </div>

            </div>


            <div className={styles.contactForm}>
                <div className={styles.title}>
                    <h2>{t('contact.title')}</h2>
                </div>

                <form onSubmit={handleSubmit}>

                    <input type="text" placeholder={t('contact.name')} name="name" value={form.name} onChange={handleChange} required/>
                    <span>{errors.name}</span>
        
                    <input type="email" placeholder={t('contact.email')} name="email" value={form.email} onChange={handleChange} required/>
                    <span>{errors.email}</span>
        
                    <textarea placeholder={t('contact.message')} name="message" value={form.message} onChange={handleChange} required/>
                    <span>{errors.message}</span>
        
                    <input className={styles.button} type="submit" value={t('contact.send')} />
                </form>
            </div>

        </div>
    
        
        
        
    

    )
}

