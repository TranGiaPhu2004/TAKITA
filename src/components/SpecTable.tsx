import type { Spec } from "@/data/products";

export default function SpecTable({ specs }: { specs: Spec[] }) {
  return (
    <table className="mt-6 w-full border-collapse text-[0.9rem]">
      <caption className="pb-2 text-left font-bold">Thông số kỹ thuật</caption>
      <tbody>
        {specs.map((s) => (
          <tr key={s.label} className="odd:bg-surface">
            <th className="w-[42%] border-b border-line px-3.5 py-2.5 text-left font-medium text-ink-3">
              {s.label}
            </th>
            <td className="border-b border-line px-3.5 py-2.5">{s.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
