import { IconCount } from "@/types/types";

export default function IconCountBox({ icon, count = 0 }: IconCount) {
  return (
    <div className="flex px-1 text-sub-gray">
      {icon}
      <p className="pl-1">{count}</p>
    </div>
  );
}
