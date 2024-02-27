import { Suspense, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import Web from "../models/Web";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [spotlightIntensity, setSpotlightIntensity] = useState(30);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_n26ybdi",
        "template_4iynnma",
        formRef.current,
        "PGO_hsZVWM4rTguFv"
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Will get back soon! 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({
            show: true,
            text: "Message not received 😢",
            type: "danger",
          });
        }
      );
  };

  useEffect(() => {
    // Flicker effect for the fire spotlight
    const flickerInterval = setInterval(() => {
      // Randomly adjust the intensity of the spotlight
      const randomIntensity = Math.random() * 30 + 25; // Adjust the range as needed
      setSpotlightIntensity(randomIntensity);
    }, 100); // Adjust the flicker speed as needed

    return () => clearInterval(flickerInterval);
  }, []); // Call the effect only once on component mount

  useEffect(() => {
    // Set overflow to hidden only when alert is shown
    document.body.style.overflow = alert.show ? 'hidden' : 'auto';

    // Clean up function to reset overflow when component unmounts or alert is hidden
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [alert.show]); // Update effect whenever alert.show changes

  return (
    <div className="relative flex flex-col max-w-screen mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-screen">
      <div className="flex justify-center z-10">
        {alert.show && <Alert {...alert} />}
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          <h1 className="head-text text-[#4e9dd2]">Let's Connect</h1>
          <form
            className="w-full flex flex-col gap-3 mt-14"
            autoComplete="on"
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              marginTop: '100px', // Default margin-top for larger screens
              '@media (maxWidth: 768px)': {
                marginTop: '170px' // Margin for screens smaller than 768px (tablets)
              },
              '@media (maxWidth: 480px)': {
                marginTop: '240px' // Margin for screens smaller than 480px (phones)
              }
            }}
          >
            <label className="text-white font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label className="text-white font-semibold">
              E-Mail ID
              <input
                type="email"
                name="email"
                className="input"
                placeholder="E-Mail ID"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
            <label className="text-white font-semibold">
              Message
              <textarea
                name="message"
                rows={4}
                className="textarea"
                placeholder="How can I assist you?.."
                required
                autoComplete="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas style={{ background: "transparent" }}>
          <Suspense fallback={<Loader />}>
            <directionalLight position={[0, 0, 2]} intensity={5} />
            <spotLight position={[1, 0.5, 2.1]} angle={Math.PI / 1} penumbra={1} color={0xff6600} intensity={spotlightIntensity} />
            <Web />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Contact;
