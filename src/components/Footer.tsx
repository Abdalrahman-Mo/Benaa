import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: [
      'شراء موارد البناء',
      'الحاسبة الذكية',
      'فريلانس البناء',
      'الضمان الإلكتروني',
      'أكاديمية بِناء',
      'حلول للشركات'
    ],
    company: [
      'من نحن',
      'رؤيتنا',
      'فريق العمل',
      'الشركاء',
      'المدونة',
      'الأخبار'
    ],
    support: [
      'مركز المساعدة',
      'اتصل بنا',
      'الأسئلة الشائعة',
      'البلاغات',
      'الدعم الفني',
      'تتبع الطلبات'
    ],
    legal: [
      'الشروط والأحكام',
      'سياسة الخصوصية',
      'سياسة الاسترداد',
      'اتفاقية المستخدم',
      'حقوق الملكية',
      'إخلاء المسؤولية'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-foreground text-white" dir="rtl">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">ب</span>
                </div>
                <span className="font-bold text-2xl font-cairo">بِناء</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed font-cairo">
                أول منصة متكاملة لخدمات البناء والتشطيبات في مصر والعالم العربي. 
                نوفر لك كل ما تحتاجه لإنجاز مشروعك بأعلى جودة.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 space-x-reverse text-gray-300">
                  <Phone size={18} />
                  <span className="font-cairo">+20 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse text-gray-300">
                  <Mail size={18} />
                  <span className="font-cairo">info@binaa.com</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse text-gray-300">
                  <MapPin size={18} />
                  <span className="font-cairo">القاهرة، مصر</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white font-cairo">خدماتنا</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-primary transition-smooth font-cairo">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white font-cairo">الشركة</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-primary transition-smooth font-cairo">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white font-cairo">الدعم</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-primary transition-smooth font-cairo">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white font-cairo">قانوني</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-primary transition-smooth font-cairo">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-right font-cairo">
              © 2024 بِناء من رملة لعمارة. جميع الحقوق محفوظة.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 space-x-reverse">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-lg flex items-center justify-center transition-smooth"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;