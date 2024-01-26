"use client";

import { ReactElement } from "react";
import FormButton from "@/components/atoms/buttons/formButton";

const Template = (): ReactElement => {
  return (
    <>
      <div>
        <FormButton text={"Log in"} />
      </div>
      <div>
        <FormButton text={"Sign up"} />
      </div>
    </>
  );
};

export default Template;