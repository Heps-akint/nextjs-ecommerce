"use client";

import { ComponentProps } from "react";
import { experimental_useFormSatus as useFormStatus } from "react-dom"

type FormSubmitButtonProps = {
    childern: React.ReactNode,
    className?: string,
} & ComponentProps<"button">

export default function FormSubmitButton(
    {childern, className} : FormSubmitButtonProps
) {
    const {pending} = useFormStatus();

    return(
        <button 
        className={`btn btn-primary ${className}`}
        type="submit"
        >{childern}</button>
    )
    
}