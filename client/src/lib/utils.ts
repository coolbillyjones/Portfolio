import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simulated visitor counter
export function getVisitorCount(): number {
  return Math.floor(Math.random() * 1000) + 100;
}

// Format visitor count with leading zeros
export function formatVisitorCount(count: number): string {
  return count.toString().padStart(6, '0');
}

// Function to get the current date for "last updated" text
export function getFormattedDate(): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  
  return `${month} ${day}, ${year}`;
}

// Smooth scroll function
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 20,
      behavior: 'smooth'
    });
  }
}
