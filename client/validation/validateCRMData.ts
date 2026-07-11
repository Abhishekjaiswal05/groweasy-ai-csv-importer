export interface ValidationError {
  row: number;
  field: string;
  message: string;
}

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex =
  /^[0-9]{10}$/;

export default function validateCRMData(
  customers: Record<string, any>[]
): ValidationError[] {

  const errors: ValidationError[] = [];

  const emailSet = new Set<string>();

  customers.forEach((customer, index) => {

    // First Name

    if (!customer.firstName) {

      errors.push({
        row: index + 1,
        field: "firstName",
        message: "First Name is required",
      });

    }

    // Email

    if (!customer.email) {

      errors.push({
        row: index + 1,
        field: "email",
        message: "Email is required",
      });

    } else {

      if (!emailRegex.test(customer.email)) {

        errors.push({
          row: index + 1,
          field: "email",
          message: "Invalid Email",
        });

      }

      if (emailSet.has(customer.email)) {

        errors.push({
          row: index + 1,
          field: "email",
          message: "Duplicate Email",
        });

      }

      emailSet.add(customer.email);

    }

    // Phone

    if (customer.phone) {

      if (!phoneRegex.test(customer.phone)) {

        errors.push({
          row: index + 1,
          field: "phone",
          message: "Invalid Phone Number",
        });

      }

    }

  });

  return errors;

}
