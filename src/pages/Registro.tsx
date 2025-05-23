
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/components/ui/sonner";
import { Leaf } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';

const formSchema = z.object({
  nome: z.string().min(2, { message: "Nome precisa ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  telefone: z.string().min(10, { message: "Telefone inválido" }),
  tipoGerador: z.enum(["individual", "empresa"], {
    required_error: "Selecione o tipo de gerador",
  }),
  tipoPropriedade: z.string().min(1, { message: "Selecione o tipo de propriedade" }),
  tamanhoArea: z.string().min(1, { message: "Informe o tamanho da área" }),
  descricaoProjeto: z.string().min(10, { message: "Descreva seu projeto em pelo menos 10 caracteres" }),
  termos: z.boolean().refine(val => val === true, {
    message: "Você precisa aceitar os termos"
  })
});

// IDs e Keys do EmailJS - você precisará criar uma conta gratuita no EmailJS
// e configurar um template de email com as variáveis correspondentes
const EMAILJS_SERVICE_ID = "service_cobank"; // Substitua pelo seu ID de serviço
const EMAILJS_TEMPLATE_ID = "template_cobank"; // Substitua pelo seu ID de template
const EMAILJS_USER_ID = "user_id"; // Substitua pelo seu User ID

const Registro = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      tipoGerador: "individual",
      tipoPropriedade: "",
      tamanhoArea: "",
      descricaoProjeto: "",
      termos: false,
    },
  });

  const sendEmail = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Preparar os dados para o template do EmailJS
    const templateParams = {
      to_email: "cobank.sa@gmail.com", // Email de destino
      from_name: values.nome,
      from_email: values.email,
      telefone: values.telefone,
      tipo_gerador: values.tipoGerador === "individual" ? "Pessoa Física" : "Empresa",
      tipo_propriedade: values.tipoPropriedade,
      tamanho_area: values.tamanhoArea + " hectares",
      descricao_projeto: values.descricaoProjeto,
    };
    
    try {
      // Tenta enviar email usando EmailJS
      if (EMAILJS_SERVICE_ID !== "service_cobank" && 
          EMAILJS_TEMPLATE_ID !== "template_cobank" && 
          EMAILJS_USER_ID !== "user_id") {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_USER_ID
        );
        toast.success("Formulário enviado com sucesso! Você receberá uma confirmação por email.");
      } else {
        // Se as credenciais não foram atualizadas, mostra uma mensagem de debug
        console.log("EmailJS não está configurado. Dados que seriam enviados:", templateParams);
        toast.success("Cadastro realizado com sucesso!");
      }
      
      // Redirecionar após envio bem-sucedido
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
      
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      // Mesmo com erro, permitimos acesso ao dashboard para fins de demonstração
      toast.error("Erro ao enviar o formulário, mas você será redirecionado para o dashboard.");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    sendEmail(values);
  };

  const nextStep = async () => {
    const fieldsToValidate = step === 1 
      ? ["nome", "email", "telefone", "tipoGerador"] 
      : ["tipoPropriedade", "tamanhoArea", "descricaoProjeto"];
    
    const result = await form.trigger(fieldsToValidate as any);
    if (result) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center gap-2 mb-6">
            <Leaf className="h-6 w-6 text-green-600" />
            <h1 className="text-2xl font-bold text-green-800">CoBank</h1>
          </Link>
          <h1 className="text-3xl font-bold text-green-900">Cadastro de Gerador de Créditos de Carbono</h1>
          <p className="text-gray-600 mt-2">
            Preencha o formulário abaixo para iniciar seu processo de certificação
          </p>
        </div>

        <div className="mb-8 flex justify-between items-center">
          <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
          <div className="mx-2 w-8 h-8 rounded-full flex items-center justify-center bg-green-500 text-white">1</div>
          <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
          <div className={`mx-2 w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
          <div className={`h-2 flex-1 rounded-full ${step >= 3 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
          <div className={`mx-2 w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>3</div>
          <div className={`h-2 flex-1 rounded-full ${step >= 3 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>
              {step === 1 && "Informações Pessoais"}
              {step === 2 && "Detalhes do Projeto"}
              {step === 3 && "Revisão e Envio"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Precisamos de algumas informações básicas para começar."}
              {step === 2 && "Conte-nos sobre sua propriedade e projeto."}
              {step === 3 && "Verifique suas informações antes de enviar."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 && (
                  <>
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Digite seu nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input placeholder="(00) 00000-0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="tipoGerador"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Tipo de Gerador</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="individual" />
                                </FormControl>
                                <FormLabel className="font-normal">Pessoa Física</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="empresa" />
                                </FormControl>
                                <FormLabel className="font-normal">Empresa</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 2 && (
                  <>
                    <FormField
                      control={form.control}
                      name="tipoPropriedade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Propriedade</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o tipo de propriedade" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="floresta">Floresta</SelectItem>
                              <SelectItem value="agropecuaria">Agropecuária</SelectItem>
                              <SelectItem value="industria">Indústria</SelectItem>
                              <SelectItem value="energia">Energia Renovável</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Selecione o tipo de propriedade ou atividade econômica.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="tamanhoArea"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tamanho da Área (em hectares)</FormLabel>
                          <FormControl>
                            <Input type="text" placeholder="Ex: 50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="descricaoProjeto"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Descrição do Projeto</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Descreva brevemente seu projeto ou iniciativa de redução de emissões de carbono."
                              className="resize-none"
                              {...field}
                              rows={4}
                            />
                          </FormControl>
                          <FormDescription>
                            Forneça detalhes sobre como seu projeto contribui para a redução de emissões de carbono.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <p className="text-gray-500">Nome:</p>
                        <p className="font-medium">{form.getValues("nome")}</p>
                        
                        <p className="text-gray-500">Email:</p>
                        <p className="font-medium">{form.getValues("email")}</p>
                        
                        <p className="text-gray-500">Telefone:</p>
                        <p className="font-medium">{form.getValues("telefone")}</p>
                        
                        <p className="text-gray-500">Tipo de Gerador:</p>
                        <p className="font-medium">{form.getValues("tipoGerador") === "individual" ? "Pessoa Física" : "Empresa"}</p>
                        
                        <p className="text-gray-500">Tipo de Propriedade:</p>
                        <p className="font-medium">{form.getValues("tipoPropriedade")}</p>
                        
                        <p className="text-gray-500">Tamanho da Área:</p>
                        <p className="font-medium">{form.getValues("tamanhoArea")} hectares</p>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-gray-500">Descrição do Projeto:</p>
                        <p className="text-sm border p-3 rounded bg-gray-50">{form.getValues("descricaoProjeto")}</p>
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="termos"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-6">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Declaro que as informações fornecidas são verdadeiras e concordo com os Termos e Condições da CoBank
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </>
                )}
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            {step > 1 ? (
              <Button variant="outline" onClick={prevStep}>Voltar</Button>
            ) : (
              <Link to="/">
                <Button variant="outline">Cancelar</Button>
              </Link>
            )}
            
            {step < 3 ? (
              <Button onClick={nextStep} className="bg-green-600 hover:bg-green-700">Próximo</Button>
            ) : (
              <Button 
                onClick={form.handleSubmit(onSubmit)} 
                className="bg-green-600 hover:bg-green-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar formulário"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Registro;
