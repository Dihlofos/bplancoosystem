export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface Alert {
  type: string;
  text: string;
}

export interface Modal {
  show: boolean;
  content: string;
}

export interface BusinessNeed {
  rowNum: string;
  needName: string;
  yearStart: string;
  projectNum: string;
  justification?:
    | 'OWN_INITIATIVE'
    | 'RECOMMENDATIONS'
    | 'INDIVIDUAL_DOC'
    | 'ANOTHER';
  procurementWay?:
    | 'SMALL'
    | 'PRICE_REQUEST'
    | 'PROPOSALS_REQUEST'
    | 'NON_ALTERNATIVE'
    | 'INTRAGROUP'
    | 'EXCLUSIVE_SUPPLIER';
  vendor?: string;
  groupSign?: 'NK' | 'EOS_IT' | 'OG' | 'RECOMMENDED' | 'EXCLUSIVE' | 'ANOTHER';
  macroRegion?:
    | 'MOSCOW'
    | 'CENTER'
    | 'SOUTH'
    | 'VOLGA_REGION'
    | 'URAL'
    | 'WEST_SIBERIAN'
    | 'EAST_SIBERIAN'
    | 'FAR_EAST';
  agreementSum?: string;
  vatRate?: 'VAT_0' | 'VAT_10' | 'VAT_18' | 'VAT_20';
  agreementDate?: string;
  agreementExecutionDate?: string;
  paymentTerm?: string;
  expensesType?: 'OPEX' | 'CAPEX';
  capexType?: 'MAINTAINING' | 'DEVELOPMENT';
  expenseItemForm21?: string;
  expenseItemDetails?: string;
  sectionItemForm21?: string;
  expenseItemFormEconomic?: string;
  informationSystem?: string;
  vendorName?: string;
  yearFinish?: string;
  planYear1?: string;
  planYear2?: string;
  planYear3?: string;
  planYear4?: string;
  planYear5?: string;
  responsibleComment?: string;
  nkComment?: string;
  agreementNum?: string;
  step2doc?: string;
  requestDoc?: string;
  businessEntity?: string;
}
