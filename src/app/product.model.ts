export interface Product {
  bank: {
    id: number,
    name: string,
    rating: {
      starsLast12Months: number,
      reviewsLast12Months: number
    }
  };
  rates: {
    effective: {
      min: {
        interest: number,
        monthlyRate: number
      }
    }
  };
  bullets: string;
}
