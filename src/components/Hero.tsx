import heroImage from "@/assets/hero.jpg";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const stats = [
    { number: "+10k", label: "مشروع مكتمل" },
    { number: "+5k", label: "مهندس وفني" },
    { number: "+50", label: "مدينة مصرية" },
    { number: "24/7", label: "دعم فني" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container-custom" dir="rtl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cairo leading-tight">
                  <span className="text-primary">بِناء</span>
                  <br />
                  من رملة لعمارة
                </h1>

                <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-cairo max-w-2xl">
                  أول منصة متكاملة لخدمات البناء والتشطيبات في مصر والعالم
                  العربي. من التخطيط إلى التنفيذ، نوفر لك كل ما تحتاجه لإنجاز
                  مشروعك بأعلى جودة وأفضل الأسعار.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/start-project">
                  <button className="btn-primary text-lg px-8 py-4 font-cairo">
                    ابدأ الآن
                  </button>
                </Link>
                {/* <button className="btn-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground text-lg px-8 py-4 font-cairo flex items-center justify-center gap-3">
                  <Play size={20} />
                  شاهد الفيديو
                </button> */}
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-smooth">
                    <div className="stat-number text-primary font-cairo">
                      {stat.number}
                    </div>
                    <div className="stat-label text-white font-cairo">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
