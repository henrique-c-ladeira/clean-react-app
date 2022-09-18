import { Validation } from '~/presentation/contracts/validation';
import { FieldValidation } from '~/validation/contracts/field-validation';

export class ValidationComposite implements Validation {
  private constructor(private readonly validators: FieldValidation[]) {}

  static build(validators: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validators);
  }

  validate(fieldName: string, input: Record<string, string>): string | null {
    const validators = this.validators.filter(
      (validation) => validation.field === fieldName
    );
    for (const validator of validators) {
      const error = validator.validate(input);
      if (error) return error.message;
    }
    return null;
  }
}
