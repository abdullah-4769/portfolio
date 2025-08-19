import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "Contact | Abdullah's Portfolio";
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "abdullahcodesign@gmail.com",
      link: "mailto:abdullahcodesign@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+92 318 2496393",
      link: "tel:+92 318 2496393",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Karim Park, Ravi Road, Lahore.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CustomCursor />
      <Header />

      <main className="pt-24">
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl font-bold mb-4">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-gray-300 max-w-lg mx-auto">
                Have a project in mind or want to collaborate? Feel free to
                reach out to me through any of the channels below or using the
                contact form.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <ContactForm />
              </div>

              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="glass-morphism border-primary/20 p-8 rounded-lg h-full">
                  <div className="space-y-8">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-primary/20 p-3 rounded-lg mr-4">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">{info.title}</h3>
                          <a
                            href={info.link}
                            className="text-gray-300 hover:text-primary transition-colors"
                            data-cursor="link"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    ))}

                    <div className="pt-8">
                      <h3 className="font-medium text-lg mb-4">Follow Me</h3>
                      <div className="flex space-x-4">
                        {[
                          {
                            name: "Twitter/X",
                            url: "https://x.com/aabi_developer",
                          },
                          {
                            name: "LinkedIn",
                            url: "https://www.linkedin.com/in/abdullah-shahid4769/",
                          },
                          {
                            name: "GitHub",
                            url: "https://github.com/abdullah-4769",
                          },
                          {
                            name: "Behance",
                            url: "https://www.behance.net/abdullahshahid4769/projects",
                          },
                          {
                            name: "Upwork",
                            url: "https://upwork.com/freelancers/websitedesigner4769",
                          },
                        ].map((social) => (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary px-2 rounded-full hover:text-primary hover:bg-white text-white transition-colors"
                            data-cursor="link"
                            data-cursor-text={social.name}
                          >
                            {social.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
