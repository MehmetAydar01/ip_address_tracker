import { Input } from '@/components/ui/input';

type FormInputProps = {
  type: string;
  name: string;
  defaultValue: string;
  placeholder: string;
};

function FormInput({ type, name, defaultValue, placeholder }: FormInputProps) {
  return (
    <>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className='cursor-pointer p-6 text-xl rounded-lg rounded-r-none focus-visible:outline-0 focus:ring-offset-0 focus-visible:ring-offset-0 focus:ring-0 focus-visible:ring-0'
        style={{ zIndex: 9999 }}
      />
    </>
  );
}

export default FormInput;
