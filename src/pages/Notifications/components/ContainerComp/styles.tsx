import styled from "styled-components";
import { BsBell } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { Dropdown } from "react-bootstrap";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  position: relative;
`;

export const BellIcon = styled(BsBell)<{
  $hasUnread: boolean;
}>`
  font-size: 22px;
  color: black;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: scale(1.1);
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }

  ${(props) =>
    props.$hasUnread &&
    `
    animation: bellRing 1s ease-in-out;
  `}

  @keyframes bellRing {
    0%,
    100% {
      transform: rotate(0deg);
    }
    10%,
    30% {
      transform: rotate(-10deg);
    }
    20%,
    40% {
      transform: rotate(10deg);
    }
  }
`;

export const CustomDropdown = styled(Dropdown)`
  .dropdown-toggle::after {
    display: none;
  }

  .dropdown-menu {
    transform: none !important;
  }
`;

export const DropdownToggle = styled(Dropdown.Toggle)`
  all: unset;
  cursor: pointer;
`;

export const DropdownMenuWrapper = styled(Dropdown.Menu)`
  min-width: 380px;
  max-width: 420px;
  background-color: #fff;
  border-radius: 12px;
  margin-top: 12px;
  padding: 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
  position: absolute;
  right: 0;
  z-index: 1050;
  max-height: calc(100vh - 80px);

  @media (max-width: 1024px) {
    min-width: 340px;
    max-width: 380px;
    right: -10px;
  }

  @media (max-width: 576px) {
    min-width: 250px;
    max-width: calc(100vw - 80px);
    right: -15px;
    margin-top: 8px;
    max-height: calc(100vh - 100px);
    border-radius: 10px;
  }
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  background: linear-gradient(to bottom, #fafafa, #fff);
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 576px) {
    padding: 14px 16px;
  }
`;

export const HeaderTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const MarkAllReadBtn = styled.button`
  background: none;
  border: none;
  color: #1976d2;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #e3f2fd;
    color: #1565c0;
  }

  @media (max-width: 576px) {
    font-size: 12px;
    padding: 3px 6px;
  }
`;

export const ScrollableContent = styled.div`
  max-height: 420px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
    &:hover {
      background: #aaa;
    }
  }

  @media (max-width: 1024px) {
    max-height: 380px;
  }
  @media (max-width: 576px) {
    max-height: calc(100vh - 180px);
    &::-webkit-scrollbar {
      width: 4px;
    }
  }
`;

export const DropdownItem = styled(Dropdown.Item)<{
  $bgColor: string;
  $isRead: boolean;
}>`
  padding: 0;
  cursor: pointer;
  background: ${(props) => (props.$isRead ? "#fff" : "#f8f9fa")};
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.$bgColor}10;
  }
  &:last-child {
    border-bottom: none;
  }
  &:active {
    background: ${(props) => props.$bgColor}15;
  }
`;

export const NotificationContent = styled.div`
  display: flex;
  gap: 12px;
  padding: 14px 20px;
  align-items: flex-start;

  @media (max-width: 576px) {
    padding: 10px 14px;
    gap: 8px;
  }
`;

export const NotificationDot = styled.div<{ $isRead: boolean }>`
  min-width: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => (props.$isRead ? "transparent" : "#1976d2")};
  margin-top: 6px;
  transition: all 0.2s ease;

  @media (max-width: 576px) {
    min-width: 6px;
    width: 6px;
    height: 6px;
    margin-top: 5px;
  }
`;

export const NotificationBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const NotificationMessage = styled.div<{ $isRead: boolean }>`
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => (props.$isRead ? "#666" : "#1a1a1a")};
  font-weight: ${(props) => (props.$isRead ? "normal" : "500")};
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  white-space: pre-wrap;

  @media (max-width: 576px) {
    font-size: 13px;
    line-height: 1.4;
  }
`;

export const NotificationTime = styled.div`
  font-size: 12px;
  color: #999;

  @media (max-width: 576px) {
    font-size: 11px;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;

  @media (max-width: 576px) {
    padding: 40px 16px;
  }
`;

export const EmptyIcon = styled(MdNotificationsNone)`
  font-size: 64px;
  color: #ddd;
  margin-bottom: 16px;

  @media (max-width: 576px) {
    font-size: 48px;
    margin-bottom: 10px;
  }
`;

export const EmptyText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #666;
  margin-bottom: 4px;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const EmptySubText = styled.div`
  font-size: 13px;
  color: #999;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const DropdownFooter = styled.div`
  padding: 12px 20px;
  border-top: 1px solid #f0f0f0;
  background: #fafafa;
  text-align: center;
  position: sticky;
  bottom: 0;
  z-index: 10;

  @media (max-width: 576px) {
    padding: 10px 16px;
  }
`;

export const ViewAllBtn = styled.button`
  background: none;
  border: none;
  color: #1976d2;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 0;
  width: 100%;
  transition: color 0.2s ease;

  &:hover {
    color: #1565c0;
    text-decoration: underline;
  }

  &:active {
    color: #0d47a1;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
