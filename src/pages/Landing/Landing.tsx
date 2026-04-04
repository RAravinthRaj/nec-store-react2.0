/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/

import { useNavigate } from "react-router-dom";
import { Loader } from "../../components";
import { getUserDetails } from "../../utils";
import { ROLES } from "../../config";
import { useEffect } from "react";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = getUserDetails();

    if (userData?.role === ROLES.admin) {
      navigate("/users");
    } else if (
      userData?.role === ROLES.retailer ||
      userData?.role === ROLES.customer
    ) {
      navigate("/products");
    } else {
      navigate("/signin");
    }
  }, [navigate]);

  return <Loader loadingText="" />;
};

export default Landing;
