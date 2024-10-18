export class GustoEvent {
    event_type: string;
  resource_type: string;
  resource_id: number;
  resource_uuid: string;
  entity_type: string;
  entity_id: number;
  entity_uuid: string;
  timestamp: number;
  request_id: string | null;
  uuid:string;
}


export enum EventType {
    EmployeeCreated = 'employee.created',
    EmployeeUpdated = 'employee.updated',
    EmployeeOnboarded = 'employee.onboarded',
    EmployeeMarkedForSelfOnboarding = 'employee.marked_for_self_onboarding',
    EmployeeSelfOnboardingCompleted = 'employee.self_onboarding_completed',
    EmployeeTerminated = 'employee.terminated',
    EmployeeTerminationCancelled = 'employee.termination_cancelled',
    EmployeeRehired = 'employee.rehired',
    EmployeeRehireCancelled = 'employee.rehire_cancelled',
    EmployeeDeleted = 'employee.deleted',
  }