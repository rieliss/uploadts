"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { searchItem } from "@/app/action";

export function PlacePage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, formAction] = useFormState(searchItem, [
    {
      error: null,
    },
  ]);

  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" variant="destructive">
        {pending ? "..." : "Save changes"}
      </Button>
    );
  }
  function SearchButton() {
    const { pending } = useFormStatus();
    return (
      <Button variant="secondary" type="submit">
        {pending ? "..." : "Search"}
      </Button>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="flex flex-col rounded-lg p-2 h-full border-2 border-gray-100 items-center group border-transparent px-4 py-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <Image
              src="/uploads/1007555.png"
              width={150}
              height={0}
              alt="Picture of the author"
              className="rounded"
            />

            <h2 className={`mt-3 font-semibold text-[12px] text-dark:invert`}>
              1007508
            </h2>
            <p
              className={`max-w-[30ch] text-[10px] opacity-50 text-dark:invert`}
            >
              department
            </p>
          </Button>
        </DialogTrigger>

        <DialogContent className="border rounded-lg shadow-xl p-10 w-screen flex flex-col items-center justify-center">
          <DialogHeader>
            <DialogTitle>Voting...🚀</DialogTitle>
            <DialogDescription>
              Vote for who you like. Click save when you are done!
            </DialogDescription>
          </DialogHeader>

          <form
            action={async (formData: FormData) => {
              formAction(formData);
            }}
            ref={formRef}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src="/uploads/1007555.png"
              width={200}
              height={0}
              alt="Picture of the author"
              className="rounded"
            />
            <div className="w-full flex justify-between items-center gap-2">
              <input
                type="text"
                name="input"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="รหัสพนักงาน"
              />
              <SearchButton />
            </div>
          </form>
          <form>
            <div className="w-full flex flex-col items-left justify-between p-2">
              {formState.error ? (
                <p className="w-full flex flex-col items-left justify-between bg-red-100 rounded-lg p-2 text-red-500 font-bold">
                  โปรดใส่รหัสพนักงาน!
                </p>
              ) : (
                <div>
                  {formState.map((t: any) => {
                    return (
                      <div
                        key={t.id}
                        className="w-[280px] flex flex-col items-left justify-between text-sm border-gray-300 bg-gray-100 rounded-lg p-2 mb-2"
                      >
                        <span>
                          <b>รหัสพนักงาน : </b> {t.username}
                        </span>
                        <span>
                          <b>ชื่อ : </b> {t.name}
                        </span>
                        <span>
                          <b>แผนก : </b> {t.department}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <DialogFooter>
              <SubmitButton />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
