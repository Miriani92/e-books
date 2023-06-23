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
    setFormData((state) => {
      return { ...state, [name]: value };
    });
  };

  const onSubmit = async () => {
    let isSuccess: any;
    if (handleOnSubmit) {
      isSuccess = await handleOnSubmit(formData);
      isSuccess && setFormData({ name: "", email: "", password: "" });
    }
  };
  return { ...formData, onInputChange, onSubmit };
};
