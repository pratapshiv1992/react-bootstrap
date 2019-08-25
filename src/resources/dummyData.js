const Text1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem " +
    "Ipsum has of the printing and typesetting industry. Lorem Ipsum has Ipsum"
const Text2 = "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
    "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
const Text3 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export const dripData = [
    {dripName: "DRIP #1", dripText: Text1},
    {dripName: "DRIP #2", dripText: Text2},
    {dripName: "DRIP #3", dripText: Text3}
];

export const tabLinksData = [
    {eventKey: "selectService", label: "Select service", defaultLink: true},
    {eventKey: "dateTime", label: "Date / Time"},
    {eventKey: "payment", label: "Payment"},
    {eventKey: "bookIt", label: "Book it"}
];

export const availableCreditLabel = "Available Credits";

export const availableCreditOption = [
    {text: "You have 2 IV Drip credits available to use"},
];

export const selectCreditLabel = "Select a credit option";

export const selectCreditOption = [
    {text: "Single IV | expiration | $60"},
    {text: "3 pack of IV | expiration | $300"},
    {text: "6 pack of IV | expiration | $600"}
];

export const serviceBookedData = ()=> [
    {dripName: "IM SHOT #6", duration: "5 Minutes", date: "", amount: "$100"},
];

export const days = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY"
]
