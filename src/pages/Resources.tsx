import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Download, BookOpen, Calculator, FileText, Video, Image as ImageIcon, Users } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      id: 'guides',
      title: 'الأدلة الإرشادية',
      icon: <BookOpen className="w-5 h-5" />,
      count: 24,
    },
    {
      id: 'calculators',
      title: 'الحاسبات',
      icon: <Calculator className="w-5 h-5" />,
      count: 12,
    },
    {
      id: 'templates',
      title: 'القوالب',
      icon: <FileText className="w-5 h-5" />,
      count: 18,
    },
    {
      id: 'videos',
      title: 'الفيديوهات',
      icon: <Video className="w-5 h-5" />,
      count: 36,
    },
    {
      id: 'images',
      title: 'المعرض',
      icon: <ImageIcon className="w-5 h-5" />,
      count: 120,
    },
    {
      id: 'community',
      title: 'المجتمع',
      icon: <Users className="w-5 h-5" />,
      count: 850,
    },
  ];

  const featuredResources = [
    {
      title: 'دليل تكاليف البناء 2024',
      description: 'دليل شامل لأسعار مواد البناء والعمالة المحدثة',
      category: 'أدلة',
      type: 'PDF',
      size: '2.5 MB',
      downloads: 1250,
      rating: 4.8,
      featured: true,
    },
    {
      title: 'حاسبة تكلفة البناء الذكية',
      description: 'احسب تكلفة مشروعك بدقة عالية مع الأسعار المحدثة',
      category: 'حاسبات',
      type: 'تطبيق ويب',
      size: 'مجاني',
      downloads: 3400,
      rating: 4.9,
      featured: true,
    },
    {
      title: 'قالب عقد مقاولة قانوني',
      description: 'قالب عقد مقاولة معتمد قانونياً لحماية حقوقك',
      category: 'قوالب',
      type: 'DOCX',
      size: '150 KB',
      downloads: 890,
      rating: 4.6,
      featured: true,
    },
    {
      title: 'سلسلة تعلم أساسيات البناء',
      description: '12 فيديو تعليمي لأساسيات البناء والتشييد',
      category: 'فيديوهات',
      type: 'فيديو HD',
      size: '2.1 GB',
      downloads: 2100,
      rating: 4.7,
      featured: true,
    },
  ];

  const guides = [
    {
      title: 'دليل اختيار المقاول المناسب',
      description: 'خطوات مهمة لاختيار المقاول الموثوق لمشروعك',
      category: 'إدارة المشاريع',
      readTime: '15 دقيقة',
      difficulty: 'مبتدئ',
    },
    {
      title: 'أساسيات تصميم المنازل العصرية',
      description: 'مبادئ التصميم المعماري الحديث والاتجاهات الحالية',
      category: 'التصميم',
      readTime: '25 دقيقة',
      difficulty: 'متوسط',
    },
    {
      title: 'دليل كامل لمراحل البناء',
      description: 'من الحفر إلى التشطيب النهائي - دليل شامل',
      category: 'البناء',
      readTime: '45 دقيقة',
      difficulty: 'متقدم',
    },
    {
      title: 'اختيار مواد البناء المناسبة',
      description: 'مقارنة شاملة لمواد البناء المختلفة وخصائصها',
      category: 'المواد',
      readTime: '20 دقيقة',
      difficulty: 'متوسط',
    },
  ];

  const calculators = [
    {
      title: 'حاسبة كمية الخرسانة',
      description: 'احسب كمية الخرسانة المطلوبة للأساسات والأعمدة',
      category: 'كميات',
      accuracy: '98%',
    },
    {
      title: 'حاسبة كمية الطوب',
      description: 'حساب عدد الطوب المطلوب للحوائط والفواصل',
      category: 'كميات',
      accuracy: '97%',
    },
    {
      title: 'حاسبة تكلفة التشطيب',
      description: 'تقدير تكلفة أعمال التشطيب الداخلي والخارجي',
      category: 'تكاليف',
      accuracy: '95%',
    },
    {
      title: 'حاسبة مساحة الأرض',
      description: 'حساب مساحة الأرض بأشكال مختلفة ومعقدة',
      category: 'قياسات',
      accuracy: '99%',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-subtle" dir="rtl">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6 font-cairo">
              مصادر ومراجع البناء
            </h1>
            <p className="text-xl text-muted-foreground font-cairo leading-relaxed mb-8">
              مكتبة شاملة من الأدلة والحاسبات والقوالب لمساعدتك في مشروع البناء
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="ابحث في المصادر..." 
                className="pr-12 py-6 text-lg font-cairo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16" dir="rtl">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {resourceCategories.map((category) => (
              <Card key={category.id} className="text-center hover:shadow-elegant transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 font-cairo">{category.title}</h3>
                  <p className="text-sm text-muted-foreground font-cairo">{category.count} عنصر</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-muted/20" dir="rtl">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-cairo">
              المصادر المميزة
            </h2>
            <p className="text-xl text-muted-foreground font-cairo">
              أهم المصادر والأدوات التي يحتاجها كل مهتم بالبناء
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="font-cairo text-xs">
                      {resource.category}
                    </Badge>
                    <Badge variant="outline" className="font-cairo text-xs">
                      {resource.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-cairo line-clamp-2">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="font-cairo">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="font-cairo">{resource.size}</span>
                    <span className="font-cairo">{resource.downloads} تحميل</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="mr-1 font-cairo">{resource.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full font-cairo" size="sm">
                    <Download className="w-4 h-4 ml-2" />
                    تحميل
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16" dir="rtl">
        <div className="container-custom">
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="guides" className="font-cairo">الأدلة</TabsTrigger>
              <TabsTrigger value="calculators" className="font-cairo">الحاسبات</TabsTrigger>
              <TabsTrigger value="templates" className="font-cairo">القوالب</TabsTrigger>
              <TabsTrigger value="videos" className="font-cairo">الفيديوهات</TabsTrigger>
            </TabsList>

            <TabsContent value="guides">
              <div className="grid md:grid-cols-2 gap-6">
                {guides.map((guide, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="font-cairo text-xs">
                          {guide.category}
                        </Badge>
                        <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                          <span className="font-cairo">{guide.readTime}</span>
                          <span>•</span>
                          <span className="font-cairo">{guide.difficulty}</span>
                        </div>
                      </div>
                      <CardTitle className="font-cairo">{guide.title}</CardTitle>
                      <CardDescription className="font-cairo">
                        {guide.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full font-cairo">
                        <BookOpen className="w-4 h-4 ml-2" />
                        قراءة الدليل
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calculators">
              <div className="grid md:grid-cols-2 gap-6">
                {calculators.map((calculator, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="font-cairo text-xs">
                          {calculator.category}
                        </Badge>
                        <div className="flex items-center text-sm">
                          <span className="text-green-500 font-semibold font-cairo">
                            دقة {calculator.accuracy}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="font-cairo">{calculator.title}</CardTitle>
                      <CardDescription className="font-cairo">
                        {calculator.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full font-cairo">
                        <Calculator className="w-4 h-4 ml-2" />
                        استخدم الحاسبة
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="templates">
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-cairo">
                  قوالب جاهزة للاستخدام
                </h3>
                <p className="text-muted-foreground font-cairo mb-8">
                  مجموعة من القوالب القانونية والإدارية لمشاريع البناء
                </p>
                <Button size="lg" className="font-cairo">
                  تصفح القوالب
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-cairo">
                  مكتبة الفيديوهات التعليمية
                </h3>
                <p className="text-muted-foreground font-cairo mb-8">
                  دروس مصورة لتعلم أساسيات البناء والتشييد من الخبراء
                </p>
                <Button size="lg" className="font-cairo">
                  شاهد الفيديوهات
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground" dir="rtl">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 font-cairo">
            اشترك في النشرة الإخبارية
          </h2>
          <p className="text-xl mb-8 opacity-90 font-cairo">
            احصل على أحدث المصادر والأدلة مباشرة في بريدك الإلكتروني
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <Input 
              placeholder="بريدك الإلكتروني" 
              className="bg-primary-foreground text-foreground font-cairo"
            />
            <Button variant="secondary" className="font-cairo">
              اشترك
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;