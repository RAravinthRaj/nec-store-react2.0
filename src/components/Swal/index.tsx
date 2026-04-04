/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import ReactDOMServer from "react-dom/server";
import Swal, { SweetAlertIcon } from "sweetalert2";
import { RxCross2 } from "react-icons/rx";
import { VscCheck } from "react-icons/vsc";
import { useTheme } from "../../hooks/useTheme.hook";

interface SwalOptions {
  title: string;
  subtitle: string;
  type: SweetAlertIcon;
  confirmButtonText: string;
  cancelButtonText: string;
  onConfirmedPress: () => void;
}

export const useSwalComp = () => {
  const theme = useTheme();

  const showAlert = ({
    title,
    subtitle,
    type,
    confirmButtonText,
    cancelButtonText,
    onConfirmedPress,
  }: SwalOptions) => {
    Swal.fire({
      title,
      text: subtitle,
      icon: type,
      confirmButtonColor: theme.colors.primary,
      cancelButtonColor: theme.colors.cancel,
      color: theme.colors.swalButton,
      confirmButtonText: `${ReactDOMServer.renderToString(
        <VscCheck size={20} style={{ marginTop: "-2px", marginRight: "5px" }} />
      )} ${confirmButtonText}`,
      cancelButtonText: `${ReactDOMServer.renderToString(
        <RxCross2 size={19} style={{ marginTop: "-1px" }} />
      )} ${cancelButtonText}`,
      showCancelButton: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirmedPress();
      }
    });
  };

  return showAlert;
};
