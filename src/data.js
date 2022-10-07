/*
 * id - string, always unique, non-nullable
 * deal_id - foreign key corresponding to the matching Deal, non-nullable
 * completed_at - Date object of when this Stage was completed, or null if not archived. You can assume this is always a valid Date.
 * stage_number - the Int representing the order of the Stage. 1 comes before 2 always, as with 2 to 3. There are always exactly 3 of them per Deal, with exactly 1 of each stage_number. Non-nullable
 */
STAGES = [
    {
        id: "stage_1",
        deal_id: "deal_1",
        completed_at: new Date("01/01/22"),
        stage_number: 1,
    },
    {
        id: "stage_2",
        deal_id: "deal_1",
        completed_at: new Date("01/02/22"),
        stage_number: 2,
    },
    {
        id: "stage_3",
        deal_id: "deal_1",
        completed_at: new Date("01/05/22"),
        stage_number: 3,
    },
    {
        id: "stage_4",
        deal_id: "deal_2",
        completed_at: new Date("12/15/21"),
        stage_number: 1,
    },
    { id: "stage_5", deal_id: "deal_2", completed_at: null, stage_number: 2 },
    { id: "stage_6", deal_id: "deal_2", completed_at: null, stage_number: 3 },
    {
        id: "stage_7",
        deal_id: "deal_3",
        completed_at: new Date("12/01/21"),
        stage_number: 1,
    },
    {
        id: "stage_8",
        deal_id: "deal_3",
        completed_at: new Date("12/01/21"),
        stage_number: 2,
    },
    {
        id: "stage_9",
        deal_id: "deal_3",
        completed_at: new Date("12/01/21"),
        stage_number: 3,
    },
    { id: "stage_10", deal_id: "deal_4", completed_at: null, stage_number: 1 },
    { id: "stage_11", deal_id: "deal_4", completed_at: null, stage_number: 2 },
    { id: "stage_12", deal_id: "deal_4", completed_at: null, stage_number: 3 },
    {
        id: "stage_13",
        deal_id: "deal_5",
        completed_at: new Date("01/03/21"),
        stage_number: 1,
    },
    {
        id: "stage_14",
        deal_id: "deal_5",
        completed_at: new Date("02/07/21"),
        stage_number: 2,
    },
    { id: "stage_15", deal_id: "deal_5", completed_at: null, stage_number: 3 },
];

/*
 * id - string, always unique, non-nullable
 * company_id - foreign key corresponding to the matching Company, non-nullable
 * archived_at - Date object of when this was archived, or null if not archived. When there is a Date, you can assume it's valid and before Date.now().
 */
DEALS = [
    {
        id: "deal_1",
        company_id: "company_1",
        archived_at: new Date("02/06/22"),
    },
    { id: "deal_2", company_id: "company_1", archived_at: null },
    { id: "deal_3", company_id: "company_2", archived_at: null },
    { id: "deal_4", company_id: "company_3", archived_at: null },
    { id: "deal_5", company_id: "company_3", archived_at: null },
];

/*
 * id - string, always unique, non-nullable
 * name - string representing the name of the Company, non-nullable
 */
COMPANIES = [
    { id: "company_1", name: "Company 1" },
    { id: "company_2", name: "Company 2" },
    { id: "company_3", name: "Company 3" },
];

module.exports = { STAGES, DEALS, COMPANIES };
