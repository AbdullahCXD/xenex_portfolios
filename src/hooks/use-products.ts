"use client";

import { Product } from "@/lib/types";
import { useEffect, useState } from "react";

export function useProducts() {

    const [products] = useState<Product[]>([]);

    return { products };

}