"use client";
import React from "react";
import Link from "next/link";
import { trackEvent, EventData } from "@/track";

function TrackLink({
  children,
  eventData,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  eventData: EventData["click"];
} & React.ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        onClick?.(e);
        trackEvent("click", eventData);
      }}
    >
      {children}
    </Link>
  );
}

export default TrackLink;
