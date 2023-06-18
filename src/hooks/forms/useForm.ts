import { useState } from "react";
export type UseFormProps = {
  name?: string;
  email: string;
  password: string;
  handleOnSubmit?: (data: UseFormProps) => void;
};

export const useForm = ({
  name,
  email,
  password,
  handleOnSubmit,
}: UseFormProps) => {
  const [formData, setFormData] = useState<UseFormProps>({
    name,
    email,
    password,
  });

  const onInputChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = async () => {
    handleOnSubmit && (await handleOnSubmit(formData));
    setFormData({ name: "", email: "", password: "" });
  };
  return { ...formData, onInputChange, onSubmit };
};
