import React, { useState, useEffect } from 'react';
import { Camera, Users, CloudLightning, BarChart3, Shield, Clock, Calendar, Bell, CheckCircle, Award, Zap, ArrowRight, Server, Cpu, ChevronDown, Search, Menu, X, ChevronUp } from 'lucide-react';
import Avatar from './Avatar';
import dashboardImage from './dashboard.jpg';
import architectImage from './architecture.jpg';

// Custom colors defined inline for the component
const colors = {
  primary: {
    100: '#E6F0FF',
    300: '#80B3FF',
    500: '#3366FF',
    700: '#1A3380',
    900: '#0D1940',
  },
  secondary: {
    100: '#E6FFF9',
    300: '#80FFE6',
    500: '#00CCA0',
    700: '#007A5F',
    900: '#003D30',
  },
  accent: {
    100: '#FFF1E6',
    300: '#FFB380',
    500: '#FF8533',
    700: '#B35900',
    900: '#592D00',
  },
};

const AttendanceSystemWebsite = () => {
  const [activeSection, setActiveSection] = useState('features');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Throttling utility function
  const throttle = (func, delay) => {
    let lastCall = 0;
    return function(...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return func(...args);
    };
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      // Get the section's position
      const sectionPosition = section.getBoundingClientRect().top;
      // Get the current scroll position
      const offsetPosition = sectionPosition + window.pageYOffset;
      // Apply the offset (e.g., 80px for the header height)
      const offsetValue = 50;
      
      // Scroll to the position with offset
      window.scrollTo({
        top: offsetPosition - offsetValue,
        behavior: 'smooth'
      });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position with slight offset
      const scrollPosition = window.scrollY + 200;
      
      // Get references to all sections
      const heroSection = document.getElementById('home'); // Assuming you add this ID to your hero section
      const featuresSection = document.getElementById('features');
      const howItWorksSection = document.getElementById('how-it-works');
      const benefitsSection = document.getElementById('benefits');
      const testimonialsSection = document.getElementById('testimonials');
      const teamSection = document.getElementById('team'); // Assuming you add this ID to your team section
      
      // Determine which section is in view, checking from bottom to top
      if (teamSection && scrollPosition >= teamSection.offsetTop) {
        setActiveSection('team');
      } else if (testimonialsSection && scrollPosition >= testimonialsSection.offsetTop) {
        setActiveSection('testimonials');
      } else if (benefitsSection && scrollPosition >= benefitsSection.offsetTop) {
        setActiveSection('benefits');
      } else if (howItWorksSection && scrollPosition >= howItWorksSection.offsetTop) {
        setActiveSection('how-it-works');
      } else if (featuresSection && scrollPosition >= featuresSection.offsetTop) {
        setActiveSection('features');
      } else if (heroSection && scrollPosition >= heroSection.offsetTop) {
        setActiveSection('home');
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 100);

    // Add event listener with throttled handler
    window.addEventListener('scroll', throttledHandleScroll);
    
    // Initialize active section on component mount
    handleScroll();
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return (
    <div className="font-sans">
      {/* Header/Navigation */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-primary-700 to-primary-500 text-white px-6 py-4 shadow-lg" 
           style={{ 
             backgroundImage: `linear-gradient(to right, ${colors.primary[700]}, ${colors.primary[500]})` 
           }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8" style={{ color: colors.accent[300] }} />
            <span className="text-xl font-bold">SmartAttend</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#features" 
              className="transition-colors" 
              style={{ color: activeSection === 'features' ? colors.accent[300] : 'white' }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("features");
              }}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="transition-colors"
              style={{ color: activeSection === 'how-it-works' ? colors.accent[300] : 'white' }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("how-it-works");
              }}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="transition-colors"
              style={{ color: activeSection === 'benefits' ? colors.accent[300] : 'white' }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("benefits");
              }}
            >
              Benefits
            </a>
            <a 
              href="#testimonials" 
              className="transition-colors"
              style={{ color: activeSection === 'testimonials' ? colors.accent[300] : 'white' }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("testimonials");
              }}
            >
              Testimonials
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Demo Button */}
          <div className="hidden md:block">
            <button 
              className="px-4 py-2 rounded-lg font-medium shadow-md transition-colors"
              style={{ 
                backgroundColor: colors.accent[500],
                color: 'white'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.accent[600]}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.accent[500]}
            >
              Request Demo
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-2 rounded-lg shadow-lg" style={{ backgroundColor: colors.primary[600] }}>
            <a 
              href="#features" 
              className="block py-2 px-4 rounded transition-colors" 
              style={{ 
                backgroundColor: activeSection === 'features' ? colors.primary[700] : 'transparent',
                color: activeSection === 'features' ? colors.accent[300] : 'white'
              }}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                
                setTimeout(() => {
                  const section = document.getElementById("features");
                  if (section) {
                    const headerOffset = 50;
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                    
                    setActiveSection('features');
                  }
                }, 300);
              }}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block py-2 px-4 rounded transition-colors" 
              style={{ 
                backgroundColor: activeSection === 'how-it-works' ? colors.primary[700] : 'transparent',
                color: activeSection === 'how-it-works' ? colors.accent[300] : 'white'
              }}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                
                setTimeout(() => {
                  const section = document.getElementById("how-it-works");
                  if (section) {
                    const headerOffset = 50;
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                    
                    setActiveSection('how-it-works');
                  }
                }, 300);
              }}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="block py-2 px-4 rounded transition-colors" 
              style={{ 
                backgroundColor: activeSection === 'benefits' ? colors.primary[700] : 'transparent',
                color: activeSection === 'benefits' ? colors.accent[300] : 'white'
              }}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                
                setTimeout(() => {
                  const section = document.getElementById("benefits");
                  if (section) {
                    const headerOffset = 50;
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                    
                    setActiveSection('benefits');
                  }
                }, 300);
              }}
            >
              Benefits
            </a>
            <a 
              href="#testimonials" 
              className="block py-2 px-4 rounded transition-colors" 
              style={{ 
                backgroundColor: activeSection === 'testimonials' ? colors.primary[700] : 'transparent',
                color: activeSection === 'testimonials' ? colors.accent[300] : 'white'
              }}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                
                setTimeout(() => {
                  const section = document.getElementById("testimonials");
                  if (section) {
                    const headerOffset = 50;
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                    
                    setActiveSection('testimonials');
                  }
                }, 300);
              }}
            >
              Testimonials
            </a>
            <div className="mt-4 pt-4 border-t border-primary-400">
              <button 
                className="w-full py-2 px-4 rounded-lg font-medium"
                style={{ 
                  backgroundColor: colors.accent[500],
                  color: 'white'
                }}
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pb-16 pt-10 text-white" style={{ 
        background: `linear-gradient(to bottom, ${colors.primary[700]}, ${colors.primary[600]}, ${colors.primary[500]})` 
      }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Automated Attendance System Using Facial Recognition</h1>
              <p className="text-xl mb-8" style={{ color: colors.primary[500]}}>
                Streamline your attendance process with our IoT and AWS-powered system. No more manual tracking, paperwork, or time wasted.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  className="px-6 py-3 rounded-lg font-medium shadow-lg transition-colors"
                  style={{ 
                    backgroundColor: colors.accent[500],
                    color: 'white'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.accent[600]}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.accent[500]}
                >
                  Get Started
                </button>
                <button 
                  className="px-6 py-3 rounded-lg font-medium shadow-lg transition-colors"
                  style={{ 
                    backgroundColor: colors.accent[500],
                    color: 'white'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accent[600]
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accent[500]
                  }}
                >
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img src={dashboardImage} alt="Smart Attendance System Dashboard" className="rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary[900] }}>Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our smart attendance system combines cutting-edge hardware and software to deliver a seamless experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Camera />}
              iconBgColor={colors.primary[100]}
              iconColor={colors.primary[500]}
              borderColor={colors.primary[500]}
              title="Advanced Face Recognition"
              description="Our system uses AWS Rekognition and FaceNet to identify individuals with high accuracy, even in challenging conditions."
            />
            <FeatureCard 
              icon={<CloudLightning />}
              iconBgColor={colors.secondary[100]}
              iconColor={colors.secondary[500]}
              borderColor={colors.secondary[500]}
              title="Cloud Integration"
              description="All data is securely stored and processed in AWS, providing reliable access from anywhere, anytime."
            />
            <FeatureCard 
              icon={<BarChart3 />}
              iconBgColor={colors.accent[100]}
              iconColor={colors.accent[500]}
              borderColor={colors.accent[500]}
              title="Comprehensive Dashboard"
              description="Real-time monitoring, attendance charts, and customizable reports all accessible from our intuitive dashboard."
            />
            <FeatureCard 
              icon={<Bell />}
              iconBgColor={colors.primary[100]}
              iconColor={colors.primary[500]}
              borderColor={colors.primary[500]}
              title="Smart Alerts"
              description="Get instant notifications for unrecognized faces and other security events that require attention."
            />
            <FeatureCard 
              icon={<Shield />}
              iconBgColor={colors.secondary[100]}
              iconColor={colors.secondary[500]}
              borderColor={colors.secondary[500]}
              title="Enhanced Security"
              description="Improve campus or workplace security with immediate identification of unauthorized individuals."
            />
            <FeatureCard 
              icon={<Cpu />}
              iconBgColor={colors.accent[100]}
              iconColor={colors.accent[500]}
              borderColor={colors.accent[500]}
              title="Edge Processing"
              description="Local processing on Raspberry Pi devices ensures system reliability even during internet interruptions."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16" style={{ 
        background: `linear-gradient(to bottom right, ${colors.primary[100]}, white)` 
      }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary[900] }}>How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A simple yet powerful system designed for efficiency and accuracy.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/2 lg:w-5/12">
              <div className="rounded-lg shadow-xl overflow-hidden border-4" style={{ borderColor: colors.primary[300] }}>
                <img src={architectImage} alt="System Architecture" className="w-full" />
              </div>
            </div>
            <div className="md:w-1/2 lg:w-5/12 space-y-6">
              <StepItem 
                number="1"
                numberBgColor={colors.primary[500]}
                title="Capture"
                titleColor={colors.primary[700]}
                description="The IoT camera captures images when a person approaches the designated area."
              />
              <StepItem 
                number="2"
                numberBgColor={colors.secondary[500]}
                title="Detect & Recognize"
                titleColor={colors.secondary[700]}
                description="Edge devices process the images to detect and send face images to AWS."
              />
              <StepItem 
                number="3"
                numberBgColor={colors.accent[500]}
                title="Process & Store"
                titleColor={colors.accent[700]}
                description="AWS computes facial recognition and all data is securely processed and stored in AWS cloud for reliable access."
              />
              <StepItem 
                number="4"
                numberBgColor={colors.primary[500]}
                title="Visualize & Analyze"
                titleColor={colors.primary[700]}
                description="Access real-time attendance data and analytics through our intuitive dashboard."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary[900] }}>Why Choose SmartAttend?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our system offers numerous advantages over traditional attendance methods.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl" style={{ borderLeft: `6px solid ${colors.primary[500]}` }}>
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: colors.primary[700] }}>For Schools & Universities</h3>
              <div className="space-y-4">
                <BenefitItem 
                  icon={<Clock />}
                  iconColor={colors.primary[500]}
                  text="Save up to 15 hours per week on attendance management"
                />
                <BenefitItem 
                  icon={<CheckCircle />}
                  iconColor={colors.primary[500]}
                  text="Reduce attendance errors by over 98%"
                />
                <BenefitItem 
                  icon={<Users />}
                  iconColor={colors.primary[500]}
                  text="Easily monitor student attendance patterns"
                />
                <BenefitItem 
                  icon={<Bell />}
                  iconColor={colors.primary[500]}
                  text="Instant alerts for unauthorized campus access"
                />
                <BenefitItem 
                  icon={<Calendar />}
                  iconColor={colors.primary[500]}
                  text="Generate accurate attendance reports in seconds"
                />
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl" style={{ borderLeft: `6px solid ${colors.secondary[500]}` }}>
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: colors.secondary[700] }}>For Businesses & Organizations</h3>
              <div className="space-y-4">
                <BenefitItem 
                  icon={<Zap />}
                  iconColor={colors.secondary[500]}
                  text="Streamline payroll processing with accurate time records"
                />
                <BenefitItem 
                  icon={<Server />}
                  iconColor={colors.secondary[500]}
                  text="Seamless integration with existing HR systems"
                />
                <BenefitItem 
                  icon={<Shield />}
                  iconColor={colors.secondary[500]}
                  text="Enhance workplace security with facial authentication"
                />
                <BenefitItem 
                  icon={<BarChart3 />}
                  iconColor={colors.secondary[500]}
                  text="Analyze attendance trends to improve productivity"
                />
                <BenefitItem 
                  icon={<Award />}
                  iconColor={colors.secondary[500]}
                  text="Ensure compliance with labor regulations"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16" style={{ backgroundColor: colors.primary[100] }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary[900] }}>What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Organizations that have transformed their attendance tracking with SmartAttend.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              organization="University of John Maston"
              sector="Education Sector"
              testimonial="SmartAttend has revolutionized how we track attendance across our campus. The system is reliable, accurate, and has saved our staff countless hours of administrative work."
              borderColor={colors.accent[500]}
              iconBgColor={colors.accent[100]}
              iconColor={colors.accent[500]}
            />
            
            <TestimonialCard 
              organization="Arthur Industries"
              sector="Corporate Sector"
              testimonial="The accuracy of facial recognition and real-time reporting has improved our operational efficiency. Our team loves the intuitive dashboard and security features."
              borderColor={colors.primary[500]}
              iconBgColor={colors.primary[100]}
              iconColor={colors.primary[500]}
            />
            
            <TestimonialCard 
              organization="Gerald Medical"
              sector="Healthcare Sector"
              testimonial="Implementing SmartAttend has enhanced our security protocols while streamlining staff attendance. The system integrated seamlessly with our existing infrastructure."
              borderColor={colors.secondary[500]}
              iconBgColor={colors.secondary[100]}
              iconColor={colors.secondary[500]}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-white" style={{ 
        background: `linear-gradient(to right, ${colors.primary[600]}, ${colors.primary[500]})` 
      }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Attendance System?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: colors.primary[300] }}>
            Join hundreds of organizations that have modernized their attendance tracking with SmartAttend.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              className="px-6 py-3 rounded-lg font-medium shadow-lg transition-colors"
              style={{ 
                backgroundColor: colors.accent[500],
                color: 'white'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.accent[600]}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.accent[500]}
            >
              Request Demo
            </button>
            <button 
              className="px-6 py-3 rounded-lg font-medium shadow-lg transition-colors"
              style={{ 
                backgroundColor: colors.accent[500],
                color: 'white'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.accent[600]}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.accent[500]}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary[900] }}>Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The innovative minds behind SmartAttend's development.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <TeamMember 
              name="Ravi Shankar Prasad"
              role="Software & AWS Integration"
              bgColor={colors.primary[100]}
              borderColor={colors.primary[500]}
            />
            <TeamMember 
              name="Jalu Veda"
              role="Software & Dashboard Developer"
              bgColor={colors.secondary[100]}
              borderColor={colors.secondary[500]}
            />
            <TeamMember 
              name="Hazilky Muna Putra"
              role="GitHub & Documentation"
              bgColor={colors.accent[100]}
              borderColor={colors.accent[500]}
            />
            <TeamMember 
              name="Amir Ali"
              role="Hardware Specialist"
              bgColor={colors.primary[100]}
              borderColor={colors.primary[500]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: colors.primary[900] }} className="text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="h-8 w-8" style={{ color: colors.accent[300] }} />
                <span className="text-xl font-bold">SmartAttend</span>
              </div>
              <p className="text-gray-400 max-w-xs">Revolutionizing attendance management with IoT and facial recognition technology.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Case Studies</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Reviews</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Support Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SmartAttend. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components

