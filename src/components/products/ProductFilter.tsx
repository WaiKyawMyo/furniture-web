import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import * as z from "zod";

import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import type { Category } from "@/types";

const formSchema = z.object({
  categories: z
    .array(z.string())

    .refine((value) => value.some((item) => item), {
      message: "Invalid notification categories selected.",
    }),
  types: z
    .array(z.string())

    .refine((value) => value.some((item) => item), {
      message: "Invalid notification type selected.",
    }),
});

interface FilterPops {
  filterList: {
    categories: Category[];
    types: Category[];
  };
}

export function ProductFilter({ filterList }: FilterPops) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categories: [],
      types: [],
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("submit Data", data);
  }

  return (
    <>
      <form className="" id="form-rhf-checkbox" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="categories"
            control={form.control}
            render={({ field, fieldState }) => (
              <FieldGroup>
                <FieldSet data-invalid={fieldState.invalid}>
                  <FieldLegend variant="label">Furniture Make By</FieldLegend>

                  <FieldGroup data-slot="checkbox-group">
                    {filterList.categories.map((task) => (
                      <Field
                        key={task.id}
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <Checkbox
                          id={`form-rhf-checkbox-${task.id}`}
                          name={field.name}
                          aria-invalid={fieldState.invalid}
                          checked={field.value.includes(task.id)}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...field.value, task.id]
                              : field.value.filter(
                                  (value) => value !== task.id,
                                );
                            field.onChange(newValue);
                          }}
                        />
                        <FieldLabel
                          htmlFor={`form-rhf-checkbox-${task.id}`}
                          className="font-normal"
                        >
                          {task.label}
                        </FieldLabel>
                      </Field>
                    ))}
                  </FieldGroup>
                </FieldSet>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </FieldGroup>
            )}
          />
        </FieldGroup>
        <FieldGroup>
          <Controller
            name="types"
            control={form.control}
            render={({ field, fieldState }) => (
              <FieldGroup>
                <FieldSet data-invalid={fieldState.invalid}>
                  <FieldLegend variant="label">Furniture Make By</FieldLegend>

                  <FieldGroup data-slot="checkbox-group">
                    {filterList.types.map((task) => (
                      <Field
                        key={task.id}
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <Checkbox
                          id={`form-rhf-checkbox-${task.id}`}
                          name={field.name}
                          aria-invalid={fieldState.invalid}
                          checked={field.value.includes(task.id)}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...field.value, task.id]
                              : field.value.filter(
                                  (value) => value !== task.id,
                                );
                            field.onChange(newValue);
                          }}
                        />
                        <FieldLabel
                          htmlFor={`form-rhf-checkbox-${task.id}`}
                          className="font-normal"
                        >
                          {task.label}
                        </FieldLabel>
                      </Field>
                    ))}
                  </FieldGroup>
                </FieldSet>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </FieldGroup>
            )}
          />
        </FieldGroup>
      </form>

      <Field orientation="horizontal">
        <Button className="mt-6" type="submit" variant={"outline"} form="form-rhf-checkbox">
          Save
        </Button>
      </Field>
    </>
  );
}
