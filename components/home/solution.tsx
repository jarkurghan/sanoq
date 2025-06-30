import React from "react";

export default function Base36To10() {
  return (
    <div className="mx-auto pt-10 text-gray-800 leading-relaxed">
      <h2 className="text-xl font-semibold mb-4">
        1-qadam: 36 lik sondan 10 likka o'tkazamiz
      </h2>

      <h3 className="text-lg font-medium mt-6 mb-2">
        Butun qismi: <code className="bg-gray-100 px-1 rounded">1234₃₆</code>
      </h3>
      <p className="text-base">Har bir raqam 36 lik sanoq sistemasida quyidagicha:</p>
      <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono border border-gray-200 mt-2 whitespace-pre-wrap">
{`1 × 36³ + 2 × 36² + 3 × 36¹ + 4 × 36⁰
= 1 × 46656 + 2 × 1296 + 3 × 36 + 4 × 1
= 46656 + 2592 + 108 + 4
= 49360`}
      </pre>

      <h3 className="text-lg font-medium mt-8 mb-2">
        Kasr qismi: <code className="bg-gray-100 px-1 rounded">.9₃₆</code>
      </h3>
      <p className="text-base">
        Bu <code className="bg-gray-100 px-1 rounded">.9</code> raqami 36-likda
        ifodalanayotgan bo‘lsa, u:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono border border-gray-200 mt-2">
{`9 × 36⁻¹ = 9 / 36 = 0.25`}
      </pre>

      <h3 className="text-lg font-bold mt-8 text-black">
        Demak, <code className="bg-gray-100 px-1 rounded">1234.9₃₆ = 49360.25₁₀</code>
      </h3>
    </div>
  );
}
