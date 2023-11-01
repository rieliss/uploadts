"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { UpdateStatus } from "@/function/details";
import React, { useState } from "react";

type Props = {
  Data: any;
};

export function CheckMorePage({ Data }: Props) {
  return (
    <div className="grid gap-5">
      {Data ? (
        Data.map((data: any, index: number) => (
          <div className="flex items-top space-x-4" key={index}>
            <Checkbox
              onClick={async () => {
                await UpdateStatus(data.username);
              }}
              checked={data.status}
            />
            <div className="grid gap-1.5 leading-none">
              <span className="text-sm text-left font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {data.name}
              </span>
              <p className="text-sm text-left text-muted-foreground">
                {data.department}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>Failed to fetch topics.</p>
      )}
    </div>
  );
}
