import React, { useState, useEffect } from 'react';
import { Camera, Users, CloudLightning, BarChart3, Shield, Clock, Calendar, Bell, CheckCircle, Award, Zap, ArrowRight, Server, Cpu, ChevronDown, Search, Menu, X, ChevronUp } from 'lucide-react';
import dashboardImage from './dashboard.jpg';
import architectureImage from './architecture.jpg';

// Avatar Component
const Avatar = ({ name, size = 40 }) => {
  // Get initials from name
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
  
  // Generate a consistent background color based on the name
  const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];
  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  
  return (
    <div 
      className="flex items-center justify-center rounded-full text-white font-medium"
      style={{ 
        width: `${size}px`, 
        height: `${size}px`, 
        backgroundColor: colors[colorIndex],
        fontSize: `${size / 2.5}px`
      }}
    >
      {initials}
    </div>
  );
};

// Custom colors defined inline for the component
const colors = {
  primary: {
    100: '#E6F0FF',
    300: '#80B3FF',
    500: '#3366FF',
    600: '#2952CC',
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
    600: '#E6732D',
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
      const heroSection = document.getElementById('home');
      const featuresSection = document.getElementById('features');
      const howItWorksSection = document.getElementById('how-it-works');
      const benefitsSection = document.getElementById('benefits');
      const testimonialsSection = document.getElementById('testimonials');
      const teamSection = document.getElementById('team');
      
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
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-orange-300" />
            <span className="text-xl font-bold">SmartAttend</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#features" 
              className={`transition-colors ${activeSection === 'features' ? 'text-orange-300' : 'text-white'}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("features");
              }}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className={`transition-colors ${activeSection === 'how-it-works' ? 'text-orange-300' : 'text-white'}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("how-it-works");
              }}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className={`transition-colors ${activeSection === 'benefits' ? 'text-orange-300' : 'text-white'}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("benefits");
              }}
            >
              Benefits
            </a>
            <a 
              href="#testimonials" 
              className={`transition-colors ${activeSection === 'testimonials' ? 'text-orange-300' : 'text-white'}`}
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
            <button className="px-4 py-2 rounded-lg font-medium shadow-md transition-colors bg-orange-500 text-white hover:bg-orange-600">
              Request Demo
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-2 rounded-lg shadow-lg bg-blue-600">
            <a 
              href="#features" 
              className={`block py-2 px-4 rounded transition-colors ${
                activeSection === 'features' ? 'bg-blue-700 text-orange-300' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                setTimeout(() => scrollToSection('features'), 300);
              }}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className={`block py-2 px-4 rounded transition-colors ${
                activeSection === 'how-it-works' ? 'bg-blue-700 text-orange-300' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                setTimeout(() => scrollToSection('how-it-works'), 300);
              }}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className={`block py-2 px-4 rounded transition-colors ${
                activeSection === 'benefits' ? 'bg-blue-700 text-orange-300' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                setTimeout(() => scrollToSection('benefits'), 300);
              }}
            >
              Benefits
            </a>
            <a 
              href="#testimonials" 
              className={`block py-2 px-4 rounded transition-colors ${
                activeSection === 'testimonials' ? 'bg-blue-700 text-orange-300' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                setTimeout(() => scrollToSection('testimonials'), 300);
              }}
            >
              Testimonials
            </a>
            <div className="mt-4 pt-4 border-t border-blue-400">
              <button className="w-full py-2 px-4 rounded-lg font-medium bg-orange-500 text-white">
                Request Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pb-16 pt-10 text-white bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Automated Attendance System Using Facial Recognition</h1>
              <p className="text-xl mb-8 text-blue-200">
                Streamline your attendance process with our IoT and AWS-powered system. No more manual tracking, paperwork, or time wasted.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-6 py-3 rounded-lg font-medium shadow-lg transition-colors bg-orange-500 text-white hover:bg-orange-600">
                  Get Started
                </button>
                <button className="px-6 py-3 rounded-lg font-medium shadow-lg transition-colors bg-orange-500 text-white hover:bg-orange-600">
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
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our smart attendance system combines cutting-edge hardware and software to deliver a seamless experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Camera />}
              iconBgColor="#E6F0FF"
              iconColor="#3366FF"
              borderColor="#3366FF"
              title="Advanced Face Recognition"
              description="Our system uses AWS Rekognition and FaceNet to identify individuals with high accuracy, even in challenging conditions."
            />
            <FeatureCard 
              icon={<CloudLightning />}
              iconBgColor="#E6FFF9"
              iconColor="#00CCA0"
              borderColor="#00CCA0"
              title="Cloud Integration"
              description="All data is securely stored and processed in AWS, providing reliable access from anywhere, anytime."
            />
            <FeatureCard 
              icon={<BarChart3 />}
              iconBgColor="#FFF1E6"
              iconColor="#FF8533"
              borderColor="#FF8533"
              title="Comprehensive Dashboard"
              description="Real-time monitoring, attendance charts, and customizable reports all accessible from our intuitive dashboard."
            />
            <FeatureCard 
              icon={<Bell />}
              iconBgColor="#E6F0FF"
              iconColor="#3366FF"
              borderColor="#3366FF"
              title="Smart Alerts"
              description="Get instant notifications for unrecognized faces and other security events that require attention."
            />
            <FeatureCard 
              icon={<Shield />}
              iconBgColor="#E6FFF9"
              iconColor="#00CCA0"
              borderColor="#00CCA0"
              title="Enhanced Security"
              description="Improve campus or workplace security with immediate identification of unauthorized individuals."
            />
            <FeatureCard 
              icon={<Cpu />}
              iconBgColor="#FFF1E6"
              iconColor="#FF8533"
              borderColor="#FF8533"
              title="Edge Processing"
              description="Local processing on Raspberry Pi devices ensures system reliability even during internet interruptions."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gradient-to-br from-blue-100 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A simple yet powerful system designed for efficiency and accuracy.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/2 lg:w-5/12">
              <div className="rounded-lg shadow-xl overflow-hidden border-4 border-blue-300">
                <img src={architectureImage} alt="System Architecture" className="w-full" />
              </div>
            </div>
            <div className="md:w-1/2 lg:w-5/12 space-y-6">
              <StepItem 
                number="1"
                numberBgColor="#3366FF"
                title="Capture"
                titleColor="#1A3380"
                description="The IoT camera captures images when a person approaches the designated area."
              />
              <StepItem 
                number="2"
                numberBgColor="#00CCA0"
                title="Detect & Recognize"
                titleColor="#007A5F"
                description="Edge devices process the images to detect and send face images to AWS."
              />
              <StepItem 
                number="3"
                numberBgColor="#FF8533"
                title="Process & Store"
                titleColor="#B35900"
                description="AWS computes facial recognition and all data is securely processed and stored in AWS cloud for reliable access."
              />
              <StepItem 
                number="4"
                numberBgColor="#3366FF"
                title="Visualize & Analyze"
                titleColor="#1A3380"
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
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Why Choose SmartAttend?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our system offers numerous advantages over traditional attendance methods.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl border-l-6 border-blue-500">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-700">For Schools & Universities</h3>
              <div className="space-y-4">
                <BenefitItem 
                  icon={<Clock />}
                  iconColor="#3366FF"
                  text="Save up to 15 hours per week on attendance management"
                />
                <BenefitItem 
                  icon={<CheckCircle />}
                  iconColor="#3366FF"
                  text="Reduce attendance errors by over 98%"
                />
                <BenefitItem 
                  icon={<Users />}
                  iconColor="#3366FF"
                  text="Easily monitor student attendance patterns"
                />
                <BenefitItem 
                  icon={<Bell />}
                  iconColor="#3366FF"
                  text="Instant alerts for unauthorized campus access"
                />
                <BenefitItem 
                  icon={<Calendar />}
                  iconColor="#3366FF"
                  text="Generate accurate attendance reports in seconds"
                />
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl border-l-6 border-green-500">
              <h3 className="text-2xl font-bold mb-6 text-center text-green-700">For Businesses & Organizations</h3>
              <div className="space-y-4">
                <BenefitItem 
                  icon={<Zap />}
                  iconColor="#00CCA0"
                  text="Streamline payroll processing with accurate time records"
                />
                <BenefitItem 
                  icon={<Server />}
                  iconColor="#00CCA0"
                  text="Seamless integration with existing HR systems"
                />
                <BenefitItem 
                  icon={<Shield />}
                  iconColor="#00CCA0"
                  text="Enhance workplace security with facial authentication"
                />
                <BenefitItem 
                  icon={<BarChart3 />}
                  iconColor="#00CCA0"
                  text="Analyze attendance trends to improve productivity"
                />
                <BenefitItem 
                  icon={<Award />}
                  iconColor="#00CCA0"
                  text="Ensure compliance with labor regulations"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-blue-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Organizations that have transformed their attendance tracking with SmartAttend.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              organization="University of John Maston"
              sector="Education Sector"
              testimonial="SmartAttend has revolutionized how we track attendance across our campus. The system is reliable, accurate, and has saved our staff countless hours of administrative work."
              borderColor="#FF8533"
              iconBgColor="#FFF1E6"
              iconColor="#FF8533"
            />
            
            <TestimonialCard 
              organization="Arthur Industries"
              sector="Corporate Sector"
              testimonial="The accuracy of facial recognition and real-time reporting has improved our operational efficiency. Our team loves the intuitive dashboard and security features."
              borderColor="#3366FF"
              iconBgColor="#E6F0FF"
              iconColor="#3366FF"
            />
            
            <TestimonialCard 
              organization="Gerald Medical"
              sector="Healthcare Sector"
              testimonial="Implementing SmartAttend has enhanced our security protocols while streamlining staff attendance. The system integrated seamlessly with our existing infrastructure."
              borderColor="#00CCA0"
              iconBgColor="#E6FFF9"
              iconColor="#00CCA0"
            />
          </div>
        </div>
      </section>

      {/* GitHub Repository Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Explore Our Code</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Want to see how SmartAttend works under the hood? Check out our open-source repository and explore the complete implementation.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://github.com/ontherays/smartFaceRecognistionAWS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg font-medium shadow-lg hover:bg-gray-800 transition-colors duration-300 group"
              >
                <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View on GitHub
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Complete Source Code</h3>
                <p className="text-sm text-gray-600">Full implementation with detailed documentation</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Setup Instructions</h3>
                <p className="text-sm text-gray-600">Step-by-step deployment guide</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Open Source</h3>
                <p className="text-sm text-gray-600">Free to use and contribute</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-white bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Attendance System?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-200">
            Join hundreds of organizations that have modernized their attendance tracking with SmartAttend.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 rounded-lg font-medium shadow-lg transition-colors bg-orange-500 text-white hover:bg-orange-600">
              Request Demo
            </button>
            <button className="px-6 py-3 rounded-lg font-medium shadow-lg transition-colors bg-orange-500 text-white hover:bg-orange-600">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The innovative minds behind SmartAttend's development.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <TeamMember 
              name="Ravi Shankar Prasad"
              role="Software & AWS Integration"
              bgColor="#E6F0FF"
              borderColor="#3366FF"
            />
            <TeamMember 
              name="Jalu Veda"
              role="Software & Dashboard Developer"
              bgColor="#E6FFF9"
              borderColor="#00CCA0"
            />
            <TeamMember 
              name="Hazilky Muna Putra"
              role="GitHub & Documentation"
              bgColor="#FFF1E6"
              borderColor="#FF8533"
            />
            <TeamMember 
              name="Amir Ali"
              role="Hardware Specialist"
              bgColor="#E6F0FF"
              borderColor="#3366FF"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="h-8 w-8 text-orange-300" />
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
          width: '132px',
          height: '132px'
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