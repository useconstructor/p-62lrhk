"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  Menu, 
  X, 
  ChevronRight, 
  Play, 
  Zap, 
  Cpu, 
  Layers, 
  Monitor, 
  Sparkles,
  Check,
  Star,
  ChevronDown,
  ArrowRight,
  ShoppingCart,
  Youtube,
  Twitch,
  Twitter,
  Instagram,
  Mail,
  Plus,
  Minus
} from 'lucide-react'

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [selectedVariant, setSelectedVariant] = useState('black')

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  const features = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: '8 LCD Buttons',
      description: 'Each button is a tiny display. Customize icons, GIFs, or live data on every key.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI Command Memory',
      description: 'Machine learning adapts to your workflow. Your most used actions surface automatically.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Plug and Play',
      description: 'No drivers needed. Connect via USB-C and start customizing in under 60 seconds.'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Multi App Control',
      description: 'OBS, Spotify, Discord, Zoom, Photoshop — control them all from one device.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Smart Profiles',
      description: 'Auto-switching profiles detect your active app and load the right commands instantly.'
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: 'Stream Integration',
      description: 'Native Twitch and YouTube integration. Go live, manage chat, trigger alerts.'
    },
  ]

  const stats = [
    { value: '8', label: 'LCD Keys' },
    { value: '500+', label: 'Pre-Built Actions' },
    { value: '60s', label: 'Setup Time' },
    { value: '100K+', label: 'Creators Trust Us' },
  ]

  const steps = [
    {
      number: '01',
      title: 'Connect',
      description: 'Plug the Stream Deck NEO into any USB-C port. Power and data through a single cable.'
    },
    {
      number: '02',
      title: 'Download',
      description: 'Grab the Stream Deck software. Available for Windows 10+ and macOS 10.15+.'
    },
    {
      number: '03',
      title: 'Customize',
      description: 'Drag and drop actions to each button. Import icons or create your own.'
    },
    {
      number: '04',
      title: 'Create',
      description: 'Hit record, go live, or power through your workflow with one tap.'
    },
  ]

  const testimonials = [
    {
      quote: 'The Stream Deck NEO transformed my streaming setup. Going live is literally one button press now.',
      author: 'Content Creator',
      role: 'Twitch Partner',
      rating: 5
    },
    {
      quote: 'As a video editor, having instant access to keyboard shortcuts on physical keys is a game changer.',
      author: 'Video Producer',
      role: 'YouTube Creator',
      rating: 5
    },
    {
      quote: 'The AI command memory actually learns how I work. It surfaces my most used actions without me asking.',
      author: 'Developer',
      role: 'Tech Content Creator',
      rating: 5
    },
  ]

  const faqs = [
    {
      question: 'What software is compatible with Stream Deck NEO?',
      answer: 'Stream Deck NEO works with OBS Studio, Streamlabs, XSplit, Spotify, Discord, Zoom, Adobe Creative Suite, and hundreds more through our plugin marketplace. The Stream Deck software is available for Windows 10+ and macOS 10.15+.'
    },
    {
      question: 'How does the AI Command Memory work?',
      answer: 'Our proprietary AI analyzes your usage patterns locally on your device. Over time, it learns which actions you use most frequently and can suggest optimal button layouts. All processing happens on-device for privacy.'
    },
    {
      question: 'Can I use custom icons on the LCD buttons?',
      answer: 'Absolutely. Each button supports PNG, JPG, GIF, and even animated icons. You can create your own or choose from thousands in our Icon Library.'
    },
    {
      question: 'Is a subscription required?',
      answer: 'No subscription needed. The Stream Deck software and all core features are free forever. Some third-party plugins may have their own licensing.'
    },
    {
      question: 'What is the warranty policy?',
      answer: 'Stream Deck NEO comes with a 2-year manufacturer warranty covering defects in materials and workmanship. Extended warranty options are available at checkout.'
    },
  ]

  const pricingOptions = [
    {
      name: 'Stream Deck NEO',
      price: '$99',
      description: 'Perfect for streamers and creators starting their journey',
      features: [
        '8 customizable LCD keys',
        'AI Command Memory',
        'USB-C connectivity',
        'Stream Deck software included',
        'Access to plugin marketplace',
        '2-year warranty'
      ],
      popular: true
    },
    {
      name: 'Stream Deck MK.2',
      price: '$149',
      description: 'For power users who need more control',
      features: [
        '15 customizable LCD keys',
        'Everything in NEO',
        'Removable faceplate',
        'Adjustable stand included',
        'Priority support'
      ],
      popular: false
    },
    {
      name: 'Stream Deck XL',
      price: '$249',
      description: 'Maximum control for professional setups',
      features: [
        '32 customizable LCD keys',
        'Everything in MK.2',
        'Premium aluminum faceplate',
        'Detachable USB-C cable',
        'Pro support access'
      ],
      popular: false
    },
  ]

  return (
    <main className="bg-[#0a0a0b] text-white overflow-x-hidden">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#00d4ff]/50 flex items-center justify-center">
                <Layers className="w-5 h-5 text-black" />
              </div>
              <span className="font-bold text-lg tracking-tight">Stream Deck</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#6b7280] hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button 
                variant="ghost" 
                className="text-[#6b7280] hover:text-white hover:bg-white/5"
                asChild
              >
                <Link href="#pricing">View Pricing</Link>
              </Button>
              <Button 
                className="bg-[#00d4ff] text-black hover:bg-[#00d4ff]/90 font-semibold"
                asChild
              >
                <Link href="#pricing">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div 
          className={`md:hidden absolute top-16 left-0 right-0 bg-[#141416] border-b border-white/5 transition-all duration-500 ease-out ${
            mobileNavOpen 
              ? 'opacity-100 translate-y-0 max-h-[400px]' 
              : 'opacity-0 -translate-y-4 max-h-0 pointer-events-none'
          } overflow-hidden`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="block text-[#6b7280] hover:text-white transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Button 
                className="w-full bg-[#00d4ff] text-black hover:bg-[#00d4ff]/90 font-semibold"
                asChild
              >
                <Link href="#pricing" onClick={() => setMobileNavOpen(false)}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section id="hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#000' }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%,-50%)', 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }}
        >
          <source src="/videos/hero-stramdecl.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,11,0.3), rgba(10,10,11,0.7), rgba(10,10,11,1))' }} />
        
        {/* Scan lines overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.03) 2px, rgba(0,212,255,0.03) 4px)'
          }}
        />
        
        <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', padding: '0 24px' }}>
          <Badge className="mb-6 bg-white/10 text-[#00d4ff] border-[#00d4ff]/30 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 mr-1" />
            Now with AI Command Memory
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="block">Stream Deck</span>
            <span className="block bg-gradient-to-r from-[#00d4ff] via-white to-[#00d4ff] bg-clip-text text-transparent">
              NEO
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#6b7280] max-w-2xl mb-8 leading-relaxed">
            8 customizable LCD buttons. AI powered command memory. 
            The future of streaming keyboards, built for creators who demand precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-[#00d4ff] text-black hover:bg-[#00d4ff]/90 font-semibold text-lg px-8 h-14 group"
              asChild
            >
              <Link href="#pricing">
                Pre Order Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 font-semibold text-lg px-8 h-14"
              asChild
            >
              <Link href="#features">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </Button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-[#6b7280]" />
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-24 md:py-32 relative">
        {/* Grid pattern background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/30">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Built for the
              <span className="text-[#00d4ff]"> creators</span> of tomorrow
            </h2>
            <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
              Every feature designed with precision. Every button a gateway to your creativity.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <Card className="md:col-span-2 bg-gradient-to-br from-[#141416] to-[#0a0a0b] border-white/5 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d4ff]/10 rounded-full blur-3xl group-hover:bg-[#00d4ff]/20 transition-all duration-700" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff]">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI Command Memory</h3>
                    <p className="text-[#6b7280]">Learns your workflow automatically</p>
                  </div>
                </div>
                <p className="text-[#6b7280] leading-relaxed mb-6">
                  Our proprietary machine learning engine observes how you work and surfaces your most used commands. 
                  The more you use it, the smarter it gets. All processing happens locally for complete privacy.
                </p>
                <div className="relative h-48 rounded-xl overflow-hidden bg-[#0a0a0b]">
                  <Image 
                    src="/images/feature.png" 
                    alt="AI Command Memory visualization"
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />
                </div>
              </div>
            </Card>

            {/* Regular Feature Cards */}
            {features.slice(0, 4).map((feature, index) => (
              <Card 
                key={index}
                className="bg-[#141416] border-white/5 p-6 hover:border-[#00d4ff]/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-[#6b7280]">{feature.description}</p>
              </Card>
            ))}

            {/* Wide Feature Card */}
            <Card className="md:col-span-2 lg:col-span-1 bg-[#141416] border-white/5 p-6 hover:border-[#00d4ff]/30 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform duration-300">
                {features[4].icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{features[4].title}</h3>
              <p className="text-[#6b7280]">{features[4].description}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 border-y border-white/5 bg-[#141416]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#00d4ff] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-[#6b7280] text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/30">
              How It Works
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              From box to
              <span className="text-[#00d4ff]"> live</span> in minutes
            </h2>
            <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
              No complicated setup. No driver nightmares. Just plug in and start creating.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#00d4ff]/50 to-transparent" />
                )}
                
                <div className="relative">
                  <div className="text-6xl font-bold text-[#141416] group-hover:text-[#00d4ff]/10 transition-colors duration-500 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {step.number}
                  </div>
                  <div className="absolute top-0 left-0 w-16 h-16 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff] font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-3 text-white">{step.title}</h3>
                <p className="text-[#6b7280]">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button 
              size="lg"
              className="bg-[#00d4ff] text-black hover:bg-[#00d4ff]/90 font-semibold"
              asChild
            >
              <Link href="#pricing">
                Get Started Today
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features List with Product Image */}
      <section className="py-24 md:py-32 bg-[#141416]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 to-purple-500/20 blur-3xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0b] border border-white/10">
                <Image 
                  src="/images/stramdecl.png"
                  alt="Stream Deck NEO product showcase"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <Badge className="mb-4 bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/30">
                Specifications
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Precision engineered for
                <span className="text-[#00d4ff]"> performance</span>
              </h2>
              <p className="text-[#6b7280] text-lg mb-8">
                Every detail matters. From the tactile feedback of each key to the vibrant LCD displays, 
                Stream Deck NEO is built to exceed creator expectations.
              </p>

              <div className="space-y-4">
                {[
                  'Full RGB LCD keys with 72x72 pixel resolution',
                  'USB-C connectivity with 1.5m braided cable',
                  'Compact footprint: 140 x 95 x 30mm',
                  'Adjustable magnetic stand included',
                  'Works with Mac and Windows',
                  'SDK available for custom integrations'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#00d4ff]" />
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-[#00d4ff]/50 text-[#00d4ff] hover:bg-[#00d4ff]/10"
                  asChild
                >
                  <Link href="#pricing">
                    View Full Specs
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/30">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Trusted by
              <span className="text-[#00d4ff]"> creators</span> worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-[#141416] border-white/5 p-8 hover:border-[#00d4ff]/30 transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/5 rounded-full blur-2xl group-hover:bg-[#00d4ff]/10 transition-all duration-500" />
                
                <div className="relative">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#00d4ff] text-[#00d4ff]" />
                    ))}
                  </div>
                  
                  <blockquote className="text-white text-lg mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-purple-500 flex items-center justify-center text-black font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-[#6b7280] text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-24 md:py-32 bg-[#141416]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/30">
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Choose your
              <span className="text-[#00d4ff]"> control center</span>
            </h2>
            <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
              From compact to commanding, find the Stream Deck that matches your workflow.
            </p>
          </div>

          {/* Variant Selection */}
          <div className="flex justify-center gap-4 mb-12">
            {['black', 'white'].map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedVariant === variant
                    ? 'bg-[#00d4ff] text-black'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <Card 
                key={index}
                className={`relative bg-[#141416] border-white/5 p-8 transition-all duration-500 ${
                  option.popular ? 'border-[#00d4ff]/50 scale-105' : 'hover:border-white/20'
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#00d4ff] text-black font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{option.name}</h3>
                  <p className="text-[#6b7280] text-sm mb-4">{option.description}</p>
                  <div className="text-5xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {option.price}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#00d4ff] flex-shrink-0" />
                      <span className="text-[#6b7280]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full font-semibold h-12 ${
                    option.popular
                      ? 'bg-[#00d4ff] text-black hover:bg-[#00d4ff]/90'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  asChild
                >
                  <Link href="mailto:sales@elgato.com?subject=Stream Deck Order">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Order Now
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/30">
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Questions?
              <span className="text-[#00d4ff]"> Answered.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-[#141416] hover:bg-[#141416]/80 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <div 
                  className={`transition-all duration-500 ease-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="p-6 pt-0 text-[#6b7280] bg-[#141416]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-[#0a0a0b] to-purple-500/10" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,212,255,0.3) 0%, transparent 50%)'
          }}
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Ready to
            <span className="text-[#00d4ff]"> elevate</span> your workflow?
          </h2>
          <p className="text-[#6b7280] text-xl mb-10 max-w-2xl mx-auto">
            Join over 100,000 creators who have already transformed how they work, stream, and create.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#00d4ff] text-black hover:bg-[#00d4ff]/90 font-semibold text-lg px-10 h-14 group"
              asChild
            >
              <Link href="#pricing">
                Order Stream Deck NEO
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 font-semibold text-lg px-10 h-14"
              asChild
            >
              <Link href="mailto:support@elgato.com">
                Contact Sales
              </Link>
            </Button>
          </div>
          
          <p className="mt-8 text-[#6b7280] text-sm">
            Free shipping worldwide • 2 year warranty • 30 day returns
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#00d4ff]/50 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-black" />
                </div>
                <span className="font-bold text-lg">Stream Deck</span>
              </Link>
              <p className="text-[#6b7280] text-sm mb-4">
                The future of streaming keyboards. Built for creators who demand precision.
              </p>
              <div className="flex gap-4">
                <a href="https://twitter.com/elgato" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-[#00d4ff] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/elgato" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-[#00d4ff] transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://twitch.tv/elgato" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-[#00d4ff] transition-colors">
                  <Twitch className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/elgato" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:text-[#00d4ff] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Products</h4>
              <ul className="space-y-3">
                <li><Link href="#pricing" className="text-[#6b7280] hover:text-white transition-colors text-sm">Stream Deck NEO</Link></li>
                <li><Link href="#pricing" className="text-[#6b7280] hover:text-white transition-colors text-sm">Stream Deck MK.2</Link></li>
                <li><Link href="#pricing" className="text-[#6b7280] hover:text-white transition-colors text-sm">Stream Deck XL</Link></li>
                <li><Link href="#features" className="text-[#6b7280] hover:text-white transition-colors text-sm">Accessories</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                <li><Link href="#faq" className="text-[#6b7280] hover:text-white transition-colors text-sm">FAQ</Link></li>
                <li><a href="mailto:support@elgato.com" className="text-[#6b7280] hover:text-white transition-colors text-sm">Contact Support</a></li>
                <li><Link href="#process" className="text-[#6b7280] hover:text-white transition-colors text-sm">Setup Guide</Link></li>
                <li><Link href="#features" className="text-[#6b7280] hover:text-white transition-colors text-sm">Downloads</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link href="#hero" className="text-[#6b7280] hover:text-white transition-colors text-sm">About</Link></li>
                <li><Link href="#testimonials" className="text-[#6b7280] hover:text-white transition-colors text-sm">Creators</Link></li>
                <li><a href="mailto:press@elgato.com" className="text-[#6b7280] hover:text-white transition-colors text-sm">Press</a></li>
                <li><a href="mailto:careers@elgato.com" className="text-[#6b7280] hover:text-white transition-colors text-sm">Careers</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6b7280] text-sm">
              © {new Date().getFullYear()} Elgato. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#hero" className="text-[#6b7280] hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link href="#hero" className="text-[#6b7280] hover:text-white transition-colors text-sm">Terms of Service</Link>
              <Link href="#hero" className="text-[#6b7280] hover:text-white transition-colors text-sm">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}