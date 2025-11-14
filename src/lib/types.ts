/*
"id": 1,
      "name": "Pro",
      "price": 999,
      "image_url": null,
      "enabled": true,
      "version": "1.0.0"
*/

export interface Product {
    id: number;
    name: string;
    price: number;
    image_url: string | null;
    enabled: boolean;
    version: string;
    metadata?: {
        builtbybit_resource_id: string;
    }
}