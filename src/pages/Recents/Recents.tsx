/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/

import { RecentProducts } from "./components";
import { useGetAllRecentProductsStore, useGetAllProductsStore } from "./stores";
import { getUserDetails } from "../../utils";
import { useEffect, useState } from "react";

const RecentProductsComp = () => {
  const userId = getUserDetails()?.id;
  const [products, setProducts] = useState<any[]>([]);

  const { getAllProductsResponse, fetchGetAllProducts, resetGetAllProducts } =
    useGetAllProductsStore();

  const {
    getAllRecentProductsResponse,
    fetchGetAllRecentProducts,
    resetGetAllRecentProducts,
  } = useGetAllRecentProductsStore();

  useEffect(() => {
    if (userId) {
      fetchGetAllRecentProducts(userId);
    }
    return () => {
      resetGetAllRecentProducts();
    };
  }, [userId]);

  useEffect(() => {
    const ids = getAllRecentProductsResponse?.payload?.recentProductIds;
    if (ids && ids.length > 0) {
      fetchGetAllProducts({ productIds: ids, isRecentProduct: true });
    }
  }, [getAllRecentProductsResponse]);

  useEffect(() => {
    if (
      getAllProductsResponse &&
      getAllProductsResponse.payload?.products?.length > 0
    ) {
      setProducts(getAllProductsResponse.payload.products);
      resetGetAllProducts();
    }
  }, [getAllProductsResponse]);

  return <RecentProducts products={products} />;
};

export default RecentProductsComp;
