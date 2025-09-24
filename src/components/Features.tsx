import materialsImage from "@/assets/materials-warehouse.jpg";
import calculatorImage from "@/assets/smart-calculator.jpg";
import teamImage from "@/assets/construction-team.jpg";
import warrantyImage from "@/assets/digital-warranty.jpg";
import academyImage from "@/assets/construction-academy.jpg";
import corporateImage from "@/assets/corporate-solutions.jpg";
import {
  ShoppingCart,
  Calculator,
  Users,
  Shield,
  GraduationCap,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "شراء موارد البناء",
      description:
        "تسوق مواد البناء من أفضل الموردين بأسعار تنافسية مع ضمان الجودة والتوصيل السريع",
      image: materialsImage,
      color: "bg-blue-100 text-blue-600",
      isAvailable: false,
      path: "/suppliers",
    },
    {
      icon: Calculator,
      title: "الحاسبة الذكية",
      description:
        "احسب تكلفة مشروعك بدقة باستخدام ذكائنا الاصطناعي مع تقديرات مفصلة لكل بند",
      image: calculatorImage,
      color: "bg-green-100 text-green-600",
      isAvailable: true,
      path: "/smart-calc",
    },
    {
      icon: Users,
      title: "فريلانس البناء",
      description:
        "اعثر على أفضل المهندسين والفنيين المتخصصين، أو انضم كمحترف وابدأ العمل فوراً",
      image: teamImage,
      color: "bg-purple-100 text-purple-600",
      isAvailable: true,
      path: "/freelance",
    },
    {
      icon: Shield,
      title: "الضمان الإلكتروني",
      description:
        "ضمان شامل لجودة العمل والمواد مع نظام حماية إلكتروني متقدم وتأمين كامل",
      image: warrantyImage,
      color: "bg-emerald-100 text-emerald-600",
      isAvailable: false,
      path: "/signification",
    },
    {
      icon: GraduationCap,
      title: "أكاديمية بِناء",
      description:
        "تعلم أحدث تقنيات البناء والتشطيب من خبراء المجال مع شهادات معتمدة",
      image: academyImage,
      color: "bg-indigo-100 text-indigo-600",
      isAvailable: true,
      path: "/academy",
    },
    {
      icon: Building2,
      title: "حلول للشركات",
      description:
        "منصة متكاملة لإدارة مشاريع الشركات الكبرى مع أدوات متقدمة للمتابعة والتحكم",
      image: corporateImage,
      color: "bg-orange-100 text-orange-600",
      isAvailable: true,
      path: "/problems-solution",
    },
  ];

  return (
    <section className="section-padding bg-white" dir="rtl" id="services">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-cairo">
            المميزات الرئيسية للمنصة
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-cairo">
            منصة شاملة تجمع كل ما تحتاجه لإنجاز مشروع البناء الخاص بك بأعلى جودة
            وأفضل الأسعار
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-feature overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-spring"
                />
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.color} shadow-lg`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground font-cairo leading-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-cairo">
                  {feature.description}
                </p>
                {feature.isAvailable ? (
                  <Link to={feature.path} className="block">
                    <button className="text-primary hover:text-primary-dark font-semibold font-cairo transition-smooth">
                      اعرف المزيد ←
                    </button>
                  </Link>
                ) : (
                  <span className="block text-primary-dark font-semibold font-cairo transition-smooth">
                    قريبا
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
