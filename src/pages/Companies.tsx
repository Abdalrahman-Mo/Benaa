import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Award, TrendingUp, CheckCircle, Star } from 'lucide-react';

const Companies = () => {
  const corporateServices = [
    {
      title: 'حلول البناء للشركات',
      description: 'خدمات بناء متكاملة للشركات والمؤسسات الكبيرة',
      icon: <Building className="w-8 h-8" />,
      features: ['تصميم متخصص', 'إدارة مشاريع', 'ضمان شامل']
    },
    {
      title: 'التدريب المؤسسي',
      description: 'برامج تدريبية متخصصة لتطوير فرق العمل',
      icon: <Users className="w-8 h-8" />,
      features: ['تدريب مخصص', 'شهادات معتمدة', 'متابعة مستمرة']
    },
    {
      title: 'الاستشارات الهندسية',
      description: 'استشارات فنية متخصصة للمشاريع الكبيرة',
      icon: <Award className="w-8 h-8" />,
      features: ['خبراء متخصصون', 'حلول مبتكرة', 'دعم تقني']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-subtle" dir="rtl">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6 font-cairo">
              حلول البناء للشركات
            </h1>
            <p className="text-xl text-muted-foreground font-cairo leading-relaxed">
              خدمات متخصصة ومتكاملة للشركات والمؤسسات في مجال البناء والتشييد
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" dir="rtl">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-cairo">{service.title}</CardTitle>
                  <CardDescription className="font-cairo">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 space-x-reverse">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="font-cairo">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 font-cairo">تواصل معنا</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Companies;