import type { Announcement } from "../../../payload-types";
import { makeRichText } from "./makeRichText";

export type SampleAnnouncement = Omit<Announcement, "updatedAt" | "createdAt">;

export const sampleAnnouncements: SampleAnnouncement[] = [
  {
    id: 1,
    title: "Scheduled Maintenance This Weekend",
    announcement: makeRichText([
      "Our systems will be undergoing scheduled maintenance this Saturday from 12 AM to 4 AM EST. You may experience brief interruptions during this window.",
    ]),
  },
  {
    id: 2,
    title: "New Feature: Dark Mode is Here!",
    announcement: makeRichText([
      "You can now switch to dark mode from your account settings. Head over to Preferences > Appearance to try it out.",
    ]),
  },
  {
    id: 3,
    title: "Holiday Support Hours",
    announcement: makeRichText([
      "Our support team will have limited availability from December 24th through January 1st. We'll respond to all inquiries as quickly as possible when we return.",
    ]),
  },
  {
    id: 4,
    title: "Important Security Update",
    announcement: makeRichText([
      "We've rolled out a security patch to address a vulnerability reported by our team. No action is required on your part, but we recommend updating your password as a precaution.",
    ]),
  },
  {
    id: 5,
    title: "Welcome to the New Dashboard",
    announcement: makeRichText([
      "We've redesigned the dashboard to make it faster and easier to navigate. Explore the new layout and let us know what you think!",
    ]),
  },
];
