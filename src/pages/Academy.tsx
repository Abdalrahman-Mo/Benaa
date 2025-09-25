import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EngMohamed from "../assets/eng-1.jpg";
import EngSara from "../assets/eng-2.jpg";
import EngOmer from "../assets/eng-3.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookOpen,
  Users,
  Award,
  Clock,
  Play,
  Star,
  Download,
  CheckCircle,
  Video,
  FileText,
  Trophy,
} from "lucide-react";

const Academy = () => {
  const stats = [
    {
      title: "الطلاب المسجلون",
      value: "12,500+",
      icon: <Users className="w-6 h-6" />,
      description: "طالب نشط",
    },
    {
      title: "الدورات المتاحة",
      value: "85+",
      icon: <BookOpen className="w-6 h-6" />,
      description: "دورة تدريبية",
    },
    {
      title: "الشهادات الممنوحة",
      value: "8,200+",
      icon: <Award className="w-6 h-6" />,
      description: "شهادة معتمدة",
    },
    {
      title: "ساعات التدريب",
      value: "2,100+",
      icon: <Clock className="w-6 h-6" />,
      description: "ساعة محتوى",
    },
  ];

  const featuredCourses = [
    {
      wallpaperImg:
        "data:image/webp;base64,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",
      title: "أساسيات الهندسة المعمارية",
      instructor: "د. محمد أحمد",
      instructorImage: EngMohamed,
      duration: "40 ساعة",
      students: 1250,
      rating: 4.8,
      level: "مبتدئ",
      price: "1,200 جنيه",
      originalPrice: "1,500 جنيه",
      description:
        "تعلم أساسيات التصميم المعماري وأهم البرامج المستخدمة في المجال",
      thumbnail: "/placeholder.svg",
      lessons: 32,
      certificate: true,
      discount: 20,
    },
    {
      wallpaperImg:
        "data:image/webp;base64,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",
      title: "إدارة مشاريع البناء الحديثة",
      instructor: "م. سارة محمود",
      instructorImage: EngSara,
      duration: "35 ساعة",
      students: 890,
      rating: 4.9,
      level: "متوسط",
      price: "1,800 جنيه",
      originalPrice: "2,200 جنيه",
      description:
        "تعلم إدارة المشاريع بفعالية باستخدام أحدث الأساليب والتقنيات",
      thumbnail: "/placeholder.svg",
      lessons: 28,
      certificate: true,
      discount: 18,
    },
    {
      wallpaperImg:
        "https://th.bing.com/th/id/OIP.MdtKxIMNM0XpH_W_3tOh_wHaEO?w=257&h=180&c=7&r=0&o=7&dpr=2.5&pid=1.7&rm=3",
      title: "تحليل المنشآت والتصميم الإنشائي",
      instructor: "د. عمر حسن",
      instructorImage: EngOmer,
      duration: "50 ساعة",
      students: 650,
      rating: 4.7,
      level: "متقدم",
      price: "2,500 جنيه",
      originalPrice: "3,000 جنيه",
      description:
        "تخصص في التحليل الإنشائي وتصميم المنشآت الخرسانية والمعدنية",
      thumbnail: "/placeholder.svg",
      lessons: 42,
      certificate: true,
      discount: 17,
    },
  ];

  const courseCategories = [
    {
      name: "الهندسة المعمارية",
      courses: 18,
      icon: "🏗️",
      description: "تصميم المباني والتخطيط العمراني",
    },
    {
      name: "الهندسة الإنشائية",
      courses: 15,
      icon: "🏢",
      description: "تحليل وتصميم المنشآت",
    },
    {
      name: "إدارة المشاريع",
      courses: 12,
      icon: "📊",
      description: "إدارة وتخطيط مشاريع البناء",
    },
    {
      name: "تقدير التكاليف",
      courses: 8,
      icon: "💰",
      description: "حساب الكميات والتكاليف",
    },
    {
      name: "البرامج الهندسية",
      courses: 22,
      icon: "💻",
      description: "AutoCAD, Revit, SAP2000",
    },
    {
      name: "السلامة والجودة",
      courses: 10,
      icon: "🛡️",
      description: "معايير السلامة وضبط الجودة",
    },
  ];

  const instructors = [
    {
      name: "د. محمد أحمد الشريف",
      title: "أستاذ الهندسة المعمارية",
      experience: "15+ سنة خبرة",
      courses: 8,
      students: 3200,
      rating: 4.9,
      avatar: EngMohamed,
      specialization: "التصميم المعماري والتخطيط العمراني",
    },
    {
      name: "د. سارة محمود عبدالله",
      title: "خبيرة إدارة المشاريع",
      experience: "12+ سنة خبرة",
      courses: 6,
      students: 2100,
      rating: 4.8,
      avatar: EngSara,
      specialization: "إدارة المشاريع والتخطيط الاستراتيجي",
    },
    {
      name: "م. عمر حسن محمد",
      title: "مهندس إنشائي كبير",
      experience: "18+ سنة خبرة",
      courses: 10,
      students: 2800,
      rating: 4.7,
      avatar: EngOmer,
      specialization: "التحليل الإنشائي والتصميم",
    },
  ];

  const learningPaths = [
    {
      title: "مسار المهندس المعماري",
      description: "رحلة شاملة لتصبح مهندساً معمارياً متخصصاً",
      courses: 6,
      duration: "120 ساعة",
      level: "من المبتدئ إلى المحترف",
      price: "4,500 جنيه",
      originalPrice: "6,000 جنيه",
      steps: [
        "أساسيات الرسم الهندسي",
        "مقدمة في AutoCAD",
        "التصميم المعماري الأساسي",
        "تصميم المساقط والواجهات",
        "إنتاج الرسومات التنفيذية",
        "مشروع تخرج متكامل",
      ],
    },
    {
      title: "مسار مدير المشاريع",
      description: "تعلم إدارة مشاريع البناء من البداية للنهاية",
      courses: 5,
      duration: "95 ساعة",
      level: "متوسط إلى متقدم",
      price: "3,800 جنيه",
      originalPrice: "5,000 جنيه",
      steps: [
        "أساسيات إدارة المشاريع",
        "التخطيط والجدولة الزمنية",
        "إدارة التكاليف والميزانيات",
        "إدارة المخاطر والجودة",
        "قيادة فرق العمل",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}

      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center pt-20 pb-16 bg-gradient-subtle"
        style={{
          backgroundImage: `linear-gradient(#ff9900, #F2C94C)`,
        }}
        dir="rtl"
      >
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground  text-white mb-6 font-cairo">
              أكاديمية بناء للتدريب
            </h1>
            <p className="text-xl text-muted-foreground font-cairo text-white leading-relaxed mb-8">
              طور مهاراتك في البناء والتشييد مع خبراء المجال واحصل على شهادات
              معتمدة
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="font-cairo px-8">
                تصفح الدورات
              </Button>
              <Button size="lg" variant="outline" className="font-cairo px-8">
                تجربة مجانية
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" dir="rtl">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </h3>
                  <p className="font-semibold text-foreground mb-1 font-cairo">
                    {stat.title}
                  </p>
                  <p className="text-sm text-muted-foreground font-cairo">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" dir="rtl">
        <div className="container-custom">
          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto mb-12">
              <TabsTrigger value="courses" className="font-cairo">
                الدورات المميزة
              </TabsTrigger>
              <TabsTrigger value="categories" className="font-cairo">
                التخصصات
              </TabsTrigger>
              <TabsTrigger value="paths" className="font-cairo">
                المسارات
              </TabsTrigger>
              <TabsTrigger value="instructors" className="font-cairo">
                المدربون
              </TabsTrigger>
            </TabsList>

            <TabsContent value="courses">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-foreground mb-4 font-cairo">
                    الدورات المميزة
                  </h2>
                  <p className="text-xl text-muted-foreground font-cairo">
                    دورات عالية الجودة من خبراء المجال
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {featuredCourses.map((course, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-elegant transition-shadow overflow-hidden"
                    >
                      <div className="relative">
                        <div className="aspect-video bg-gradient-subtle">
                          <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                              backgroundImage: `url(${course.wallpaperImg})`,
                              backgroundPosition: "bottom",
                            }}
                          >
                            <Play className="w-12 h-12 text-primary" />
                          </div>
                        </div>
                        {course.discount && (
                          <Badge className="absolute top-4 right-4 bg-red-500">
                            خصم {course.discount}%
                          </Badge>
                        )}
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-cairo">
                          {course.lessons} درس
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="font-cairo">
                            {course.level}
                          </Badge>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="mr-1 text-sm">
                              {course.rating}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-2 font-cairo line-clamp-2">
                          {course.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 font-cairo line-clamp-3">
                          {course.description}
                        </p>

                        <div className="flex items-center space-x-4 space-x-reverse mb-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={course.instructorImage} />
                            <AvatarFallback className="text-xs font-cairo">
                              {course.instructor.split(" ")[1]?.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-semibold font-cairo">
                              {course.instructor}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 ml-1" />
                            <span className="font-cairo">
                              {course.duration}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 ml-1" />
                            <span className="font-cairo">
                              {course.students} طالب
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-2xl font-bold text-primary font-cairo">
                              {course.price}
                            </span>
                            {course.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through mr-2 font-cairo">
                                {course.originalPrice}
                              </span>
                            )}
                          </div>
                          {course.certificate && (
                            <Badge variant="secondary" className="font-cairo">
                              <Award className="w-3 h-3 ml-1" />
                              شهادة
                            </Badge>
                          )}
                        </div>

                        <Button className="w-full font-cairo">
                          اشترك الآن
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="categories">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-foreground mb-4 font-cairo">
                    تخصصات التدريب
                  </h2>
                  <p className="text-xl text-muted-foreground font-cairo">
                    اختر التخصص الذي يناسب أهدافك المهنية
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courseCategories.map((category, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-elegant transition-shadow cursor-pointer"
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{category.icon}</div>
                        <h3 className="text-xl font-bold text-foreground mb-2 font-cairo">
                          {category.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 font-cairo">
                          {category.description}
                        </p>
                        <Badge variant="outline" className="font-cairo">
                          {category.courses} دورة
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="paths">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-foreground mb-4 font-cairo">
                    المسارات التعليمية
                  </h2>
                  <p className="text-xl text-muted-foreground font-cairo">
                    مسارات متكاملة لتطوير خبرتك المهنية
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {learningPaths.map((path, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-elegant transition-shadow"
                    >
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-primary/10 text-primary font-cairo">
                            مسار متكامل
                          </Badge>
                          <div className="text-left">
                            <p className="text-2xl font-bold text-primary font-cairo">
                              {path.price}
                            </p>
                            <p className="text-sm text-muted-foreground line-through font-cairo">
                              {path.originalPrice}
                            </p>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-foreground mb-3 font-cairo">
                          {path.title}
                        </h3>

                        <p className="text-muted-foreground mb-6 font-cairo">
                          {path.description}
                        </p>

                        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                          <div>
                            <p className="text-sm text-muted-foreground font-cairo">
                              الدورات
                            </p>
                            <p className="font-bold font-cairo">
                              {path.courses}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground font-cairo">
                              المدة
                            </p>
                            <p className="font-bold font-cairo">
                              {path.duration}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground font-cairo">
                              المستوى
                            </p>
                            <p className="font-bold font-cairo">{path.level}</p>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          <p className="font-semibold font-cairo">
                            محتوى المسار:
                          </p>
                          {path.steps.map((step, stepIndex) => (
                            <div
                              key={stepIndex}
                              className="flex items-center space-x-3 space-x-reverse"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-sm font-cairo">{step}</span>
                            </div>
                          ))}
                        </div>

                        <Button className="w-full font-cairo" size="lg">
                          ابدأ المسار
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="instructors">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-foreground mb-4 font-cairo">
                    نخبة من المدربين
                  </h2>
                  <p className="text-xl text-muted-foreground font-cairo">
                    تعلم من خبراء المجال والأكاديميين المتميزين
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {instructors.map((instructor, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-elegant transition-shadow"
                    >
                      <CardContent className="p-6 text-center">
                        <Avatar className="h-24 w-24 mx-auto mb-4">
                          <AvatarImage src={instructor.avatar} />
                          <AvatarFallback className="text-2xl font-cairo">
                            {instructor.name.split(" ")[1]?.charAt(0)}
                          </AvatarFallback>
                        </Avatar>

                        <h3 className="text-xl font-bold text-foreground mb-2 font-cairo">
                          {instructor.name}
                        </h3>

                        <p className="text-primary font-semibold mb-2 font-cairo">
                          {instructor.title}
                        </p>

                        <p className="text-muted-foreground text-sm mb-4 font-cairo">
                          {instructor.specialization}
                        </p>

                        <div className="flex items-center justify-center mb-4">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="mr-1 font-semibold">
                            {instructor.rating}
                          </span>
                          <span className="text-sm text-muted-foreground font-cairo">
                            تقييم
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                          <div>
                            <p className="text-lg font-bold">
                              {instructor.experience}
                            </p>
                            <p className="text-xs text-muted-foreground font-cairo">
                              خبرة
                            </p>
                          </div>
                          <div>
                            <p className="text-lg font-bold">
                              {instructor.courses}
                            </p>
                            <p className="text-xs text-muted-foreground font-cairo">
                              دورات
                            </p>
                          </div>
                          <div>
                            <p className="text-lg font-bold">
                              {instructor.students}
                            </p>
                            <p className="text-xs text-muted-foreground font-cairo">
                              طالب
                            </p>
                          </div>
                        </div>

                        <Button variant="outline" className="w-full font-cairo">
                          عرض الدورات
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground" dir="rtl">
        <div className="container-custom text-center">
          <Trophy className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4 font-cairo">
            ابدأ رحلة التعلم اليوم
          </h2>
          <p className="text-xl mb-8 opacity-90 font-cairo">
            انضم إلى آلاف المتدربين واحصل على شهادات معتمدة في مجال البناء
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" className="font-cairo px-8">
              تصفح جميع الدورات
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:border-primary-foreground text-primary hover:bg-primary hover:text-white font-cairo px-8"
            >
              تجربة مجانية
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academy;
