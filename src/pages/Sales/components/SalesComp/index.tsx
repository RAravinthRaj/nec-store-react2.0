/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";

export interface ISalesComp {
  SalesDetails: any;
  headings: string[];
  mode: "outgoing" | "incoming";
}

export const SalesComp = ({ SalesDetails, headings, mode }: ISalesComp) => {
  const theme = useTheme();

  const _renderItemField = (key: string, value: any, item: any) => {
    switch (key) {
      case "productImage":
        return (
          <S.TitleComp key={`${item?.productId}-${key}`}>
            <S.ImageWrap src={value ?? theme.images.defaultProductImage} />
          </S.TitleComp>
        );

      case "price":
      case "buyingPrice":
      case "total":
        return (
          <S.TitleComp key={`${item?.productId}-${key}`}>
            {Number(value).toFixed(2)}
          </S.TitleComp>
        );

      default:
        return (
          <S.TitleComp key={`${item?.productId}-${key}`}>{value}</S.TitleComp>
        );
    }
  };

  const _renderItemFields = (item: any) => {
    const orderedKeys =
      mode === "incoming"
        ? [
            "productImage",
            "category",
            "title",
            "buyingPrice",
            "quantity",
            "total",
            "updatedOn",
          ]
        : [
            "productImage",
            "category",
            "title",
            "price",
            "sold",
            "left",
            "total",
          ];

    return (
      <>{orderedKeys.map((key) => _renderItemField(key, item?.[key], item))}</>
    );
  };

  const _renderSalesData = () => {
    return (
      <>
        {SalesDetails.map((item: any, index: any) => {
          return (
            <div key={index}>
              <S.ItemBox isOddIndex={index % 2 != 0}>
                {_renderItemFields(item)}
              </S.ItemBox>
            </div>
          );
        })}
      </>
    );
  };

  const _renderSalesTab = () => {
    return (
      <S.SalesContainer>
        <S.TitleBox $bgColor={theme.colors.secondaryBackGround}>
          {headings?.map((data, index) => (
            <S.TitleComp key={index}>{data}</S.TitleComp>
          ))}
        </S.TitleBox>
        {_renderSalesData()}
      </S.SalesContainer>
    );
  };

  return _renderSalesTab();
};
