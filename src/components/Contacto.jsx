import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contacto.css';

export default function Contacto() {
  const recaptchaRef = useRef();
  const [currentTime, setCurrentTime] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [modal, setModal] = useState({ open: false, success: true });

  useEffect(() => {
    const handler = (e) => {
      const isRecaptcha = e?.target?.src?.includes('recaptcha');
      if (isRecaptcha) {
        e.preventDefault();
      }
    };

    window.addEventListener('error', handler, true);

    return () => {
      window.removeEventListener('error', handler, true);
    };
  }, []);


  // Maneja cambios en inputs
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Guarda el token de reCAPTCHA
  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setModal({ open: true, success: false, message: 'Por favor, resuelve el CAPTCHA.' });
      return;
    }

    // Construye el objeto con todos los campos que pide tu template
    const templateParams = {
      title: 'Contact Us',
      time: currentTime,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      'g-recaptcha-response': captchaToken
    };

    emailjs.send(
      'service_pv5ovti',      // tu Service ID
      'template_h1s4ufh',     // tu Template ID
      templateParams,
      'ffz7UMtE2GI69BvsQ'     // tu Public Key
    ).then(
      () => {
        setModal({ open: true, success: true });
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error('ERROR al enviar:', error.text);
        setModal({ open: true, success: false, message: 'Ups, un error inesperado. Contáctame por LinkedIn.' });
      }
    ).finally(() => {
      // Resetea CAPTCHA para un nuevo token
      recaptchaRef.current.reset();
      setCaptchaToken('');
    });
  };

  return (
    <section className="contacto" id="contacto">
      <h2>Contacto</h2>

      <form onSubmit={sendEmail} className="contacto-form">
        <label>
          Nombre
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Correo
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mensaje
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <div className="captcha-wrapper">
          <ReCAPTCHA
            sitekey="6LdQNTgrAAAAAHp_hR0g6zGrIsrDD3WsBhIpZP-v"
            onChange={handleCaptcha}
            ref={recaptchaRef}
            theme="dark"
          />
        </div>



        <button type="submit">Enviar</button>
      </form>

      {modal.open && (
        <div className="modal-backdrop">
          <div className="modal">
            {modal.success ? (
              <>
                <h3>¡Mensaje enviado!</h3>
                <p>
                  Gracias por escribirme. También puedes contactarme en{' '}
                  <a
                    href="https://www.linkedin.com/in/tu-perfil"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>.
                </p>
              </>
            ) : (
              <>
                <h3>Atención</h3>
                <p>{modal.message}</p>
              </>
            )}
            <button onClick={() => setModal({ ...modal, open: false })}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
