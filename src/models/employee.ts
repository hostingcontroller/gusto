
  export class Employee {
    uuid: string;
    first_name: string;
    middle_initial: string | null;
    last_name: string;
    email: string;
    company_uuid: string;
    manager_uuid: string | null;
    version: string;
    department: string;
    department_uuid: string;
    terminated: boolean;
    two_percent_shareholder: boolean;
    onboarded: boolean;
    onboarding_status: string;
    jobs: Job[];
    eligible_paid_time_off: EligiblePaidTimeOff[];
    terminations: any[];
    custom_fields: CustomField[];
    garnishments: any[];
    date_of_birth: string;
    has_ssn: boolean;
    ssn: string;
    phone: string;
    preferred_first_name: string;
    work_email: string;
  }
  
  class Job {
    uuid: string;
    version: string;
    employee_uuid: string;
    current_compensation_uuid: string;
    payment_unit: string;
    primary: boolean;
    title: string;
    compensations: Compensation[];
    rate: string;
    hire_date: string;
  }
  
  class Compensation {
    uuid: string;
    version: string;
    payment_unit: string;
    flsa_status: string;
    job_uuid: string;
    effective_date: string;
    rate: string;
    adjust_for_minimum_wage: boolean;
    minimum_wages: any[];
  }
  
  class EligiblePaidTimeOff {
    name: string;
    policy_name: string;
    policy_uuid: string;
    accrual_unit: string;
    accrual_rate: string;
    accrual_method: string;
    accrual_period: string;
    accrual_balance: string;
    maximum_accrual_balance: string;
    paid_at_termination: boolean;
  }
  
  class CustomField {
    id: string;
    company_custom_field_id: string;
    name: string;
    description: string;
    type: string;
    value: string;
    selection_options: string[] | null;
  }


  export class AccessTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    created_at: number;
  }