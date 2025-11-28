export interface NavItem {
  id: number;
  name: string;
  type?: string;
}

export interface NavIcons {
  id: number;
  img: string;
}

export interface DockApps {
  id: string;
  name: string;
  icon: string;
  canOpen: boolean;
}

export interface BlogPosts {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

export interface TechStack {
  category: string;
  items: string[];
}

export interface Socials {
  id: number;
  text: string;
  icon: string;
  bg: string;
  link: string;
}

export interface PhotosLinks {
  id: number;
  icon: string;
  title: string;
}

export interface Gallery {
  id: number;
  img: string;
}


// Locations Types and Interfaces

type FileType = "txt" | "url" | "img" | "fig" | "pdf";
type ItemKind = "folder" | "file";
type ItemType = "work" | "about" | "resume" | "trash" | "personal" | "other";

interface FileItem {
  id: number;
  name: string;
  icon: string;
  kind: "file";
  fileType: FileType;
  position?: string;
  description?: string[];
  subtitle?: string;
  image?: string;
  href?: string;
  imageUrl?: string;
}

interface FolderItem {
  id: number;
  name: string;
  icon: string;
  kind: "folder";
  position?: string;
  windowPosition?: string;
  children: (FileItem | FolderItem)[];
}

type Item = FileItem | FolderItem;

interface Location {
  id: number;
  type: ItemType;
  name: string;
  icon: string;
  kind: "folder";
  children: (FileItem | FolderItem)[];
}

type WorkLocation = Location;
type AboutLocation = Location;
type ResumeLocation = Location;
type TrashLocation = Location;

export {
  Item,
  Location,
  FileItem,
  FolderItem,
  WorkLocation,
  AboutLocation,
  ResumeLocation,
  TrashLocation,
  ItemKind,
  ItemType,
  FileType,
}


// Window Config Types and Interfaces

type WindowType = 
  | "finder" 
  | "contact" 
  | "resume" 
  | "safari" 
  | "photos" 
  | "terminal" 
  | "txtfile" 
  | "imgfile";

interface WindowState {
  isOpen: boolean;
  zIndex: number;
  data: any | null; 
}

interface WindowConfig {
  finder: WindowState;
  contact: WindowState;
  resume: WindowState;
  safari: WindowState;
  photos: WindowState;
  terminal: WindowState;
  txtfile: WindowState;
  imgfile: WindowState;
}

export { WindowType, WindowState, WindowConfig };