/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { SALES_CONFIG } from "../../config";

export interface IFooterComp {
  totalLabel: string;
  totalQuantity: string | number;
  amountLabel: string;
  totalAmount: number;
  getReport: () => void;
}

export const Footer = ({
  totalLabel,
  totalQuantity,
  amountLabel,
  totalAmount,
  getReport,
}: IFooterComp) => {
  const theme = useTheme();

  const _renderSalesFooter = () => {
    return (
      <S.FooterBox $bgColor={theme.colors.secondaryBackGround}>
        <S.FooterContent>
          {totalLabel}
          {totalQuantity}
        </S.FooterContent>
        <S.FooterContent>
          {amountLabel}
          {Number(totalAmount).toFixed(2)}
        </S.FooterContent>
        <S.Button $bgColor={theme.colors.primary} onClick={getReport}>
          <S.DownloadIcon />
          {SALES_CONFIG.downloadButton}
        </S.Button>
      </S.FooterBox>
    );
  };

  return _renderSalesFooter();
};
