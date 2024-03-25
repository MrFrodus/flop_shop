import BaseService from "./baseService";
import { ProductRepository, productRepository } from "../repository/product";
import { IProduct } from "../models/product";
import { categoryRepository } from "../repository/category";

export class ProductService extends BaseService<IProduct> {
  protected repository: ProductRepository;

  getByCategorySlug = async (slug: string, page: number, filter: string) => {
    const [category] = await categoryRepository.getBySlug(slug);

    if (!category) {
      return null;
    }

    const { id: categoryId } = category;

    const [totalProducts] = await this.repository.countByCategoryId(categoryId);

    const totalPages = Math.ceil((totalProducts!.count as number) / 6);

    if (page > totalPages) {
      return [];
    }

    const pagination = {
      totalProducts: totalProducts!.count,
      totalPages,
      perPage: 6,
      currentPage: page,
    };

    const products = await this.repository.getByCategoryId(
      categoryId!,
      page,
      filter
    );

    const catsProducts = {
      category,
      pagination,
      products,
    };

    return catsProducts;
  };

  searchByParams = async (
    searchParams: string,
    page: number,
    filter: string
  ) => {
    const products = (await this.repository.search(
      searchParams!,
      page,
      filter
    )) as IProduct[];

    const [totalProducts] = await this.repository.countBySearch(searchParams);

    if (totalProducts!.count === 0) {
      return {
        pagination: {
          totalProducts: 0,
          totalPages: 0,
          perPage: 0,
          currentPage: 0,
        },
        products,
      };
    }

    const totalPages = Math.ceil((totalProducts!.count as number) / 6);

    if (page > totalPages) {
      return [];
    }

    const pagination = {
      totalProducts: totalProducts!.count,
      totalPages,
      perPage: 6,
      currentPage: page,
    };

    const searchResults = {
      pagination,
      products,
    };

    return searchResults;
  };
}

export const productService = new ProductService(productRepository);
