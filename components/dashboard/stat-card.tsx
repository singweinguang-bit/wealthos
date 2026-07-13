import { Card, CardContent } from "@/components/ui/card";

type StatCardProps = {
  title: string;
  value: string;
  subtitle?: string;
};

export default function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
      <CardContent className="p-6">
        <p className="text-sm text-neutral-400">{title}</p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {value}
        </h2>

        {subtitle && (
          <p className="mt-2 text-sm text-emerald-400">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
}