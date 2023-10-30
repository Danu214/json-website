export interface Area {
  areaId: number;
  name: string;
}
export interface Product {
  id: number;
  areaId: number;
  joinedWith: number | null;
  sku: string;
  defaultSku: string;
  status: string;
  countActive: number;
}
export interface ReduxState {
  areas: Area[];
  selectedArea: Area;
  products: Product[];
}
export enum Actions {
  SET_AREAS = 'SET_AREAS',
  CLEAR_AREAS = 'CLEAR_AREAS',
  SET_PRODUCTS = 'SET_PRODUCTS',
  CLEAR_PRODUCTS = 'CLEAR_PRODUCTS',
  SET_SELECTED_AREA = 'SET_SELECTED_AREA',
  CLEAR_SELECTED_AREA = 'CLEAR_SELECTED_AREA',
}