const FeatureCard = ({ icon, iconBgColor, iconColor, borderColor, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md transition-all duration-300"
      style={{ 
        borderTop: `4px solid ${borderColor}`,
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="mb-4 p-3 inline-block rounded-full"
        style={{ backgroundColor: iconBgColor }}
      >
        {React.cloneElement(icon, { className: "h-10 w-10", style: { color: iconColor } })}
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: iconColor }}>{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const StepItem = ({ number, numberBgColor, title, titleColor, description }) => {
  return (
    <div className="flex items-start">
      <div 
        className="text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0"
        style={{ backgroundColor: numberBgColor }}
      >
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1" style={{ color: titleColor }}>{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const BenefitItem = ({ icon, iconColor, text }) => {
  return (
    <div className="flex items-center group">
      <div className="mr-3 flex-shrink-0 transition-transform group-hover:scale-110 duration-300" style={{ color: iconColor }}>
        {React.cloneElement(icon, { size: 20 })}
      </div>
      <p>{text}</p>
    </div>
  );
};

const TestimonialCard = ({ organization, sector, testimonial, borderColor, iconBgColor, iconColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md transition-all duration-300"
      style={{ 
        borderLeft: `4px solid ${borderColor}`,
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 10px 25px -5px rgba(0, 0, 0, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
          style={{ backgroundColor: iconBgColor }}
        >
          <Users className="h-6 w-6" style={{ color: iconColor }} />
        </div>
        <div>
          <h4 className="font-bold">{organization}</h4>
          <p className="text-gray-600 text-sm">{sector}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{testimonial}</p>
    </div>
  );
};

const TeamMember = ({ name, role, bgColor, borderColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="text-center">
      <div 
        className="mb-4 mx-auto overflow-hidden rounded-full transition-all duration-300 flex items-center justify-center"
        style={{ 
          padding: '3px',
          backgroundColor: bgColor,
          borderColor: borderColor,
          borderWidth: isHovered ? '3px' : '1px',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          width: '132px',  // 126px + 6px for padding
          height: '132px'  // 126px + 6px for padding
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Avatar name={name} size={126} />
      </div>
      <h3 className="text-lg font-medium" style={{ color: borderColor }}>{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};



export default AttendanceSystemWebsite;