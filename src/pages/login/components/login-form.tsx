import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { useForm } from "@tanstack/react-form";
import { loginInput } from "../../../lib/api/types";
import { useLogin } from "../api/useLogin";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { mutate, isPending } = useLogin();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: loginInput,
    },
    onSubmit: async ({ value }) => {
      // console.log(value);
      mutate(value);
    },
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-[#562F00]">Logue em sua conta</CardTitle>
          <CardDescription className="text-[#562F00]">
            Entre com seu email e senha
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="text-[#562F00]"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <FieldGroup>
              <form.Field
                name="email"
                children={(field) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      id={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      type="email"
                      placeholder="m@example.com"
                    />

                    {/* Posso fazer de outro jeito, colocar um toast falando que o email esta de modo invalido para o input */}
                    {field.state.meta.errors.length > 0 ? (
                      <em className="text-red-500 text-xs">
                        {field.state.meta.errors
                          .map((error) =>
                            typeof error === "object" ? error.message : error,
                          )
                          .join(", ")}
                      </em>
                    ) : null}
                  </Field>
                )}
              />
              <form.Field
                name="password"
                children={(field) => (
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor={field.name}>Senha</FieldLabel>
                      <a href="#" className="ml-auto text-sm underline">
                        Esqueceu?
                      </a>
                    </div>
                    <Input
                      id={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      type="password"
                    />
                    {field.state.meta.errors.length > 0 ? (
                      <em className="text-red-500 text-xs">
                        {field.state.meta.errors
                          .map((error) =>
                            typeof error === "object" ? error.message : error,
                          )
                          .join(", ")}
                      </em>
                    ) : null}
                  </Field>
                )}
              />
              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                  <Button
                    type="submit"
                    disabled={!canSubmit || isPending}
                    className="bg-[#562F00] text-[#FFCE99] cursor-pointer"
                  >
                    {isSubmitting ? "Entrando..." : "Login"}
                  </Button>
                )}
              />
              {/* <Field>
                <Button
                  variant="outline"
                  className="border-[#562F00] cursor-pointer"
                  type="button"
                >
                  Login com Google
                </Button>
                <FieldDescription className="text-center text-[#562F00]">
                  Não tem uma conta? <a href="#">Cadastre-se</a>
                </FieldDescription>
              </Field> */}
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
