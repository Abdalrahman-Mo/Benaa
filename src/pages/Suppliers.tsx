import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, ShoppingCart, Phone, Mail } from "lucide-react";

// import SuppliersHero from "../assets/about-us.jpg";

const Suppliers = () => {
  const [activeFilter, setActiveFilter] = useState("الكل");

  const categories = [
    "الكل",
    "الدهانات والديكور",
    "الكهرباء ",
    "الأدوات الصحية",
    "مواد البناء",
  ];

  const products = [
    {
      id: 1,
      name: "دهان داخلي فاخر مقاوم للرطوبة",
      price: 320,
      originalPrice: null,
      rating: 4.8,
      reviews: 156,
      image:
        "https://th.bing.com/th/id/OIP.jlthPcFAiDQ2fYPp_CVLqwHaHa?w=179&h=180&c=7&r=0&o=7&dpr=2.5&pid=1.7&rm=3",
      category: "الدهانات والديكور",
      available: true,
      supplier: "شركة الألوان المتحدة",
    },
    {
      id: 2,
      name: "طوب أحمر فاخر",
      price: 650,
      originalPrice: null,
      rating: 4.7,
      reviews: 203,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.6PsIpUr9ri_6ClAi3wuG2gHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=2.5&o=7&rm=3",
      category: "مواد البناء",
      available: true,
      supplier: "مصنع الطوب",
    },
    {
      id: 3,
      name: "أسمنت بورتلاندي عالي الجودة",
      price: 850,
      originalPrice: null,
      rating: 4.9,
      reviews: 445,
      image:
        "https://th.bing.com/th/id/OIP.jPyfv22ZCNFm6tOBpU57jwHaGe?w=220&h=192&c=7&r=0&o=7&dpr=2.5&pid=1.7&rm=3",
      category: "مواد البناء",
      available: true,
      supplier: "شركة الأسمنت المصرية",
    },
    {
      id: 4,
      name: "خودة أمان معتمدة",
      price: 85,
      originalPrice: 95,
      rating: 4.6,
      reviews: 87,
      image:
        "https://th.bing.com/th/id/OIP.BvGv66Nx17J4WpBfVqUzhgHaHa?w=188&h=188&c=7&r=0&o=7&dpr=2.5&pid=1.7&rm=3",
      category: "أدوات السلامة",
      available: true,
      supplier: "متجر الأمان المهني",
    },
    {
      id: 5,
      name: "سيراميك أرضيات فاخر",
      price: 180,
      originalPrice: null,
      rating: 4.8,
      reviews: 312,
      image:
        "https://th.bing.com/th/id/OIP.AcngCptF2MI14PU9N6s7lgHaHa?w=177&h=180&c=7&r=0&o=7&dpr=2.5&pid=1.7&rm=3",
      category: "الأرضيات والحوائط",
      available: true,
      supplier: "شركة السيراميك الحديث",
    },
    {
      id: 6,
      name: "مجموعة أدوات كهرباء شاملة",
      price: 1200,
      originalPrice: null,
      rating: 4.9,
      reviews: 156,
      image:
        "https://th.bing.com/th/id/OIP.IM8Gi9_poYTChORIObXmCwHaG5?w=194&h=181&c=7&r=0&o=7&dpr=2.5&pid=1.7&rm=3",
      category: "الكهرباء والسباكة",
      available: true,
      supplier: "متجر الأدوات الكهربائية",
    },
  ];

  const filteredProducts =
    activeFilter === "الكل"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(#ff9900, #F2C94C)`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">موارد البناء</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            اكتشف أفضل مواد البناء وأدوات التشطيب من موردين موثقين بأسعار
            تنافسية وجودة مضمونة
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`${
                  activeFilter === category
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-white text-foreground border-gray-300 hover:bg-gray-100"
                } px-6 py-2`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.available && (
                    <Badge className="absolute top-3 left-3 bg-green-500 text-white">
                      متوفر
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 text-gray-600 hover:text-red-500 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews}) تقييم
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {product.price} جنيه
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice} جنيه
                      </span>
                    )}
                  </div>

                  <div className="text-sm text-muted-foreground mb-4">
                    {product.supplier}
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <ShoppingCart className="ml-2 h-4 w-4" />
                    أضف للسلة
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className=" text-white py-16"
        style={{
          backgroundImage: `linear-gradient(#ff9900, #F2C94C)`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">لم تجد ما تبحث عنه؟</h2>
          <p className="text-xl mb-8 text-white">
            تواصل معنا وسنساعدك في العثور على أفضل المواد والأدوات المطلوبة
            لمشروعك
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="text-black border-white hover:bg-white hover:text-gray-800"
            >
              <Mail className="ml-2 h-4 w-4" />
              أرسل طلب خاص
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Phone className="ml-2 h-4 w-4" />
              اتصل بنا
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Suppliers;
