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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Star,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  Award,
  TrendingUp,
} from "lucide-react";
import eng_1 from "../assets/eng-1.jpg";
import eng_2 from "../assets/eng-2.jpg";
import eng_3 from "../assets/eng-3.jpg";
const Freelance = () => {
  const stats = [
    {
      title: "المستقلون المسجلون",
      value: "2,450+",
      icon: <Users className="w-6 h-6" />,
      description: "مهندس ومقاول معتمد",
    },
    {
      title: "المشاريع المكتملة",
      value: "1,890+",
      icon: <Briefcase className="w-6 h-6" />,
      description: "مشروع ناجح",
    },
    {
      title: "معدل الرضا",
      value: "98.5%",
      icon: <Award className="w-6 h-6" />,
      description: "من العملاء راضون",
    },
    {
      title: "النمو الشهري",
      value: "+15%",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "في المشاريع الجديدة",
    },
  ];

  const topFreelancers = [
    {
      avatar: eng_1,
      name: "م. أحمد محمود",
      title: "مهندس معماري كبير",
      location: "القاهرة، مصر",
      rating: 4.9,
      completedProjects: 127,
      hourlyRate: "150-200",
      skills: ["التصميم المعماري", "التخطيط العمراني", "AutoCAD", "Revit"],
      verified: true,
      responseTime: "2 ساعات",
    },
    {
      avatar: eng_2,
      name: "م. فاطمة أحمد",
      title: "مهندسة إنشائية",
      location: "الإسكندرية، مصر",
      rating: 4.8,
      completedProjects: 89,
      hourlyRate: "120-180",
      skills: ["التصميم الإنشائي", "تحليل المنشآت", "SAP2000", "ETABS"],
      verified: true,
      responseTime: "1 ساعة",
    },
    {
      avatar: eng_3,
      name: "مقاول محمد عبدالله",
      title: "مقاول عام معتمد",
      location: "الجيزة، مصر",
      rating: 4.7,
      completedProjects: 156,
      hourlyRate: "100-150",
      skills: ["البناء والتشييد", "إدارة المشاريع", "التشطيبات", "الإشراف"],
      verified: true,
      responseTime: "3 ساعات",
    },
  ];

  const jobCategories = [
    {
      category: "التصميم المعماري",
      jobs: 45,
      averageRate: "150 جنيه/ساعة",
      skills: ["AutoCAD", "3ds Max", "SketchUp", "Photoshop"],
    },
    {
      category: "الهندسة الإنشائية",
      jobs: 32,
      averageRate: "130 جنيه/ساعة",
      skills: ["SAP2000", "ETABS", "التحليل الإنشائي", "الحاسوب"],
    },
    {
      category: "إدارة المشاريع",
      jobs: 28,
      averageRate: "120 جنيه/ساعة",
      skills: ["MS Project", "Primavera", "إدارة المخاطر", "التخطيط"],
    },
    {
      category: "أعمال المقاولات",
      jobs: 67,
      averageRate: "100 جنيه/ساعة",
      skills: ["البناء", "التشطيبات", "الإشراف", "إدارة الموقع"],
    },
  ];

  const featuredJobs = [
    {
      title: "تصميم فيلا سكنية مودرن",
      client: "أحمد محمد",
      budget: "8,000 - 12,000 جنيه",
      duration: "3-4 أسابيع",
      description:
        "مطلوب تصميم معماري لفيلا سكنية بمساحة 400 متر على طراز عصري مع حديقة",
      skills: ["التصميم المعماري", "AutoCAD", "التصور ثلاثي الأبعاد"],
      proposals: 12,
      timePosted: "منذ 3 ساعات",
      verified: true,
    },
    {
      title: "إشراف على تنفيذ مشروع تجاري",
      client: "شركة النجاح للتطوير",
      budget: "15,000 - 20,000 جنيه",
      duration: "2-3 أشهر",
      description:
        "مطلوب مهندس للإشراف على تنفيذ مجمع تجاري بمساحة 800 متر مربع",
      skills: ["إدارة المشاريع", "الإشراف التنفيذي", "ضبط الجودة"],
      proposals: 8,
      timePosted: "منذ 6 ساعات",
      verified: true,
    },
    {
      title: "حساب كميات مشروع سكني",
      client: "مها أحمد",
      budget: "2,000 - 3,500 جنيه",
      duration: "1-2 أسبوع",
      description:
        "مطلوب حساب دقيق لكميات مواد البناء لمشروع عمارة سكنية من 5 طوابق",
      skills: ["حساب الكميات", "تقدير التكاليف", "Excel"],
      proposals: 15,
      timePosted: "منذ يوم واحد",
      verified: false,
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
              منصة العمل الحر للبناء
            </h1>
            <p className="text-xl text-muted-foreground font-cairo leading-relaxed mb-8">
              اربط بين أصحاب المشاريع والخبراء المستقلين في مجال البناء والتشييد
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="font-cairo px-8">
                ابحث عن مستقل
              </Button>
              <Button size="lg" variant="outline" className="font-cairo px-8">
                انضم كمستقل
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
          <Tabs defaultValue="freelancers" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="freelancers" className="font-cairo">
                أفضل المستقلين
              </TabsTrigger>
              <TabsTrigger value="jobs" className="font-cairo">
                المشاريع المتاحة
              </TabsTrigger>
              <TabsTrigger value="categories" className="font-cairo">
                التخصصات
              </TabsTrigger>
            </TabsList>

            <TabsContent value="freelancers">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4 font-cairo">
                    أفضل المستقلين المعتمدين
                  </h2>
                  <p className="text-muted-foreground font-cairo">
                    خبراء معتمدون بسجل حافل من المشاريع الناجحة
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {topFreelancers.map((freelancer, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-elegant transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 space-x-reverse mb-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={freelancer.avatar} />
                            <AvatarFallback className="text-xl font-cairo">
                              {freelancer.name.split(" ")[1]?.charAt(0) || "م"}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 space-x-reverse mb-1">
                              <h3 className="font-bold text-foreground font-cairo">
                                {freelancer.name}
                              </h3>
                              {freelancer.verified && (
                                <Badge
                                  variant="secondary"
                                  className="text-xs font-cairo"
                                >
                                  معتمد
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground font-cairo mb-2">
                              {freelancer.title}
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4 ml-1" />
                              <span className="font-cairo">
                                {freelancer.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="mr-1 font-semibold">
                              {freelancer.rating}
                            </span>
                            <span className="text-sm text-muted-foreground font-cairo">
                              ({freelancer.completedProjects} مشروع)
                            </span>
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-semibold font-cairo">
                              {freelancer.hourlyRate} جنيه/ساعة
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Clock className="w-4 h-4 ml-1" />
                          <span className="font-cairo">
                            يرد خلال {freelancer.responseTime}
                          </span>
                        </div>

                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {freelancer.skills
                              .slice(0, 3)
                              .map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  variant="outline"
                                  className="text-xs font-cairo"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            {freelancer.skills.length > 3 && (
                              <Badge
                                variant="outline"
                                className="text-xs font-cairo"
                              >
                                +{freelancer.skills.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1 font-cairo" size="sm">
                            عرض الملف الشخصي
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="font-cairo"
                          >
                            رسالة
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="jobs">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4 font-cairo">
                    المشاريع المتاحة
                  </h2>
                  <p className="text-muted-foreground font-cairo">
                    فرص عمل جديدة في مجال البناء والتشييد
                  </p>
                </div>

                <div className="space-y-6">
                  {featuredJobs.map((job, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-elegant transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 space-x-reverse mb-2">
                              <h3 className="text-xl font-bold text-foreground font-cairo">
                                {job.title}
                              </h3>
                              {job.verified && (
                                <Badge className="bg-green-100 text-green-800 font-cairo">
                                  موثق
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground mb-2 font-cairo">
                              من {job.client}
                            </p>
                            <p className="text-foreground font-cairo">
                              {job.description}
                            </p>
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-lg text-primary font-cairo">
                              {job.budget}
                            </p>
                            <p className="text-sm text-muted-foreground font-cairo">
                              {job.duration}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              className="font-cairo"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 space-x-reverse text-sm text-muted-foreground">
                            <span className="font-cairo">
                              {job.proposals} عرض
                            </span>
                            <span className="font-cairo">{job.timePosted}</span>
                          </div>
                          <Button className="font-cairo">تقدم للمشروع</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="categories">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4 font-cairo">
                    التخصصات المتاحة
                  </h2>
                  <p className="text-muted-foreground font-cairo">
                    اكتشف الفرص في مختلف تخصصات البناء والتشييد
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {jobCategories.map((category, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-elegant transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-foreground font-cairo">
                            {category.category}
                          </h3>
                          <Badge variant="secondary" className="font-cairo">
                            {category.jobs} وظيفة
                          </Badge>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm text-muted-foreground mb-1 font-cairo">
                            متوسط السعر
                          </p>
                          <p className="text-lg font-semibold text-primary font-cairo">
                            {category.averageRate}
                          </p>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm text-muted-foreground mb-2 font-cairo">
                            المهارات المطلوبة
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {category.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="outline"
                                className="text-xs font-cairo"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button variant="outline" className="w-full font-cairo">
                          استكشف الوظائف
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
          <h2 className="text-4xl font-bold mb-4 font-cairo">
            ابدأ رحلتك في العمل الحر اليوم
          </h2>
          <p className="text-xl mb-8 opacity-90 font-cairo">
            انضم إلى آلاف المحترفين الذين يحققون دخلاً إضافياً من خلال منصتنا
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" className="font-cairo px-8">
              سجل كمستقل
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground text-primary font-cairo px-8"
            >
              انشر مشروعك
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Freelance;
