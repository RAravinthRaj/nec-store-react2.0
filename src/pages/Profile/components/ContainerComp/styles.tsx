/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { MdBlockFlipped, MdOutlineModeEditOutline } from "react-icons/md";
import { SlLockOpen } from "react-icons/sl";
import { GrFormPreviousLink } from "react-icons/gr";

export const Button = styled.button<{ $bgColor: string; $isBlock: boolean }>`
  flex: 0.3;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  justify-content: center;
  border: none;
  background-color: ${(props) => props?.$bgColor};
  opacity: ${(props) => (props.$isBlock ? "0.4" : "1")};
  pointer-events: ${(props) => (props.$isBlock ? "none" : "auto")};
  border-radius: 5px;
  gap: 10px;
  color: white;

  @media (max-width: 576px) {
    flex: 0.5;
    padding: 12px;
    gap: 10px;
    font-size: 14px;
  }
`;

export const BannerContainer = styled.img`
  width: 101%;
  height: 110px;
  margin-left: -10px;

  @media (max-width: 768px) {
    width: 101%;
    margin-left: -10px;
    height: 130px;
  }

  @media (max-width: 576px) {
    height: 80px;
    margin-left: -4px;
  }
`;

export const PreviousPageLink = styled(GrFormPreviousLink)`
  position: relative;
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
  bottom: -50px;
  left: 8px;
  cursor: pointer;
  border: solid 2px black;

  @media (max-width: 768px) {
    height: 35px;
    width: 35px;
    bottom: -45px;
    left: 9px;
  }

  @media (max-width: 576px) {
    height: 28px;
    width: 28px;
    bottom: -35px;
    left: 8px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 576px) {
    margin-top: 10px;
  }
`;

export const UserImageContainer = styled.div`
  position: relative;
  width: fit - content;
  margin-top: -40px;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 30px;
  }

  @media (max-width: 576px) {
    margin-left: 15px;
  }
`;

export const UserImage = styled.img`
  width: 120px;
  height: 120px;
  z-index: 0;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 576px) {
    width: 80px;
    height: 80px;
  }
`;

export const AddIcon = styled(FiPlus)`
  color: white;
  font-size: 25px;
  strokewidth: 2;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const DataContainer = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 20px;
  }

  @media (max-width: 576px) {
    margin-left: 12px;
    gap: 30px;
  }
`;

export const NameContainer = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: black;

  @media (max-width: 576px) {
    font-size: 30px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const EmailContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-break: break-word;
  font-size: 21px;
  gap: 10px;

  @media (max-width: 576px) {
    font-size: 17px;
    gap: 5px;
    align-items: flex-start;
  }
`;

export const DeptContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-break: break-word;
  font-size: 21px;
  padding-left: 20px;
  gap: 10px;

  @media (max-width: 576px) {
    font-size: 17px;
    gap: 5px;
    align-items: flex-start;
    padding-left: 0px;
  }
`;

export const RollContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-break: break-word;
  font-size: 21px;
  padding-left: 20px;
  gap: 10px;

  @media (max-width: 576px) {
    font-size: 17px;
    gap: 5px;
    align-items: flex-start;
    padding-left: 0px;
  }
`;

export const Title = styled.div<{ $color: string }>`
  color: ${(props) => props?.$color};
  font-size: 18px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  @media (max-width: 576px) {
    gap: 25px;
  }
`;

export const BlockIcon = styled(MdBlockFlipped)`
  color: white;
  font-size: 20px;
  strokewidth: 2;
`;

export const PermitIcon = styled(SlLockOpen)`
  color: white;
  font-size: 18px;
  strokewidth: 2;
`;

export const RoleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: -10px;
`;

export const EditContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-right: 50px;

  @media (max-width: 768px) {
    margin-right: 15px;
    gap: 20px;
  }

  @media (max-width: 576px) {
    margin-right: 10px;
    gap: 20px;
  }
`;

export const Circle = styled.div<{
  $bgColor: string;
  $isNotFirst: boolean;
  $textColor: string;
}>`
  height: 40px;
  width: 40px;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 50%;
  margin-left: ${(props) => (props.$isNotFirst ? "-8px" : "0px")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props?.$textColor};
  font-weight: bold;

  @media (max-width: 576px) {
    height: 30px;
    width: 30px;
    margin-left: ${(props) => (props.$isNotFirst ? "-8px" : "0px")};
  }
`;

export const RoleAddIcon = styled(FiPlus)`
  color: black;
  font-size: 15px;
  strokewidth: 2;
  cursor: pointer;
`;

export const EditIcon = styled(MdOutlineModeEditOutline)`
  color: black;
  font-size: 35px;
  strokewidth: 2;
  cursor: pointer;

  @media (max-width: 576px) {
    font-size: 25px;
  }
`;

export const AddCircle = styled.div<{ $bgColor: string }>`
  height: 40px;
  width: 40px;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 50%;
  margin-left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  @media (max-width: 576px) {
    height: 30px;
    width: 30px;
    margin-left: -8px;
  }
`;

export const ProfileContainer = styled.div`
  margin-top: -45px;
  padding: -10px;

  @media (max-width: 768px) {
    margin-top: -40px;
    padding: 0;
  }

  @media (max-width: 576px) {
    margin-top: -30px;
    padding: 0;
  }
`;
