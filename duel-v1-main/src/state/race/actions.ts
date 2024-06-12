import { createAction } from "@reduxjs/toolkit";

// @@@ User Actions @@@
export const loadDailyInfo = createAction<void>("race/daily");
export const loadWeeklyInfo = createAction<void>("race/weekly");
