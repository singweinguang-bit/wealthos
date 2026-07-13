
"use client";
import { createAsset } from "@/app/(app)/assets/actions";


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

export default function AddAssetDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button>
            + Add Asset
          </Button>
        }
      />

      <DialogContent className="bg-neutral-900 border-neutral-800 text-white">
        <DialogHeader>
          <DialogTitle>Add Asset</DialogTitle>
        </DialogHeader>

        <form
          action={createAsset}
          className="space-y-4"
        >

          <Input
            name="name"
            placeholder="Asset Name"
          />

          <Input
            name="category"
            placeholder="Category"
          />

          <Input
            name="currency"
            placeholder="Currency"
            defaultValue="MYR"
          />

          <Input
            name="current_value"
            type="number"
            placeholder="Current Value"
          />

          <Input
            name="liquidity"
            placeholder="Liquidity"
          />
         <Button
            type="submit"
            className="w-full"
          >
            Save
          </Button>

        </form>
      </DialogContent>
    </Dialog>
  );
}