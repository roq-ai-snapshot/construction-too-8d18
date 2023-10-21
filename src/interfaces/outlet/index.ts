import { ProductInterface } from 'interfaces/product';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface OutletInterface {
  id?: string;
  name: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  product?: ProductInterface[];
  company?: CompanyInterface;
  _count?: {
    product?: number;
  };
}

export interface OutletGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  company_id?: string;
}
