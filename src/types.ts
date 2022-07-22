export interface NFTDataT {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: any;
  bids: BidT[];
}

export interface BidT {
  id: string;
  name: string;
  price: number;
  date: string;
  image: any;
}
