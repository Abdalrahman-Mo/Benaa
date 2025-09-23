import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageCircle, Phone, Mail, HelpCircle } from 'lucide-react';

const Support = () => {
  const supportOptions = [
    {
      title: 'الدردشة المباشرة',
      description: 'تحدث مع فريق الدعم فوراً',
      icon: <MessageCircle className="w-8 h-8" />,
      action: 'ابدأ الدردشة'
    },
    {
      title: 'الهاتف',
      description: '+20 123 456 7890',
      icon: <Phone className="w-8 h-8" />,
      action: 'اتصل بنا'
    },
    {
      title: 'البريد الإلكتروني',
      description: 'support@binaa.com',
      icon: <Mail className="w-8 h-8" />,
      action: 'أرسل رسالة'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-subtle" dir="rtl">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6 font-cairo">
              الدعم والمساعدة
            </h1>
            <p className="text-xl text-muted-foreground font-cairo leading-relaxed">
              نحن هنا لمساعدتك في أي وقت. تواصل معنا للحصول على الدعم المطلوب
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" dir="rtl">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-cairo">{option.title}</h3>
                  <p className="text-muted-foreground mb-6 font-cairo">{option.description}</p>
                  <Button className="font-cairo">{option.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center font-cairo">أرسل لنا رسالة</CardTitle>
              <CardDescription className="text-center font-cairo">
                سنرد عليك في أقرب وقت ممكن
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-cairo">الاسم</Label>
                    <Input id="name" placeholder="أدخل اسمك" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-cairo">البريد الإلكتروني</Label>
                    <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-cairo">الموضوع</Label>
                  <Input id="subject" placeholder="موضوع الرسالة" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-cairo">الرسالة</Label>
                  <Textarea id="message" placeholder="اكتب رسالتك هنا..." className="min-h-32" />
                </div>
                <Button className="w-full font-cairo" size="lg">
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;