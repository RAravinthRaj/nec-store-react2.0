/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/

import { useState } from "react";
import Badge from "@mui/material/Badge";
import * as S from "./styles";
import { useTheme } from "../../../../hooks";

interface NotificationItem {
  _id: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

interface NotificationProps {
  notifications: NotificationItem[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead?: () => void;
}

export const NotificationComp = ({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
}: NotificationProps) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const _toggleDropdown = () => setOpen((prev) => !prev);

  const _handleClick = (id: string) => {
    onMarkAsRead(id);
  };

  const _formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const _renderDropdownItems = () => {
    if (notifications.length === 0) {
      return (
        <S.EmptyState>
          <S.EmptyIcon />
          <S.EmptyText>No notifications found</S.EmptyText>
          <S.EmptySubText>You're all caught up!</S.EmptySubText>
        </S.EmptyState>
      );
    }

    return notifications.map((item) => (
      <S.DropdownItem
        key={item._id}
        $isRead={item.isRead}
        $bgColor={theme.colors.primary}
      >
        <S.NotificationContent onClick={() => _handleClick(item._id)}>
          <S.NotificationDot $isRead={item.isRead} />
          <S.NotificationBody>
            <S.NotificationMessage $isRead={item.isRead}>
              {item?.message}
            </S.NotificationMessage>
            <S.NotificationTime>
              {_formatTime(Number(item?.createdAt))}
            </S.NotificationTime>
          </S.NotificationBody>
        </S.NotificationContent>
      </S.DropdownItem>
    ));
  };

  return (
    <S.Container>
      <S.CustomDropdown show={open} onToggle={_toggleDropdown} align="end">
        <S.DropdownToggle as="div">
          <Badge
            badgeContent={unreadCount}
            color="error"
            invisible={unreadCount === 0}
            max={99}
          >
            <S.BellIcon
              onClick={_toggleDropdown}
              $hasUnread={unreadCount > 0}
            />
          </Badge>
        </S.DropdownToggle>

        <S.DropdownMenuWrapper>
          <S.DropdownHeader>
            <S.HeaderTitle>Notifications</S.HeaderTitle>
            {unreadCount > 0 && onMarkAllAsRead && (
              <S.MarkAllReadBtn onClick={onMarkAllAsRead}>
                Mark all as read
              </S.MarkAllReadBtn>
            )}
          </S.DropdownHeader>
          <S.ScrollableContent>{_renderDropdownItems()}</S.ScrollableContent>
          {notifications.length > 0 && (
            <S.DropdownFooter>
              <S.ViewAllBtn>View all notifications</S.ViewAllBtn>
            </S.DropdownFooter>
          )}
        </S.DropdownMenuWrapper>
      </S.CustomDropdown>
    </S.Container>
  );
};

export default NotificationComp;
