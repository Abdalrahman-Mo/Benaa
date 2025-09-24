import { ArrowLeft, Users, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
const CallToAction = () => {
  const finalStats = [
    { number: "98%", label: "رضا العملاء" },
    { number: "48ساعة", label: "متوسط الاستجابة" },
    { number: "100%", label: "ضمان الجودة" },
    { number: "24/7", label: "دعم فني" },
  ];

  return (
    <section
      className="section-padding bg-gradient-to-r from-[#5d4f3f]  to-[#2f2e2c]"
      dir="rtl"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-foreground mb-6 font-cairo">
            ابدأ رحلتك معنا اليوم
          </h2>
          <p className="text-lg md:text-xl text-white text-muted-foreground max-w-3xl mx-auto leading-relaxed font-cairo">
            انضم إلى آلاف العملاء الذين وثقوا بخدماتنا لإنجاز مشاريعهم بنجاح
          </p>
        </div>

        {/* User Paths */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Project Owners */}
          <div className="card-feature text-center bg-gradient-card border-[1px] border-white">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-primary" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4 font-cairo">
              أصحاب المشاريع
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-8 font-cairo">
              احصل على كل ما تحتاجه لإنجاز مشروعك من مواد بناء وخدمات احترافية
              بأفضل الأسعار
            </p>

            <Link to="/start-project">
              <button className="btn-primary w-full text-lg py-4 font-cairo flex items-center justify-center gap-3">
                ابدأ مشروعك
                <ArrowLeft size={20} />
              </button>
            </Link>
          </div>

          {/* Professionals */}
          <div className="card-feature text-center bg-gradient-card border-[1px] border-white">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-secondary/50 rounded-2xl flex items-center justify-center">
                <UserCheck className="w-10 h-10 text-secondary-foreground" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4 font-cairo">
              المهندسين وصنايعية
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-8 font-cairo">
              انضم كمحترف واعرض خدماتك لآلاف العملاء، واحصل على مشاريع مضمونة
              الدفع
            </p>
            <Link to="/freelance">
              <button className="btn-secondary w-full text-lg py-4 font-cairo flex items-center justify-center gap-3">
                انضم كمحترف
                <ArrowLeft size={20} />
              </button>
            </Link>
          </div>
        </div>

        {/* Final Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {finalStats.map((stat, index) => (
            <div key={index} className="text-center ">
              <div className=" rounded-xl p-6 hover:shadow-lg hover:shadow-xl transition-smooth">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-cairo">
                  {stat.number}
                </div>
                <div className="text-white text-sm md:text-base text-muted-foreground font-medium font-cairo">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
