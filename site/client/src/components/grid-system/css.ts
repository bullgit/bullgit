import {cssVar as cv, customProperty as cp, VarId} from "../../utils/css";

export const viewportProperty = (id: VarId) => cp(`viewport-${id}`);
export const viewportVar = (id: VarId) => cv(cp(`viewport-${id}`));

// CORE
export const GRID_PADDING = cp("grid-padding");
export const VGRID_PADDING = cv(GRID_PADDING);

export const COLUMN_PADDING = cp("column-padding");
export const VCOLUMN_PADDING = cv(COLUMN_PADDING);

export const COLUMN_MARGIN = cp("column-margin");
export const VCOLUMN_MARGIN = cv(COLUMN_MARGIN);

export const COLUMN_COUNT = cp("column-count");
export const VCOLUMN_COUNT = cv(COLUMN_COUNT);

export const COLSPAN = cp("colspan");
export const VCOLSPAN = cv(COLSPAN);

export const ROW_GAP = cp("row-gap");
export const VROW_GAP = cv(ROW_GAP);

export const BASELINE = cp("baseline");
export const VBASELINE = cv(BASELINE);

export const VIEWPORT_MAX = viewportProperty("max-width");
export const VVIEWPORT_MAX = viewportVar(VIEWPORT_MAX);

export const VIEWPORT_MIN = viewportProperty("min-width");
export const VVIEWPORT_MIN = viewportVar(VIEWPORT_MIN);

// DEBUG

export const COLUMN_BACKGROUND_COLOR = cp("column-background-color");
export const VCOLUMN_BACKGROUND_COLOR = cv(COLUMN_BACKGROUND_COLOR);

export const COLUMN_PADDING_COLOR = cp("column-padding-color");
export const VCOLUMN_PADDING_COLOR = cv(COLUMN_PADDING_COLOR);
