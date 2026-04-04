/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useMemo } from "react";
import * as S from "./styles";
import { OrderCard } from "../OrderCard";

export interface Order {
  orderID: string;
  orderBy: string;
  date: string;
  totalAmount: number;
  products: any[];
}

export interface GroupedOrdersByDate {
  date: string;
  orders: Order[];
}

export interface IHistoryComp {
  orders: any[];
}

export const HistoryComp = ({ orders }: IHistoryComp) => {
  const sortedGroupedOrders: GroupedOrdersByDate[] = useMemo(() => {
    if (!Array.isArray(orders) || orders.length === 0) return [];

    const grouped = orders.reduce((acc: Record<string, Order[]>, order) => {
      const date = order?.date ?? "Invalid Date";
      if (!acc[date]) acc[date] = [];
      acc[date].push(order);
      return acc;
    }, {});

    return Object.entries(grouped)
      .map(([date, orders]) => ({ date, orders }))
      .sort((a, b) => {
        const toDate = (d: string) => {
          const [day, month, year] = d.split(".");
          return new Date(`${year}-${month}-${day}`);
        };

        return toDate(b.date).getTime() - toDate(a.date).getTime();
      });
  }, [orders]);

  return (
    <S.SeparateOrder>
      {sortedGroupedOrders.map(({ date, orders }) => (
        <div key={date}>
          <S.OrderTitle>
            <S.DateContainer>{date}</S.DateContainer>
            <S.Line />
          </S.OrderTitle>
          <S.OrderContainer>
            {orders.map((order: any, index: number) => (
              <OrderCard key={index} individualOrder={order} />
            ))}
          </S.OrderContainer>
        </div>
      ))}
    </S.SeparateOrder>
  );
};
