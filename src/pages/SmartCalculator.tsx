import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowDownToLine } from "lucide-react";
import { UilAndroid } from "@iconscout/react-unicons";
// import { useEffect, useMemo, useState } from "react";

// type RegionKey = "cairo" | "cities" | "villages";

// const COST_DATA: Record<RegionKey, Record<string, number>> = {
//   cairo: {
//     "الحفر": 77,
//     "الأساسات": 180,
//     "الهيكل الخرساني": 460,
//     "المباني (الطوب)": 320,
//     "العزل": 50,
//     "الكهرباء": 60,
//     "السباكة": 80,
//     "النجارة": 125,
//     "المحارة": 80,
//     "الدهانات": 45,
//     "الأرضيات": 45,
//     "التشطيبات النهائية": 170,
//   },
//   cities: {
//     "الحفر": 44,
//     "الأساسات": 95,
//     "الهيكل الخرساني": 266,
//     "المباني (الطوب)": 180,
//     "العزل": 30,
//     "الكهرباء": 35,
//     "السباكة": 45,
//     "النجارة": 70,
//     "المحارة": 45,
//     "الدهانات": 30,
//     "الأرضيات": 29,
//     "التشطيبات النهائية": 92,
//   },
//   villages: {
//     "الحفر": 17,
//     "الأساسات": 35,
//     "الهيكل الخرساني": 99,
//     "المباني (الطوب)": 65,
//     "العزل": 12,
//     "الكهرباء": 13,
//     "السباكة": 17,
//     "النجارة": 27,
//     "المحارة": 20,
//     "الدهانات": 12,
//     "الأرضيات": 11,
//     "التشطيبات النهائية": 36,
//   },
// };

// const SmartCalculator = () => {
//   const [area, setArea] = useState<string>("");
//   const [region, setRegion] = useState<RegionKey>("cairo");
//   const [selectedItems, setSelectedItems] = useState<string[]>([]);

//   const allItems = useMemo(() => Object.keys(COST_DATA.cairo), []);

//   useEffect(() => {
//     setSelectedItems(allItems);
//   }, [allItems]);

//   const itemsWithCosts = useMemo(() => {
//     return selectedItems.map((item) => {
//       const costPerM = COST_DATA[region][item];
//       const parsedArea = Number(area);
//       const totalCost = isFinite(parsedArea) && parsedArea > 0 ? costPerM * parsedArea : 0;
//       return { item, costPerM, totalCost };
//     });
//   }, [selectedItems, region, area]);

//   const grandTotal = useMemo(
//     () => itemsWithCosts.reduce((sum, row) => sum + row.totalCost, 0),
//     [itemsWithCosts]
//   );

//   const toggleItem = (name: string) => {
//     setSelectedItems((prev) =>
//       prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main className="container-custom pt-24 pb-12" dir="rtl">
//         <h1 className="text-3xl font-bold text-primary mb-6 font-cairo">الحاسبة الذكية</h1>

//         <div className="grid gap-6 md:grid-cols-2">
//           <div className="space-y-4">
//             <label className="block text-sm font-medium">أدخل مساحة المبنى (م²)</label>
//             <input
//               type="number"
//               className="w-full border rounded-md px-3 py-2 bg-white"
//               placeholder="مثال: 120"
//               value={area}
//               onChange={(e) => setArea(e.target.value)}
//               min={0}
//             />

//             <label className="block text-sm font-medium">اختر المنطقة</label>
//             <select
//               className="w-full border rounded-md px-3 py-2 bg-white"
//               value={region}
//               onChange={(e) => setRegion(e.target.value as RegionKey)}
//             >
//               <option value="cairo">القاهرة الكبرى</option>
//               <option value="cities">باقي المدن</option>
//               <option value="villages">القرى</option>
//             </select>

//             <label className="block text-sm font-medium">اختر البنود المراد حسابها</label>
//             <div className="grid grid-cols-2 gap-2">
//               {allItems.map((name) => (
//                 <label key={name} className="flex items-center gap-2 bg-white rounded px-3 py-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedItems.includes(name)}
//                     onChange={() => toggleItem(name)}
//                   />
//                   <span className="text-sm">{name}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full border rounded-md overflow-hidden">
//               <thead className="bg-muted">
//                 <tr>
//                   <th className="border px-3 py-2">البند</th>
//                   <th className="border px-3 py-2">تكلفة المتر</th>
//                   <th className="border px-3 py-2">إجمالي التكلفة</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {itemsWithCosts.map((row) => (
//                   <tr key={row.item}>
//                     <td className="border px-3 py-2">{row.item}</td>
//                     <td className="border px-3 py-2">{row.costPerM} ج.م</td>
//                     <td className="border px-3 py-2">{row.totalCost.toLocaleString()} ج.م</td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr className="bg-primary text-primary-foreground font-bold">
//                   <td className="border px-3 py-2" colSpan={2}>المجموع الكلي</td>
//                   <td className="border px-3 py-2">{grandTotal.toLocaleString()} ج.م</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default SmartCalculator;

