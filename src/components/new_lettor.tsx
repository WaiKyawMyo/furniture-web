import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner"
import {
  Field,
  //   FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Icons } from "./icons";

const EmailSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address",
  }),
});

export function NewLetterForm() {
  const form = useForm<z.infer<typeof EmailSchema>>({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: "",
    },
  });
  const [loading,setloading] = React.useState(false)
  function onSubmit(data: z.infer<typeof EmailSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
    setloading(true)
  }

  return (
    <>
      <form
        id="form-rhf-demo"
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full pr-8 lg:pr-0"
        autoComplete="off"
      >
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="relative">
                <Field data-invalid={fieldState.invalid} className="">
                  <FieldLabel className="sr-only" htmlFor="form-rhf-demo-title">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="funiture@gmail.com"
                    autoComplete="off"
                    className="pr-12"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                  
                </Field>
                
                <Button size={"icon"} className=" absolute top-[2px] right-[3.5px] size-7">
                     {loading? <Spinner data-icon="inline-start" /> :
                    <Icons.send className="size-3" aria-hidden="true"/>}
                    <span className="sr-only">Join </span>
                  </Button>
              </div>
            )}
          />
        </FieldGroup>
      </form>
    </>
  );
}
