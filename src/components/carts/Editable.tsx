import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, type Resolver } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Field,
  //   FieldDescription,
  FieldError,
  FieldGroup,
  
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Icons } from "../icons";



const quantitySchema = z.object({
  quantity: z.coerce.number().min(0),
});

export function Editable() {
  type FormValues = z.infer<typeof quantitySchema>;
  const form = useForm<FormValues>({
    resolver: zodResolver(quantitySchema) as Resolver<FormValues>,
    defaultValues: {
      quantity: 1,
    },
  });

  function onSubmit(data: z.infer<typeof quantitySchema>) {
    console.log(data);
    toast.success("Product is added to cart successfully.");
  }

  return (
    <>
      <form
        id="form-rhf-demo"
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full gap-4 justify-between"
      >
        <div className="flex w-28 items-center ">
          <Button
            type="button"
            variant={"outline"}
            size={"icon"}
            className="size-8 shrink-0 rounded-r-none"
          >
            <Icons.minus className="size-3" aria-hidden="true">
              <span className="sr-only">Remove one item</span>
            </Icons.minus>
          </Button>
          <FieldGroup>
            <Controller
              name="quantity"
              control={form.control}
              render={({ field, fieldState }) => (
                
                  <Field data-invalid={fieldState.invalid} className="">
                    
                    <Input
                      {...field}
                      type="number"
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      inputMode="numeric"
                      min={0} 
                      autoComplete="off"
                      className=" rounded-none h-8 w-full  border-x-0"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                
              )}
            />
          </FieldGroup>
          <Button
            type="button"
            variant={"outline"}
            size={"icon"}
            className="size-8 shrink-0 rounded-l-none"
          >
            <Icons.Plus className="size-3" aria-hidden="true">
              <span className="sr-only">Add one item</span>
            </Icons.Plus>
          </Button>
        </div>
        <div className="flex items-center space-x-2.5">
          <Button
            type="button"
            aria-label="Delete cart item"
            variant={'outline'}
            size="icon"
            className={"size-8"}
          >
            <Icons.trash className="size-3 " aria-hidden="true"/>
            <span className="sr-only">Delete item</span>
          </Button>
          
        </div>
      </form>
    </>
  );
}
