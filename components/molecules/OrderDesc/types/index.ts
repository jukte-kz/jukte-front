import { ItemTypeProps } from "../../NavList/type/itemType";

export type OrderDescProps = {
  readonly currentStep: ItemTypeProps,
  readonly distance: string,
  readonly duration: string,
  readonly freeCar: boolean,
  readonly onNextStepStatus: (nextStepStats: boolean) => void;
  readonly getOrderDesc: (orderDesc: string) => void;
  readonly getProduct: (orderDesc: string) => void;
  readonly getStartDate: (startDate: string) => void;
  readonly getEndDate: (endDate: string) => void;
  readonly getCargoLoad: (cargoLoad: string) => void;
  readonly getWeight: (weight: string) => void;
  readonly getTransport: (transport: string) => void;
  readonly getCub: (cub: string) => void;
  readonly getPrice: (price: string) => void;
}
