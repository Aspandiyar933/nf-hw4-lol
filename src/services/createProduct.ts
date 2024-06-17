import { Product } from "@/types/types"
import { productsService } from "./productsService"
import { useMutation, useQueryClient } from "react-query";

export interface NewProduct {
    id: number;
    title: string,
    price: number,
    description: string,
    image: string,
    category: string
}

const createProduct = async (productData: NewProduct): Promise<Product> => {
    const res = await productsService.post<Product>('/products', productData);
    return res.data;
}

const useCreateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation<Product, Error, NewProduct>({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['products']
            });
        },
    });
}

export { useCreateProduct };