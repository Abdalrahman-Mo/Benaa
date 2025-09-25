import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Building, Target } from "lucide-react";

const About = () => {
  const stats = [
    {
      title: "سنوات الخبرة",
      value: "15+",
      icon: <Award className="w-6 h-6" />,
    },
    { title: "العملاء", value: "5000+", icon: <Users className="w-6 h-6" /> },
    {
      title: "المشاريع المنجزة",
      value: "2500+",
      icon: <Building className="w-6 h-6" />,
    },
    {
      title: "معدل النجاح",
      value: "98%",
      icon: <Target className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      className=""
      <section
        className=" relative h-96 bg-cover bg-center flex items-center justify-center pt-20 pb-16 bg-gradient-subtle"
        style={{
          backgroundImage: `linear-gradient(#ff9900, #F2C94C)`,
        }}
        dir="rtl"
      >
        <div className="container-custom">
          <div className="text-center  max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white text-foreground mb-6 font-cairo">
              من نحن
            </h1>
            <p className="text-xl text-muted-foreground text-white font-cairo leading-relaxed">
              رواد في مجال البناء والتشييد، نقدم حلولاً متكاملة وخدمات عالية
              الجودة
            </p>
          </div>
        </div>
      </section>
      <section className="py-20" dir="rtl">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </h3>
                  <p className="font-semibold text-foreground font-cairo">
                    {stat.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8 font-cairo">
              رؤيتنا ورسالتنا
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="border-2 border-foreground/10 p-4 rounded-xl">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-cairo">
                  رؤيتنا
                </h3>
                <p className="text-muted-foreground font-cairo leading-relaxed">
                  أن نكون الشركة الرائدة في مجال البناء والتشييد في المنطقة،
                  نقدم حلولاً مبتكرة ومستدامة تلبي احتياجات عملائنا وتساهم في
                  تطوير المجتمع.
                </p>
              </div>
              <div className="border-2 border-foreground/10 p-4 rounded-xl">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-cairo">
                  رسالتنا
                </h3>
                <p className="text-muted-foreground font-cairo leading-relaxed">
                  تقديم خدمات بناء عالية الجودة باستخدام أحدث التقنيات والمواد،
                  مع التزامنا بالمواعيد والميزانية، وضمان رضا العملاء التام.
                </p>
              </div>
            </div>
            <Button size="lg" className="mt-12 font-cairo">
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
