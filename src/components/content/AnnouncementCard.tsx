"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Announcement } from "@/types/content";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { UserCircle } from "lucide-react";
import { getTimeAgo } from "../utils";

interface AnnouncementCardProps {
  announcement: Announcement;
}

export function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  const timeStamp = getTimeAgo(announcement.createdAt);

  return (
    <Card className="bg-grey-bg border-[#29323b] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          {announcement.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1">
        <RichText data={announcement.announcement} />
      </CardContent>

      <CardFooter className="border-t border-[#29323b] mt-auto flex items-center justify-between text-secondary-text text-sm">
        <span className="flex items-center gap-1.5">
          <UserCircle className="w-5 h-5 text-secondary-text" />
          By 3D Western
        </span>
        <span>{timeStamp}</span>
      </CardFooter>
    </Card>
  );
}
