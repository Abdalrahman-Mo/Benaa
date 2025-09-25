import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      title: "أساسيات الهندسة المعمارية",
      instructor: "د. محمد أحمد",
      instructorImage: "/placeholder.svg",
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
      title: "إدارة مشاريع البناء الحديثة",
      instructor: "م. سارة محمود",
      instructorImage: "/placeholder.svg",
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
      title: "تحليل المنشآت والتصميم الإنشائي",
      instructor: "د. عمر حسن",
      instructorImage: "/placeholder.svg",
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
      avatar: "/placeholder.svg",
      specialization: "التصميم المعماري والتخطيط العمراني",
    },
    {
      name: "د. سارة محمود عبدالله",
      title: "خبيرة إدارة المشاريع",
      experience: "12+ سنة خبرة",
      courses: 6,
      students: 2100,
      rating: 4.8,
      avatar: "/placeholder.svg",
      specialization: "إدارة المشاريع والتخطيط الاستراتيجي",
    },
    {
      name: "م. عمر حسن محمد",
      title: "مهندس إنشائي كبير",
      experience: "18+ سنة خبرة",
      courses: 10,
      students: 2800,
      rating: 4.7,
      avatar: "/placeholder.svg",
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
                          <div className="absolute inset-0 flex items-center justify-center">
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