import React, { useState } from "react";

// Binaa Smart Cost Estimator with property type and project type (Build vs Finishing)
// React component built with Tailwind classes for styling.

const FINISH_LEVELS = {
  basic: { label: "Basic (اقتصادي)", per_m2: 4000 },
  standard: { label: "Standard (متوسط)", per_m2: 7000 },
  premium: { label: "Premium (فاخر)", per_m2: 13370 },
};

const PROPERTY_TYPES = {
  apartment: { label: "شقة", factor: 1 },
  villa: { label: "فيلا", factor: 1.1 },
  building: { label: "عمارة", factor: 0.95 },
  shop: { label: "محل", factor: 0.9 },
  restaurant: { label: "مطعم", factor: 1.2 },
  office: { label: "مكتب", factor: 1 },
};

const PROJECT_TYPES = {
  build: { label: "بناء كامل", factor: 1 },
  finishing: { label: "تشطيب فقط", factor: 0.45 }, // تقريبًا 45% من تكلفة البناء الكاملة
};

const BREAKDOWN_PERCENTAGES = {
  sitePrep: 0.05,
  foundations: 0.12,
  structure: 0.35,
  masonry: 0.08,
  facade: 0.05,
  elec: 0.06,
  plumbing: 0.06,
  carpentry: 0.06,
  flooring: 0.06,
  plasterPaint: 0.05,
  finalFix: 0.06,
  fees: 0.03,
};

function formatCurrency(x) {
  return x.toLocaleString("ar-EG");
}

