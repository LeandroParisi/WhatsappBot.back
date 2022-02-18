export default interface ValidatedCoupom {
  isValid : boolean
  id? : number
  validationMessages?: string[]
  freeDelivery?: boolean
}

export interface CoupomValidation {
  validationMessages: string[]
  isValid : boolean
}
