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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, Bell, Shield } from "lucide-react";

const Account = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-20 pb-16" dir="rtl">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4 font-cairo">
                حسابي
              </h1>
              <p className="text-xl text-muted-foreground font-cairo">
                إدارة معلوماتك الشخصية وإعدادات الحساب
              </p>
            </div>

            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="profile" className="font-cairo">
                  الملف الشخصي
                </TabsTrigger>
                <TabsTrigger value="projects" className="font-cairo">
                  مشاريعي
                </TabsTrigger>
                <TabsTrigger value="settings" className="font-cairo">
                  الإعدادات
                </TabsTrigger>
                <TabsTrigger value="security" className="font-cairo">
                  الأمان
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-cairo">
                      المعلومات الشخصية
                    </CardTitle>
                    <CardDescription className="font-cairo">
                      تحديث معلوماتك الشخصية وصورة الملف الشخصي
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-[20px] space-x-6 space-x-reverse">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="text-2xl font-cairo">
                          أح
                        </AvatarFallback>
                      </Avatar>
                      <Button variant="outline" className="font-cairo">
                        تغيير الصورة
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-cairo">
                          الاسم الأول
                        </Label>
                        <Input id="firstName" defaultValue="أحمد" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="font-cairo">
                          الاسم الأخير
                        </Label>
                        <Input id="lastName" defaultValue="محمد" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-cairo">
                        البريد الإلكتروني
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="ahmed@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-cairo">
                        رقم الهاتف
                      </Label>
                      <Input id="phone" defaultValue="+20 123 456 7890" />
                    </div>

                    <Button className="font-cairo">حفظ التغييرات</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-cairo">مشاريعي</CardTitle>
                    <CardDescription className="font-cairo">
                      عرض جميع المشاريع التي تعمل عليها
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-muted-foreground font-cairo">
                        لا توجد مشاريع حالياً
                      </p>
                      <Button className="mt-4 font-cairo">
                        ابدأ مشروع جديد
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-cairo">إعدادات الحساب</CardTitle>
                    <CardDescription className="font-cairo">
                      تخصيص تفضيلاتك وإعدادات الإشعارات
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold font-cairo">
                            إشعارات البريد الإلكتروني
                          </p>
                          <p className="text-sm text-muted-foreground font-cairo">
                            تلقي إشعارات حول المشاريع والعروض
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="font-cairo"
                        >
                          تعديل
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold font-cairo">
                            إشعارات الهاتف
                          </p>
                          <p className="text-sm text-muted-foreground font-cairo">
                            تلقي رسائل نصية للتحديثات المهمة
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="font-cairo"
                        >
                          تعديل
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-cairo">الأمان</CardTitle>
                    <CardDescription className="font-cairo">
                      إدارة كلمة المرور وإعدادات الأمان
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Button className="font-cairo">تغيير كلمة المرور</Button>
                    <Button variant="outline" className="font-cairo">
                      تفعيل المصادقة الثنائية
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Account;
