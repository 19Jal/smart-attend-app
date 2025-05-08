import React from 'react';
import { Camera, Users, CloudLightning, BarChart3, Shield, Clock, Calendar, Bell, CheckCircle, Award, Zap, ArrowRight, Server, Cpu } from 'lucide-react';

const AttendanceSystemWebsite = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Header/Navigation */}
      <nav className="bg-blue-700 text-white px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8" />
            <span className="text-xl font-bold">SmartAttend</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-200">Features</a>
            <a href="#how-it-works" className="hover:text-blue-200">How It Works</a>
            <a href="#benefits" className="hover:text-blue-200">Benefits</a>
            <a href="#testimonials" className="hover:text-blue-200">Testimonials</a>
          </div>
          <div>
            <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-100">
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white pb-16 pt-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Automated Attendance System Using Facial Recognition</h1>
              <p className="text-xl mb-8">Streamline your attendance process with our IoT and AWS-powered system. No more manual tracking, paperwork, or time wasted.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-100">
                  Get Started
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="/api/placeholder/600/400" alt="Smart Attendance System Dashboard" className="rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos/Social Proof */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 mb-6">Trusted by leading educational institutions and businesses</p>
          <div className="flex justify-center flex-wrap gap-8 md:gap-16">
            <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center">Logo 1</div>
            <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center">Logo 2</div>
            <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center">Logo 3</div>
            <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center">Logo 4</div>
            <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center">Logo 5</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our smart attendance system combines cutting-edge hardware and software to deliver a seamless experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Camera className="h-10 w-10 text-blue-500" />}
              title="Advanced Face Recognition"
              description="Our system uses AWS Rekognition and FaceNet to identify individuals with high accuracy, even in challenging conditions."
            />
            <FeatureCard 
              icon={<CloudLightning className="h-10 w-10 text-blue-500" />}
              title="Cloud Integration"
              description="All data is securely stored and processed in AWS, providing reliable access from anywhere, anytime."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-10 w-10 text-blue-500" />}
              title="Comprehensive Dashboard"
              description="Real-time monitoring, attendance charts, and customizable reports all accessible from our intuitive dashboard."
            />
            <FeatureCard 
              icon={<Bell className="h-10 w-10 text-blue-500" />}
              title="Smart Alerts"
              description="Get instant notifications for unrecognized faces and other security events that require attention."
            />
            <FeatureCard 
              icon={<Shield className="h-10 w-10 text-blue-500" />}
              title="Enhanced Security"
              description="Improve campus or workplace security with immediate identification of unauthorized individuals."
            />
            <FeatureCard 
              icon={<Cpu className="h-10 w-10 text-blue-500" />}
              title="Edge Processing"
              description="Local processing on Raspberry Pi devices ensures system reliability even during internet interruptions."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A simple yet powerful system designed for efficiency and accuracy.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/2 lg:w-5/12">
              <img src="/api/placeholder/500/400" alt="System Architecture" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 lg:w-5/12 space-y-6">
              <StepItem 
                number="1"
                title="Capture"
                description="The IoT camera captures images when a person approaches the designated area."
              />
              <StepItem 
                number="2"
                title="Detect & Recognize"
                description="Edge devices process the images to detect and recognize faces using advanced AI algorithms."
              />
              <StepItem 
                number="3"
                title="Process & Store"
                description="All data is securely processed and stored in AWS cloud for reliable access."
              />
              <StepItem 
                number="4"
                title="Visualize & Analyze"
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
            <h2 className="text-3xl font-bold mb-4">Why Choose SmartAttend?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our system offers numerous advantages over traditional attendance methods.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-center">For Schools & Universities</h3>
              <div className="space-y-4">
                <BenefitItem 
                  icon={<Clock />}
                  text="Save up to 15 hours per week on attendance management"
                />
                <BenefitItem 
                  icon={<CheckCircle />}
                  text="Reduce attendance errors by over 98%"
                />
                <BenefitItem 
                  icon={<Users />}
                  text="Easily monitor student attendance patterns"
                />
                <BenefitItem 
                  icon={<Bell />}
                  text="Instant alerts for unauthorized campus access"
                />
                <BenefitItem 
                  icon={<Calendar />}
                  text="Generate accurate attendance reports in seconds"
                />
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-center">For Businesses & Organizations</h3>
              <div className="space-y-4">
                <BenefitItem 
                  icon={<Zap />}
                  text="Streamline payroll processing with accurate time records"
                />
                <BenefitItem 
                  icon={<Server />}
                  text="Seamless integration with existing HR systems"
                />
                <BenefitItem 
                  icon={<Shield />}
                  text="Enhance workplace security with facial authentication"
                />
                <BenefitItem 
                  icon={<BarChart3 />}
                  text="Analyze attendance trends to improve productivity"
                />
                <BenefitItem 
                  icon={<Award />}
                  text="Ensure compliance with labor regulations"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Organizations that have transformed their attendance tracking with SmartAttend.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold">National Taiwan University</h4>
                  <p className="text-gray-600 text-sm">Education Sector</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"SmartAttend has revolutionized how we track attendance across our campus. The system is reliable, accurate, and has saved our staff countless hours of administrative work."</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold">TechCorp Industries</h4>
                  <p className="text-gray-600 text-sm">Corporate Sector</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"The accuracy of facial recognition and real-time reporting has improved our operational efficiency. Our team loves the intuitive dashboard and security features."</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold">Taipei Medical Center</h4>
                  <p className="text-gray-600 text-sm">Healthcare Sector</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Implementing SmartAttend has enhanced our security protocols while streamlining staff attendance. The system integrated seamlessly with our existing infrastructure."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Attendance System?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join hundreds of organizations that have modernized their attendance tracking with SmartAttend.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-100">
              Request Demo
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The innovative minds behind SmartAttend's development.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <TeamMember 
              name="Ravi Shankar Prasad"
              role="Software & AWS Integration"
              image="/api/placeholder/150/150"
            />
            <TeamMember 
              name="Jalu Veda"
              role="Software & Dashboard Developer"
              image="/api/placeholder/150/150"
            />
            <TeamMember 
              name="Hazilky Muna Putra"
              role="GitHub & Documentation"
              image="/api/placeholder/150/150"
            />
            <TeamMember 
              name="Amir Ali"
              role="Hardware Specialist"
              image="/api/placeholder/150/150"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="h-8 w-8" />
                <span className="text-xl font-bold">SmartAttend</span>
              </div>
              <p className="text-gray-400 max-w-xs">Revolutionizing attendance management with IoT and facial recognition technology.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
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
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SmartAttend. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const StepItem = ({ number, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const BenefitItem = ({ icon, text }) => {
  return (
    <div className="flex items-center">
      <div className="text-green-500 mr-3 flex-shrink-0">
        {icon}
      </div>
      <p>{text}</p>
    </div>
  );
};

// This component is no longer used after removing the pricing section

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="text-center">
      <div className="mb-4 mx-auto w-32 h-32 overflow-hidden rounded-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default AttendanceSystemWebsite;