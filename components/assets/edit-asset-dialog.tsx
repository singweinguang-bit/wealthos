"use client";
import { updateAsset } from "@/app/(app)/assets/actions";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
 DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Asset = {
  id: string;
  name: string;
  category: string;
  currency: string;
  current_value: number;
  liquidity: string;
};

interface Props {
  asset: Asset;
}

export default function EditAssetDialog({ asset }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogTrigger
        render={
          <Button variant="outline" size="sm">
            Edit
          </Button>
        }
      />

      <DialogContent className="border-neutral-800 bg-neutral-900 text-white">

        <DialogHeader>
          <DialogTitle>Edit Asset</DialogTitle>
        </DialogHeader>

        <form
            action={updateAsset}
            className="space-y-4"
            >

            <input
                type="hidden"
                name="id"
                defaultValue={asset.id}
                />

            <Input
            name="name"
            defaultValue={asset.name}
            />
            <Input
            name="category"
            defaultValue={asset.category}
            />
            <Input
            name="currency"
            defaultValue={asset.currency}
            />
            <Input
            name="current_value"
            defaultValue={asset.current_value}
            />
            <Input
            name="liquidity"
            defaultValue={asset.liquidity}
            />
            <Button
            type="submit"
            className="w-full"
            >
            Save Changes
            </Button>

        </form>

      </DialogContent>

    </Dialog>
  );
}