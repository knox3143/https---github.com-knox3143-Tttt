import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export type Stat = {
  label: string;
  value: number;
  icon: LucideIcon;
  suffix?: string;
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  benefit: string;
};

export type Command = {
  name: string;
  description: string;
  usage: string;
};

export type CommandCategory = {
  name: string;
  icon: string;
  commands: Command[];
};

export type Developer = {
  name: string;
  role: string;
  discordUsername: string;
  discordUserId: string;
  avatarId: string;
  bio: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
