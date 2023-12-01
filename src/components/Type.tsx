export type TListItem = {
  id: number
  url: string
  title: string
  icon?: string
}

export type TQuotes = {
  id: number,
  name: string,
  price: number,
  correction: number 
}

export type TPromo = {
  id: number,
  img: string
}

export interface IImages {
  img: string;
} 

export interface IListQuotes {
  quotes: TQuotes[];
}

export interface IListItemProps {
  item: TListItem;
}

export interface IItems {
  items: TListItem[];
}

export interface ITopLinks {
  items: TListItem[];
  date: string;
}

export interface IMockData {
  items: TListItem[]; 
  date: string;
  news: TListItem[];
  quotes: TQuotes[];
  services: TListItem[];
  promo: TPromo[];
}