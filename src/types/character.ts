export interface character {
  id:number
    image: string;
    name: string;
    status: string;
    gender: string;
  }

export type location = Partial<character>