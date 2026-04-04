/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import React, { useRef } from "react";
import * as S from "./styles";
import { useTheme } from "../../../../hooks";

interface OTPInputProps {
  length?: number;
  onChange: (otp: string) => void;
}

type InputRef = HTMLInputElement | null;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type KeyDownEvent = React.KeyboardEvent<HTMLInputElement>;

export const OTPInput = ({ length = 6, onChange }: OTPInputProps) => {
  const theme = useTheme();
  const inputs = useRef<InputRef[]>([]);

  const _handleChange = (index: number, e: ChangeEvent) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      if (index < length - 1) {
        inputs.current[index + 1]?.focus();
      }
    } else {
      e.target.value = "";
    }
    const otp = inputs.current.map((input) => input?.value || "").join("");
    onChange(otp);
  };

  const _handleKeyDown = (index: number, e: KeyDownEvent) => {
    if (e.key === "Backspace" && !inputs.current[index]?.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <S.OtpContainer>
      {Array.from({ length }).map((_, index) => (
        <S.OtpInput
          $bgColor={theme.colors.secondaryBackGround}
          $activeColor={theme.colors.primary}
          key={index}
          maxLength={1}
          ref={(el: HTMLInputElement | null): void => {
            inputs.current[index] = el;
          }}
          onChange={(e) => _handleChange(index, e)}
          onKeyDown={(e) => _handleKeyDown(index, e)}
        />
      ))}
    </S.OtpContainer>
  );
};
