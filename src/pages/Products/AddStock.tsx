/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { checkAccessControl } from "../../utils";
import { CustomPagination, Error, Loader } from "../../components";
import { AddStockModel, ProductContainer, SearchBar } from "./components";
import {
  useAddStockStore,
  useGetAllCategoriesStore,
  useGetAllProductsStore,
} from "./stores";

const AddStock = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [payload, setPayload] = useState({
    skip: 0,
    limit: 12,
    title: "",
    categoryId: "",
    orderBy: "ASC",
    productIds: [],
    isRecentProduct: false,
  });
  const [categories, setCategories] = useState<any[]>([]);

  const {
    getAllProductsResponse,
    getAllProductsLoading,
    getAllProductsError,
    fetchGetAllProducts,
    resetGetAllProducts,
  } = useGetAllProductsStore();
  const { getAllCategoriesResponse, fetchGetAllCategories } =
    useGetAllCategoriesStore();
  const {
    addStockResponse,
    addStockError,
    addStockLoading,
    fetchAddStock,
    resetAddStock,
  } = useAddStockStore();

  useEffect(() => {
    fetchGetAllCategories();
  }, [fetchGetAllCategories]);

  useEffect(() => {
    if (getAllCategoriesResponse?.payload?.categories) {
      setCategories(getAllCategoriesResponse.payload.categories);
    }
  }, [getAllCategoriesResponse]);

  useEffect(() => {
    fetchGetAllProducts(payload);
  }, [fetchGetAllProducts, payload.categoryId]);

  useEffect(() => {
    if (addStockResponse && Object.keys(addStockResponse).length > 0) {
      resetAddStock();
      fetchGetAllProducts(payload);
      setShowModal(false);
      setSelectedProduct(null);
      toast.success("Stock added successfully.");
    }
  }, [addStockResponse, fetchGetAllProducts, payload, resetAddStock]);

  useEffect(() => {
    if (addStockError) {
      toast.error(addStockError);
      resetAddStock();
    }
  }, [addStockError, resetAddStock]);

  const _onSearchPress = (payloadOverride: Record<string, any> = {}) => {
    const nextPayload = {
      ...payload,
      ...payloadOverride,
      skip: 0,
    };

    setPayload((currentPayload: any) => ({
      ...currentPayload,
      ...payloadOverride,
      skip: 0,
    }));

    resetGetAllProducts();
    fetchGetAllProducts(nextPayload);
  };

  const _onSortPress = (type: string) => {
    setPayload((currentPayload: any) => ({
      ...currentPayload,
      orderBy: type,
      skip: 0,
    }));

    resetGetAllProducts();
    fetchGetAllProducts({
      ...payload,
      orderBy: type,
      skip: 0,
    });
  };

  const _onPageChange = (page: number) => {
    const nextSkip = (page - 1) * 12;

    setPayload((currentPayload: any) => ({
      ...currentPayload,
      skip: nextSkip,
    }));

    resetGetAllProducts();
    fetchGetAllProducts({
      ...payload,
      skip: nextSkip,
    });
  };

  const _renderLoader = () => {
    if (getAllProductsLoading || addStockLoading) {
      return <Loader />;
    }

    return null;
  };

  const _renderPage = () => {
    if (getAllProductsResponse && Object.keys(getAllProductsResponse).length > 0) {
      const products = getAllProductsResponse?.payload?.products || [];

      if (products.length > 0) {
        return (
          <>
            <ProductContainer
              products={products}
              categories={categories}
              isRetailer={true}
              updateProduct={async () => false}
              deleteProduct={async () => false}
              addRecent={async () => false}
              mode="stock"
              onAddStockClick={(product) => {
                setSelectedProduct(product);
                setShowModal(true);
              }}
            />
            <CustomPagination
              perPageCount={12}
              totalPageCount={getAllProductsResponse?.payload?.totalCount}
              currentPage={payload?.skip / 12 + 1}
              onPageChange={_onPageChange}
            />
          </>
        );
      }

      return (
        <Error
          subtitle="No Data Found"
          buttonTitle="Retry"
          onPress={() => {
            resetGetAllProducts();
            fetchGetAllProducts(payload);
          }}
        />
      );
    }

    if (getAllProductsError && getAllProductsError.length > 0) {
      return (
        <Error
          subtitle={getAllProductsError}
          buttonTitle="Retry"
          onPress={() => {
            resetGetAllProducts();
            fetchGetAllProducts(payload);
          }}
        />
      );
    }

    return null;
  };

  if (checkAccessControl("add-stock")) {
    return (
      <>
        <SearchBar
          categories={categories}
          addCategory={async () => false}
          setPayload={setPayload}
          onSearchPress={_onSearchPress}
          onSortPress={_onSortPress}
          isRetailer={true}
          addProduct={async () => false}
          showRetailerActions={false}
        />
        {_renderPage()}
        {_renderLoader()}
        <AddStockModel
          modalShow={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedProduct(null);
          }}
          product={selectedProduct}
          addStock={fetchAddStock}
        />
      </>
    );
  }

  return (
    <Error
      subtitle="Page Not Found"
      buttonTitle="Go to Home"
      onPress={() => {
        navigate("/");
      }}
    />
  );
};

export default AddStock;
