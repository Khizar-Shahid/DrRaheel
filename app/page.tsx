"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { openWhatsApp } from "@/lib/whatsapp"
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Award,
  Users,
  Shield,
  Calendar,
  MessageCircle,
  Mail,
  Stethoscope,
  Smile,
  Heart,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Zap,
  Target,
} from "lucide-react"

export default function RaheelDentalSurgery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and extractions with gentle techniques",
      icon: <Stethoscope className="h-8 w-8" />,
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Veneers, teeth whitening, and complete smile makeovers for stunning results",
      icon: <Smile className="h-8 w-8" />,
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Orthodontics",
      description: "Braces and Invisalign for perfect teeth alignment and confident smiles",
      icon: <CheckCircle className="h-8 w-8" />,
      popular: true,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions with natural-looking results",
      icon: <Award className="h-8 w-8" />,
      popular: false,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Aesthetic Treatments",
      description: "Non-surgical facial rejuvenation treatments for youthful appearance",
      icon: <Heart className="h-8 w-8" />,
      popular: true,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Root Canal Treatment",
      description: "Pain-free endodontic procedures with advanced technology",
      icon: <Shield className="h-8 w-8" />,
      popular: false,
      gradient: "from-indigo-500 to-blue-500",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Ahmed",
      rating: 5,
      text: "Dr. Raheel transformed my smile completely! The veneers look so natural and the entire process was comfortable. I couldn't be happier with the results!",
      treatment: "Smile Makeover",
      avatar: "SA",
    },
    {
      name: "Muhammad Ali",
      rating: 5,
      text: "Best dentist in Islamabad! Professional, caring, and uses the latest technology. The dental implant procedure was painless. Highly recommended!",
      treatment: "Dental Implants",
      avatar: "MA",
    },
    {
      name: "Fatima Khan",
      rating: 5,
      text: "Amazing experience with aesthetic treatment. Dr. Raheel is very skilled and the results are fantastic! The clinic is modern and hygienic.",
      treatment: "Aesthetic Treatment",
      avatar: "FK",
    },
  ]

  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "State-of-the-Art Equipment",
      description: "Latest dental technology including 3D imaging, digital X-rays, and laser dentistry",
      color: "bg-blue-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sterilization & Safety",
      description: "Highest standards of sterilization and infection control protocols for your safety",
      color: "bg-green-500",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Pain-Free Treatment",
      description: "Advanced pain management techniques and sedation options for comfortable procedures",
      color: "bg-purple-500",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Flexible Payment Options",
      description: "Multiple payment plans and insurance acceptance to make treatment affordable",
      color: "bg-orange-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Emergency Care Available",
      description: "24/7 emergency dental services for urgent dental problems and pain relief",
      color: "bg-red-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Personalized Treatment",
      description: "Customized treatment plans tailored to your specific needs and goals",
      color: "bg-teal-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-[#2c5aa0] to-[#1e3f73] p-3 rounded-xl shadow-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Raheel Dental Surgery</h1>
                <p className="text-sm text-gray-600 font-medium">Dr. Raheel Ahmad Khan</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#home"
                className="text-gray-700 hover:text-[#2c5aa0] transition-all duration-300 font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2c5aa0] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-[#2c5aa0] transition-all duration-300 font-medium relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2c5aa0] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-[#2c5aa0] transition-all duration-300 font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2c5aa0] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-[#2c5aa0] transition-all duration-300 font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2c5aa0] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-bold text-[#2c5aa0]">+92-339-0097397</p>
                <p className="text-xs text-gray-600">Emergency Available 24/7</p>
              </div>
              <Button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-[#2c5aa0] to-[#1e3f73] hover:from-[#1e3f73] hover:to-[#2c5aa0] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t bg-white/95 backdrop-blur-md">
              <nav className="flex flex-col space-y-4">
                <Link href="#home" className="text-gray-700 hover:text-[#2c5aa0] transition-colors duration-300 py-2">
                  Home
                </Link>
                <Link
                  href="#services"
                  className="text-gray-700 hover:text-[#2c5aa0] transition-colors duration-300 py-2"
                >
                  Services
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-[#2c5aa0] transition-colors duration-300 py-2">
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-[#2c5aa0] transition-colors duration-300 py-2"
                >
                  Contact
                </Link>
                <div className="pt-4 border-t">
                  <p className="font-bold text-[#2c5aa0] mb-2">+92-339-0097397</p>
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-gradient-to-r from-[#2c5aa0] to-[#1e3f73] hover:from-[#1e3f73] hover:to-[#2c5aa0] text-white"
                  >
                    Book Appointment
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-[#2c5aa0] via-[#1e3f73] to-[#0f1f3d] text-white py-24 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
                  ✨ 12+ Years of Excellence
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Transform Your Smile with
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {" "}
                    Islamabad's Leading
                  </span>{" "}
                  Dental Expert
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 font-light">
                  Dr. Raheel Ahmad Khan - Advanced Dentistry & Aesthetic Medicine Specialist
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={openWhatsApp}
                  size="lg"
                  className="bg-white text-[#2c5aa0] hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Your Consultation Today
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">8,000+</p>
                    <p className="text-blue-200 text-sm">Happy Patients</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Star className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">4.9/5</p>
                    <p className="text-blue-200 text-sm">Google Rating</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ Top Rated
                </div>
                <Image
                  src="/images/11_enhanced.jpg"
                  alt="Dr. Raheel Ahmad Khan - Leading Dentist in Islamabad"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "12+", label: "Years Experience", icon: <Award className="h-8 w-8" /> },
              { number: "8,000+", label: "Happy Patients", icon: <Users className="h-8 w-8" /> },
              { number: "4.9/5", label: "Google Rating", icon: <Star className="h-8 w-8" /> },
              { number: "100%", label: "Satisfaction Rate", icon: <Heart className="h-8 w-8" /> },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-[#2c5aa0] mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-[#2c5aa0] mb-2">{stat.number}</div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#2c5aa0]/10 text-[#2c5aa0] px-4 py-2 mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Dental & Aesthetic Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From routine dental care to advanced aesthetic treatments, we offer complete solutions for your oral
              health and beauty needs with cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold shadow-lg">
                      🔥 Most Popular
                    </Badge>
                  </div>
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <CardHeader className="relative">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-4 shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#2c5aa0] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#2c5aa0] text-[#2c5aa0] hover:bg-[#2c5aa0] hover:text-white bg-transparent transition-all duration-300 font-semibold group-hover:shadow-lg"
                  >
                    Learn More{" "}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Dr. Raheel Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-[#2c5aa0]/10 text-[#2c5aa0] px-4 py-2 mb-4">Meet Your Doctor</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dr. Raheel Ahmad Khan</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With over 12 years of experience in dentistry and aesthetic medicine, Dr. Raheel Ahmad Khan is one of
                  Islamabad's most trusted dental professionals. He combines advanced techniques with a gentle,
                  patient-centered approach to deliver exceptional results.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "BDS from University of Health Sciences Lahore",
                  "MSPH, C.Ortho, C.Implant, C.Aesthetic Certified",
                  "Member of Pakistan Dental Association",
                  "Fluent in English, Urdu, and Punjabi",
                ].map((credential, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <CheckCircle className="h-6 w-6 text-[#2c5aa0] mr-4 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{credential}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-[#2c5aa0] to-[#1e3f73] hover:from-[#1e3f73] hover:to-[#2c5aa0] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Consultation
              </Button>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#2c5aa0]/10 to-blue-100 rounded-3xl p-8 shadow-xl">
                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-[#2c5aa0] to-[#1e3f73] text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  🏆 Award Winning
                </div>
                <Image
                  src="/images/11_enhanced.jpg"
                  alt="Dr. Raheel Ahmad Khan in his clinic"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#2c5aa0]/10 text-[#2c5aa0] px-4 py-2 mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Raheel Dental Surgery?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class dental care with state-of-the-art technology and personalized treatment plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
                  <div
                    className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#2c5aa0] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-[#2c5aa0]/10 text-[#2c5aa0] px-4 py-2 mb-4">Patient Reviews</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our satisfied patients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-[#2c5aa0] to-[#1e3f73] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-[#2c5aa0] font-medium">{testimonial.treatment}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking */}
      <section className="py-24 bg-gradient-to-br from-[#2c5aa0] via-[#1e3f73] to-[#0f1f3d] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Smile?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Book your consultation today and take the first step towards a healthier, more beautiful smile.
            </p>
          </div>

          <Card className="bg-white/95 backdrop-blur-md text-gray-900 shadow-2xl border-0">
            <CardContent className="p-10">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-[#2c5aa0]">Book Your Appointment</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        className="border-2 border-gray-200 focus:border-[#2c5aa0] rounded-xl"
                      />
                      <Input
                        placeholder="Last Name"
                        className="border-2 border-gray-200 focus:border-[#2c5aa0] rounded-xl"
                      />
                    </div>
                    <Input
                      placeholder="Phone Number"
                      className="border-2 border-gray-200 focus:border-[#2c5aa0] rounded-xl"
                    />
                    <Input
                      placeholder="Email Address"
                      className="border-2 border-gray-200 focus:border-[#2c5aa0] rounded-xl"
                    />
                    <Input
                      placeholder="Preferred Date"
                      type="date"
                      className="border-2 border-gray-200 focus:border-[#2c5aa0] rounded-xl"
                    />
                    <Textarea
                      placeholder="Tell us about your concerns or preferred treatment"
                      className="border-2 border-gray-200 focus:border-[#2c5aa0] rounded-xl min-h-[120px]"
                    />
                    <Button 
                      onClick={openWhatsApp}
                      className="w-full bg-gradient-to-r from-[#2c5aa0] to-[#1e3f73] hover:from-[#1e3f73] hover:to-[#2c5aa0] text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Appointment
                    </Button>
                  </form>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-[#2c5aa0]">Contact Information</h3>
                  <div className="space-y-6">
                    {[
                      { icon: <Phone className="h-6 w-6" />, title: "Phone & WhatsApp", info: "+92-339-0097397" },
                      { icon: <Mail className="h-6 w-6" />, title: "Email", info: "info@raheeldentalcare.com" },
                      {
                        icon: <MapPin className="h-6 w-6" />,
                        title: "Location",
                        info: "Shop #23, G-9 Markaz, Islamabad",
                      },
                      { icon: <Clock className="h-6 w-6" />, title: "Hours", info: "Mon-Sat: 9AM-8PM" },
                    ].map((contact, index) => (
                      <div key={index} className="flex items-start bg-gray-50 p-4 rounded-xl">
                        <div className="text-[#2c5aa0] mr-4 mt-1">{contact.icon}</div>
                        <div>
                          <p className="font-bold text-gray-900">{contact.title}</p>
                          <p className="text-gray-600">{contact.info}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 space-y-4">
                    <Button 
                      onClick={openWhatsApp}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-[#2c5aa0] to-[#1e3f73] p-3 rounded-xl shadow-lg">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Raheel Dental Surgery</h3>
                  <p className="text-gray-400">Dr. Raheel Ahmad Khan</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming smiles with advanced dentistry and aesthetic medicine in Islamabad. Your trusted partner
                for oral health and beauty.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                {["Home", "Services", "About", "Contact"].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={`#${link.toLowerCase()}`}
                      className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-gray-400">
                {["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Dental Implants", "Aesthetic Treatments"].map(
                  (service, index) => (
                    <li key={index} className="hover:text-white transition-colors duration-300">
                      {service}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4 text-gray-400">
                <p className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-[#2c5aa0]" />
                  Shop #23, G-9 Markaz, Islamabad
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-[#2c5aa0]" />
                  +92-339-0097397
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-[#2c5aa0]" />
                  info@raheeldentalcare.com
                </p>
                <p className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-[#2c5aa0]" />
                  Emergency: Available 24/7
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Raheel Dental Surgery. All rights reserved. |
              <span className="text-[#2c5aa0]"> Designed with ❤️ for better smiles</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