export default function BinaaCostEstimator() {
  const [area, setArea] = useState(100);
  const [floors, setFloors] = useState(1);
  const [level, setLevel] = useState("standard");
  const [propertyType, setPropertyType] = useState("apartment");
  const [projectType, setProjectType] = useState("build");
  const [locationFactor, setLocationFactor] = useState(1);
  const [includeContingency, setIncludeContingency] = useState(true);
  const [contingencyPct, setContingencyPct] = useState(3);

  const basePerM2 = FINISH_LEVELS[level].per_m2;
  const perM2Adjusted = Math.round(
    basePerM2 *
      locationFactor *
      PROPERTY_TYPES[propertyType].factor *
      PROJECT_TYPES[projectType].factor
  );

  const totalArea = Math.max(1, area * floors);
  const subtotal = perM2Adjusted * totalArea;
  const contingency = includeContingency
    ? Math.round((contingencyPct / 100) * subtotal)
    : 0;
  const grandTotal = subtotal + contingency;

  const breakdown = Object.entries(BREAKDOWN_PERCENTAGES).map(([key, pct]) => ({
    key,
    pct,
    perM2: Math.round(pct * perM2Adjusted),
    total: Math.round(pct * subtotal),
    label: {
      sitePrep: "الحفر وتهيئة الموقع",
      foundations: "القواعد والأساسات",
      structure: "الهيكل الخرساني (العظم)",
      masonry: "المباني والحواجز",
      facade: "العزل وواجهات",
      elec: "أعمال الكهرباء",
      plumbing: "أعمال السباكة",
      carpentry: "النجارة والأبواب",
      flooring: "الأرضيات",
      plasterPaint: "المحارة والدهانات",
      finalFix: "التشطيبات النهائية",
      fees: "رسوم تراخيص واستشارات",
    }[key],
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto my-[100px] p-6 bg-white rounded-2xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-amber-900">
              حاسبة تكلفة مشروع — بِناء
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              ادخل بيانات مشروعك لتحصل على تقدير سريع من الحفر حتى التسليم
              المفتاح
            </p>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">النموذج</div>
            <div className="rounded-md px-3 py-1 bg-amber-100 text-amber-800 font-semibold">
              {FINISH_LEVELS[level].label}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              نوع العقار
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="mt-2 w-full border rounded-md px-3 py-2"
            >
              {Object.entries(PROPERTY_TYPES).map(([key, val]) => (
                <option key={key} value={key}>
                  {val.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              نوع المشروع
            </label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="mt-2 w-full border rounded-md px-3 py-2"
            >
              {Object.entries(PROJECT_TYPES).map(([key, val]) => (
                <option key={key} value={key}>
                  {val.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              مستوى التشطيب
            </label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="mt-2 w-full border rounded-md px-3 py-2"
            >
              <option value="basic">{FINISH_LEVELS.basic.label}</option>
              <option value="standard">{FINISH_LEVELS.standard.label}</option>
              <option value="premium">{FINISH_LEVELS.premium.label}</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              المساحة لكل طابق (م²)
            </label>
            <input
              type="number"
              value={area}
              min={1}
              onChange={(e) => setArea(Number(e.target.value))}
              className="mt-2 w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              عدد الأدوار
            </label>
            <input
              type="number"
              value={floors}
              min={1}
              onChange={(e) => setFloors(Number(e.target.value))}
              className="mt-2 w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              عامل الموقع (مناطق غالية)
            </label>
            <select
              value={locationFactor}
              onChange={(e) => setLocationFactor(Number(e.target.value))}
              className="mt-2 w-full border rounded-md px-3 py-2"
            >
              <option value={0.95}>منخفض (تخفيض 5%)</option>
              <option value={1}>متوسط (قياسي)</option>
              <option value={1.15}>
                مرتفع (+15%) — القاهرة الجديدة / العاصمة
              </option>
              <option value={1.3}>مرتفع جدًا (+30%)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              تضمين بند الطوارئ
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={includeContingency}
                  onChange={(e) => setIncludeContingency(e.target.checked)}
                  className="form-checkbox"
                />
                <span className="mr-2 text-sm text-gray-700">
                  نعم — أضف احتياطي (%)
                </span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              نسبة الطوارئ (%)
            </label>
            <input
              type="number"
              value={contingencyPct}
              min={0}
              max={15}
              onChange={(e) => setContingencyPct(Number(e.target.value))}
              className="mt-2 w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-amber-50">
              <div className="text-sm text-gray-600">
                التكلفة لكل م² (معدلة)
              </div>
              <div className="text-2xl font-bold text-amber-900 mt-2">
                {formatCurrency(perM2Adjusted)} ج.م
              </div>
              <div className="text-sm text-gray-500 mt-1">
                بناءً على نوع العقار، المشروع، التشطيب والموقع
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white border">
              <div className="text-sm text-gray-600">المساحة الكليّة (م²)</div>
              <div className="text-2xl font-bold mt-2">
                {formatCurrency(totalArea)} م²
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {area} × {floors} (مساحة × أدوار)
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50">
              <div className="text-sm text-gray-600">الإجمالي التقريبي</div>
              <div className="text-2xl font-bold text-green-700 mt-2">
                {formatCurrency(grandTotal)} ج.م
              </div>
              <div className="text-sm text-gray-500 mt-1">
                شامل احتياطي:{" "}
                {includeContingency ? contingencyPct + "%" : "غير مشمول"}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-gray-800 font-semibold">
              تفصيل التكلفة (مجموع لكل بند)
            </h3>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              {breakdown.map((item) => (
                <div key={item.key} className="p-3 bg-white border rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-medium text-gray-800">
                      {item.label}
                    </div>
                    <div className="text-sm text-gray-500">
                      {Math.round(item.pct * 100)}%
                    </div>
                  </div>
                  <div className="mt-2 text-gray-700">
                    {formatCurrency(item.total)} ج.م
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {formatCurrency(item.perM2)} ج.م / م²
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border rounded-md">
            <div className="text-sm text-gray-700">افتراضات</div>
            <ul className="text-sm text-gray-500 mt-2 list-disc mr-5">
              <li>التقدير تقريبي ويعتمد على أسعار السوق لعام 2025.</li>
              <li>
                تغير أسعار المواد (حديد/أسمنت) سيؤثر مباشرة على بند الهيكل
                والأساسات.
              </li>
              <li>نوصي بـ BOQ مفصل وعروض 3 مقاوليّن قبل اعتماد الميزانية.</li>
            </ul>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              className="px-4 py-2 bg-amber-900 text-white rounded-md font-semibold"
              onClick={() => {
                const details = {
                  propertyType: PROPERTY_TYPES[propertyType].label,
                  projectType: PROJECT_TYPES[projectType].label,
                  area,
                  floors,
                  level: FINISH_LEVELS[level].label,
                  perM2: perM2Adjusted,
                  totalArea,
                  subtotal,
                  contingency,
                  grandTotal,
                };
                navigator.clipboard.writeText(JSON.stringify(details, null, 2));
                alert("تم نسخ ملخص التكلفة إلى الحافظة (JSON)");
              }}
            >
              نسخ ملخص التكلفة
            </button>

            <a
              className="px-4 py-2 border rounded-md text-amber-900 font-semibold"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("سأجهز BOQ مفصل بناءً على المعطيات لو طلبت لاحقًا.");
              }}
            >
              اطلب BOQ مفصل
            </a>
            <a
              href="/src/mobile-app/Benaa Calculator.apk"
              className="px-4 py-2 border rounded-md text-amber-900 font-semibold"
              download
            >
              تحميل التطبيق
              <ArrowDownToLine className="inline-block mr-2" />
            </a>

            <a className="flex justify-content align-center text-red-600 text-xs ">
              هذا التطبيق متاح فقط للاندرويد
              <UilAndroid className="inline-block mr-2" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
