import { projectStatusType, projectStatusValidType } from "@/types/types";
import { projectStatuses, validProjectStatuses } from "./consts";

export const getValidProjectStatus = (status: projectStatusType): projectStatusValidType => {
  switch (status) {
    case projectStatuses.available: return validProjectStatuses.available;
    case projectStatuses.reserved: return validProjectStatuses.reserved;
    case projectStatuses.sold: return validProjectStatuses.sold;
    case projectStatuses.wip: return validProjectStatuses.wip;
  }
  return validProjectStatuses.available
}

export const getStatusColor = (status: projectStatusType) => {
  switch (status) {
    case projectStatuses.available: return 'var(--utils-free-project)';
    case projectStatuses.reserved: return 'var(--utils-reserved-project)';
    case projectStatuses.sold: return 'var(--utils-sold-project)';
    case projectStatuses.wip: return 'var(--utils-wip-project)';
  }
}
