"use client";

import { FormButtonType } from "@/types/components/atoms/buttons/FormButtonType";
import { ReactElement } from "react";

const FormButton = ({text}: FormButtonType): ReactElement => {
  return (
    <button>
      {text}
    </button>
  );
};

export default FormButton;