import { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TestCardProps {
  name: string;
  description: string;
}