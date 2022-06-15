// Returns the patient's full name
export const patientName = (firstName: any, lastName: any) => {
  return firstName + ' ' + lastName;
};

// Returns the full sex instead of just 'F' or 'M'.
// Defaults to 'N/A' in case no sex is found
export const sex = (sex: string) => {
  if (sex == 'F') {
    return 'Female';
  }
  if (sex == 'M') {
    return 'Male';
  } else return 'N/A';
};

// Formats the date as a Date object
export const date = (date: any) => {
  return new Date(date).toDateString();
};
