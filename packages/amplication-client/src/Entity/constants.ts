import * as models from "../models";
import * as permissionTypes from "../Permissions/types";

export const USER_ENTITY = "user";

export const ENTITY_ACTIONS: permissionTypes.PermissionAction[] = [
  {
    action: models.EnumEntityAction.View,
    actionDisplayName: "View",
    canSetFields: true,
  },
  {
    action: models.EnumEntityAction.Create,
    actionDisplayName: "Create",
    canSetFields: true,
  },
  {
    action: models.EnumEntityAction.Update,
    actionDisplayName: "Update",
    canSetFields: true,
  },
  {
    action: models.EnumEntityAction.Delete,
    actionDisplayName: "Delete",
    canSetFields: false,
  },
  {
    action: models.EnumEntityAction.Search,
    actionDisplayName: "Search",
    canSetFields: true,
  },
];

export const DATA_TYPE_TO_LABEL_AND_ICON: {
  [key in models.EnumDataType]: {
    label: string;
    icon: string;
  };
} = {
  /**@todo: update the icons for each type */
  [models.EnumDataType.SingleLineText]: {
    label: "Single Line Text",
    icon: "type",
  },
  [models.EnumDataType.MultiLineText]: {
    label: "Multi Line Text",
    icon: "multiline_text",
  },
  [models.EnumDataType.Email]: {
    label: "Email",
    icon: "at_sign",
  },
  [models.EnumDataType.WholeNumber]: {
    label: "Whole Number",
    icon: "bookmark",
  },
  [models.EnumDataType.DecimalNumber]: {
    label: "Decimal Number",
    icon: "decimal_number",
  },
  [models.EnumDataType.DateTime]: {
    label: "Date Time",
    icon: "calendar",
  },
  [models.EnumDataType.Lookup]: {
    label: "Relation to another Entity",
    icon: "lookup",
  },
  [models.EnumDataType.Boolean]: {
    label: "Boolean",
    icon: "check_square",
  },
  [models.EnumDataType.OptionSet]: {
    label: "Option Set",
    icon: "option_set",
  },
  [models.EnumDataType.MultiSelectOptionSet]: {
    label: "Multi Select Option Set",
    icon: "multi_select_option_set",
  },
  [models.EnumDataType.GeographicAddress]: {
    label: "Geographic Address",
    icon: "map_pin",
  },
  [models.EnumDataType.CreatedAt]: {
    label: "Created At",
    icon: "created_at",
  },
  [models.EnumDataType.UpdatedAt]: {
    label: "Updated At",
    icon: "updated_at",
  },

  [models.EnumDataType.Id]: {
    label: "Id",
    icon: "id",
  },
};
