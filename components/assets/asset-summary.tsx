import StatCard from "@/components/dashboard/stat-card";

type Asset = {
  current_value: number;
  liquidity: string;
};

interface Props {
  assets: Asset[];
}

export default function AssetSummary({ assets }: Props) {
  const totalValue = assets.reduce(
    (sum, asset) => sum + Number(asset.current_value),
    0
  );

  const highLiquidity = assets.filter(
    (asset) => asset.liquidity === "High"
  ).length;

  const lowLiquidity = assets.filter(
    (asset) => asset.liquidity === "Low"
  ).length;

  return (
    <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Assets"
        value={assets.length.toString()}
      />

      <StatCard
        title="Total Value"
        value={`RM ${totalValue.toLocaleString()}`}
      />

      <StatCard
        title="High Liquidity"
        value={highLiquidity.toString()}
      />

      <StatCard
        title="Low Liquidity"
        value={lowLiquidity.toString()}
      />
    </div>
  );
}