import { AlertTriangle, DollarSign, Clock, Shield, Package, HelpCircle } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'صعوبة العثور على المقاولين الموثوقين',
      description: 'تجد صعوبة في العثور على مقاولين محترفين وموثوقين لمشروعك'
    },
    {
      icon: DollarSign,
      title: 'ارتفاع التكاليف غير المتوقعة',
      description: 'تكاليف إضافية مفاجئة تزيد من ميزانية المشروع'
    },
    {
      icon: Clock,
      title: 'تأخير في مواعيد التسليم',
      description: 'عدم الالتزام بالمواعيد المحددة للتسليم'
    },
    {
      icon: Shield,
      title: 'عدم وجود ضمانات كافية',
      description: 'نقص في ضمانات الجودة والحماية للعميل'
    },
    {
      icon: Package,
      title: 'صعوبة شراء مواد البناء',
      description: 'تعقيدات في العثور على مواد البناء بأفضل الأسعار'
    },
    {
      icon: HelpCircle,
      title: 'نقص الخبرة والاستشارات',
      description: 'عدم توفر استشارات متخصصة ونصائح مهنية'
    }
  ];

  return (
    <section className="section-padding bg-construction-gray" dir="rtl">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-cairo">
            المشاكل التي نحلها لك
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-cairo">
            نحن نفهم التحديات التي تواجهها في مشاريع البناء والتشطيب، ولهذا طورنا حلولاً شاملة لكل مشكلة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="card-feature group">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-smooth">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-cairo leading-tight">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-cairo">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;