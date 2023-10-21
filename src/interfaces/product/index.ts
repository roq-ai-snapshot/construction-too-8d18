import { RentalInterface } from 'interfaces/rental';
import { SalesInterface } from 'interfaces/sales';
import { OutletInterface } from 'interfaces/outlet';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price?: number;
  quantity?: number;
  outlet_id: string;
  created_at?: any;
  updated_at?: any;
  rental?: RentalInterface[];
  sales?: SalesInterface[];
  outlet?: OutletInterface;
  _count?: {
    rental?: number;
    sales?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  outlet_id?: string;
}
