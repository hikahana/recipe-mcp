/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Food Data Central API
 * The FoodData Central API provides REST access to FoodData Central (FDC). It is intended primarily to assist application developers wishing to incorporate nutrient data into their applications or websites.
  To take full advantage of the API, developers should familiarize themselves with the database by reading the database documentation available via links on [Data Type Documentation](https://fdc.nal.usda.gov/data-documentation.html). This documentation provides the detailed definitions and descriptions needed to understand the data elements referenced in the API documentation.

  Additional details about the API including rate limits, access, and licensing are available on the [FDC website](https://fdc.nal.usda.gov/api-guide.html)
 * OpenAPI spec version: 1.0.0
 */
import type { AbridgedFoodNutrient } from './abridgedFoodNutrient';

export interface SearchResultFood {
  /** Unique ID of the food. */
  fdcId: number;
  /** The type of the food data. */
  dataType?: string;
  /** The description of the food. */
  description: string;
  /** Any A unique ID identifying the food within FNDDS. */
  foodCode?: string;
  foodNutrients?: AbridgedFoodNutrient[];
  /** Date the item was published to FDC. */
  publicationDate?: string;
  /** The scientific name of the food. */
  scientificName?: string;
  /** Brand owner for the food. Only applies to Branded Foods. */
  brandOwner?: string;
  /** GTIN or UPC code identifying the food. Only applies to Branded Foods. */
  gtinUpc?: string;
  /** The list of ingredients (as it appears on the product label). Only applies to Branded Foods. */
  ingredients?: string;
  /** Unique number assigned for foundation foods. Only applies to Foundation and SRLegacy Foods. */
  ndbNumber?: string;
  /** Any additional descriptions of the food. */
  additionalDescriptions?: string;
  /** allHighlightFields */
  allHighlightFields?: string;
  /** Relative score indicating how well the food matches the search criteria. */
  score?: number;
}
