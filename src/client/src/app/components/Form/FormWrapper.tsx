import React from "react";
import styled from "styled-components";

interface IFormProps {
  size: string;
}

const FormWrapper: React.FC<IFormProps> = (props: IFormProps) => {
  console.log(props);
  return <div>FormWrapper</div>;
};

export default FormWrapper;
