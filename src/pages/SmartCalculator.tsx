import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useMemo, useState } from "react";

type RegionKey = "cairo" | "cities" | "villages";

const COST_DATA: Record<RegionKey, Record<string, number>> = {
  cairo: {
    "الحفر": 77,
    "الأساسات": 180,
    "الهيكل الخرساني": 460,
    "المباني (الطوب)": 320,
    "العزل": 50,
    "الكهرباء": 60,
    "السباكة": 80,
    "النجارة": 125,
    "المحارة": 80,
    "الدهانات": 45,
    "الأرضيات": 45,
    "التشطيبات النهائية": 170,
  },
  cities: {
    "الحفر": 44,
    "الأساسات": 95,
    "الهيكل الخرساني": 266,
    "المباني (الطوب)": 180,
    "العزل": 30,
    "الكهرباء": 35,
    "السباكة": 45,
    "النجارة": 70,
    "المحارة": 45,
    "الدهانات": 30,
    "الأرضيات": 29,
    "التشطيبات النهائية": 92,
  },
  villages: {
    "الحفر": 17,
    "الأساسات": 35,
    "الهيكل الخرساني": 99,
    "المباني (الطوب)": 65,
    "العزل": 12,
    "الكهرباء": 13,
    "السباكة": 17,
    "النجارة": 27,
    "المحارة": 20,
    "الدهانات": 12,
    "الأرضيات": 11,
    "التشطيبات النهائية": 36,
  },
};

const SmartCalculator = () => {
  const [area, setArea] = useState<string>("");
  const [region, setRegion] = useState<RegionKey>("cairo");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const allItems = useMemo(() => Object.keys(COST_DATA.cairo), []);

  useEffect(() => {
    setSelectedItems(allItems);
  }, [allItems]);

  const itemsWithCosts = useMemo(() => {
    return selectedItems.map((item) => {
      const costPerM = COST_DATA[region][item];
      const parsedArea = Number(area);
      const totalCost = isFinite(parsedArea) && parsedArea > 0 ? costPerM * parsedArea : 0;
      return { item, costPerM, totalCost };
    });
  }, [selectedItems, region, area]);

  const grandTotal = useMemo(
    () => itemsWithCosts.reduce((sum, row) => sum + row.totalCost, 0),
    [itemsWithCosts]
  );

  const toggleItem = (name: string) => {
    setSelectedItems((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-custom pt-24 pb-12" dir="rtl">
        <h1 className="text-3xl font-bold text-primary mb-6 font-cairo">الحاسبة الذكية</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <label className="block text-sm font-medium">أدخل مساحة المبنى (م²)</label>
            <input
              type="number"
              className="w-full border rounded-md px-3 py-2 bg-white"
              placeholder="مثال: 120"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              min={0}
            />

            <label className="block text-sm font-medium">اختر المنطقة</label>
            <select
              className="w-full border rounded-md px-3 py-2 bg-white"
              value={region}
              onChange={(e) => setRegion(e.target.value as RegionKey)}
            >
              <option value="cairo">القاهرة الكبرى</option>
              <option value="cities">باقي المدن</option>
              <option value="villages">القرى</option>
            </select>

            <label className="block text-sm font-medium">اختر البنود المراد حسابها</label>
            <div className="grid grid-cols-2 gap-2">
              {allItems.map((name) => (
                <label key={name} className="flex items-center gap-2 bg-white rounded px-3 py-2">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(name)}
                    onChange={() => toggleItem(name)}
                  />
                  <span className="text-sm">{name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-md overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="border px-3 py-2">البند</th>
                  <th className="border px-3 py-2">تكلفة المتر</th>
                  <th className="border px-3 py-2">إجمالي التكلفة</th>
                </tr>
              </thead>
              <tbody>
                {itemsWithCosts.map((row) => (
                  <tr key={row.item}>
                    <td className="border px-3 py-2">{row.item}</td>
                    <td className="border px-3 py-2">{row.costPerM} ج.م</td>
                    <td className="border px-3 py-2">{row.totalCost.toLocaleString()} ج.م</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-primary text-primary-foreground font-bold">
                  <td className="border px-3 py-2" colSpan={2}>المجموع الكلي</td>
                  <td className="border px-3 py-2">{grandTotal.toLocaleString()} ج.م</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SmartCalculator;


