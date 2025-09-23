import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import suc_1 from "../assets/ourwork-1_0.jpg";
import suc_2 from "../assets/ourwork-2_0.jpg";
import suc_3 from "../assets/ourwork-3_0.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, Eye, Users, Wrench } from "lucide-react";

const StartProject = () => {
  const [selectedService, setSelectedService] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  const services = [
    {
      id: "consultation",
      title: "استشارة هندسية",
      description: "احصل على استشارة من مهندسين معتمدين لتخطيط مشروعك",
      price: "من 500 جنيه",
      icon: <Eye className="w-8 h-8" />,
    },
    {
      id: "design",
      title: "تصميم معماري",
      description: "تصميم مخططات معمارية وإنشائية احترافية",
      price: "من 2000 جنيه",
      icon: <Users className="w-8 h-8" />,
    },
    {
      id: "contracting",
      title: "مقاولة شاملة",
      description: "تنفيذ كامل للمشروع من الأساسات حتى التشطيب",
      price: "حسب المساحة",
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      id: "supervision",
      title: "إشراف تنفيذي",
      description: "إشراف هندسي على مراحل التنفيذ وضمان الجودة",
      price: "من 1500 جنيه/شهر",
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  const workSteps = [
    {
      number: "1",
      title: "استلام الطلب",
      description: "نستلم طلبك ونحلل متطلبات مشروعك",
    },
    {
      number: "2",
      title: "الاستشارة",
      description: "نقدم استشارة مجانية ونضع خطة العمل",
    },
    {
      number: "3",
      title: "التصميم والتخطيط",
      description: "نصمم ونخطط مشروعك بأعلى المعايير",
    },
    {
      number: "4",
      title: "التنفيذ والتسليم",
      description: "ننفذ المشروع ونسلمه في الموعد المحدد",
    },
  ];

  const successStories = [
    {
      img: suc_1,
      title: "فيلا عائلية فاخرة",
      location: "الشيخ زايد، الجيزة",
      area: "400 متر مربع",
      duration: "8 أشهر",
      budget: "2.5 مليون جنيه",
      client: "أحمد محمد",
      testimonial:
        "خدمة ممتازة وجودة تنفيذ عالية. تم تسليم المشروع في الموعد المحدد تماماً.",
    },
    {
      img: suc_2,
      title: "مطعم عصري",
      location: "مصر الجديدة، القاهرة",
      area: "200 متر مربع",
      duration: "4 أشهر",
      budget: "800 ألف جنيه",
      client: "سارة أحمد",
      testimonial:
        "تصميم رائع وتنفيذ محترف. المطعم يجذب الزبائن بتصميمه المميز.",
    },
    {
      img: suc_3,
      title: "مبنى إداري",
      location: "العاصمة الإدارية الجديدة",
      area: "1000 متر مربع",
      duration: "12 شهر",
      budget: "5 مليون جنيه",
      client: "شركة المستقبل للتطوير",
      testimonial: "مشروع ضخم تم تنفيذه بأعلى معايير الجودة والأمان.",
    },
  ];

  return (
    <div className="min-h-screen bg-background ">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-subtle" dir="rtl">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6 font-cairo">
              ابدأ مشروعك
            </h1>
            <p className="text-xl text-muted-foreground font-cairo leading-relaxed">
              حوّل حلمك إلى واقع مع خبراء البناء والتشييد. نوفر لك كل ما تحتاجه
              لبناء مشروعك بأعلى معايير الجودة
            </p>
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-20" dir="rtl">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-cairo">
              اختر الخدمة المناسبة
            </h2>
            <p className="text-xl text-muted-foreground font-cairo">
              حدد نوع الخدمة التي تحتاجها لبدء مشروعك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all hover:shadow-elegant hover:-translate-y-2 ${
                  selectedService === service.id
                    ? "ring-2 ring-primary bg-primary/5"
                    : ""
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-cairo">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-cairo">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold text-primary font-cairo">
                    {service.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Form */}
      <section className="py-20 bg-muted/20" dir="rtl">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4 font-cairo">
                تفاصيل مشروعك
              </h2>
              <p className="text-xl text-muted-foreground font-cairo">
                أخبرنا عن مشروعك لنقدم لك أفضل الحلول المناسبة
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="font-cairo">
                        نوع المشروع
                      </Label>
                      <Select
                        value={projectType}
                        onValueChange={setProjectType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="اختر نوع المشروع" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">منزل سكني</SelectItem>
                          <SelectItem value="villa">فيلا</SelectItem>
                          <SelectItem value="commercial">مبنى تجاري</SelectItem>
                          <SelectItem value="restaurant">
                            مطعم أو مقهى
                          </SelectItem>
                          <SelectItem value="office">مكتب</SelectItem>
                          <SelectItem value="factory">مصنع أو ورشة</SelectItem>
                          <SelectItem value="other">مشروع آخر</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="font-cairo">الميزانية المتوقعة</Label>
                      <RadioGroup value={budget} onValueChange={setBudget}>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value="under-100k" id="under-100k" />
                          <label htmlFor="under-100k" className="font-cairo">
                            أقل من 100,000 جنيه
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value="100k-500k" id="100k-500k" />
                          <label htmlFor="100k-500k" className="font-cairo">
                            100,000 - 500,000 جنيه
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value="500k-1m" id="500k-1m" />
                          <label htmlFor="500k-1m" className="font-cairo">
                            500,000 - 1,000,000 جنيه
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value="1m-3m" id="1m-3m" />
                          <label htmlFor="1m-3m" className="font-cairo">
                            1,000,000 - 3,000,000 جنيه
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value="over-3m" id="over-3m" />
                          <label htmlFor="over-3m" className="font-cairo">
                            أكثر من 3,000,000 جنيه
                          </label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-cairo">الجدول الزمني المطلوب</Label>
                    <RadioGroup
                      value={timeline}
                      onValueChange={setTimeline}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value="under-3m" id="under-3m" />
                        <label htmlFor="under-3m" className="font-cairo">
                          أقل من 3 أشهر
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value="3-6m" id="3-6m" />
                        <label htmlFor="3-6m" className="font-cairo">
                          3 - 6 أشهر
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value="6-12m" id="6-12m" />
                        <label htmlFor="6-12m" className="font-cairo">
                          6 - 12 شهر
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value="over-1y" id="over-1y" />
                        <label htmlFor="over-1y" className="font-cairo">
                          أكثر من سنة
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <RadioGroupItem value="flexible" id="flexible" />
                        <label htmlFor="flexible" className="font-cairo">
                          مرن
                        </label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details" className="font-cairo">
                      تفاصيل إضافية
                    </Label>
                    <Textarea
                      id="details"
                      placeholder="أخبرنا عن رؤيتك ومتطلباتك الخاصة..."
                      className="min-h-32"
                      maxLength={500}
                    />
                    <p className="text-sm text-muted-foreground font-cairo">
                      الحد الأقصى 500 حرف
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-cairo">
                        الاسم الكامل
                      </Label>
                      <Input id="name" placeholder="أدخل اسمك الكامل" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-cairo">
                        رقم الهاتف
                      </Label>
                      <Input id="phone" placeholder="أدخل رقم الهاتف" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-cairo">
                      البريد الإلكتروني
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="btn-primary font-cairo px-12">
                      ابدأ مشروعي الآن
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4 font-cairo">
                      سيتم التواصل معك خلال 24 ساعة من فريق متخصص
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20" dir="rtl">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-cairo">
              كيف نعمل معك
            </h2>
            <p className="text-xl text-muted-foreground font-cairo">
              خطوات بسيطة لتحويل فكرتك إلى مشروع ناجح
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-cairo">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-cairo">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/20" dir="rtl">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-cairo">
              قصص نجاح عملائنا
            </h2>
            <p className="text-xl text-muted-foreground font-cairo">
              مشاريع حقيقية نفذناها بنجاح لعملائنا
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="hover:shadow-elegant transition-shadow "
              >
                <div className="aspect-video bg-gradient-subtle rounded-t-lg">
                  <img
                    src={story.img}
                    alt="قصه نجاح"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 font-cairo">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 font-cairo">
                    {story.location}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-muted-foreground font-cairo">
                        المساحة
                      </p>
                      <p className="font-semibold font-cairo">{story.area}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-cairo">المدة</p>
                      <p className="font-semibold font-cairo">
                        {story.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-cairo">
                        الميزانية
                      </p>
                      <p className="font-semibold font-cairo">{story.budget}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-cairo">العميل</p>
                      <p className="font-semibold font-cairo">{story.client}</p>
                    </div>
                  </div>

                  <blockquote className="text-muted-foreground italic font-cairo border-r-4 border-primary pr-4">
                    "{story.testimonial}"
                  </blockquote>
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

export default StartProject;
