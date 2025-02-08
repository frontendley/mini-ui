import { Schema } from "b-validate";
import { ErrorType, FieldErrorType, FieldKeyType, RuleProps } from "./interface";
import { isArray } from "lodash-es";

async function _validate<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    FormData = any,
    FieldKey extends FieldKeyType = keyof FormData
>(
    value: FormData[keyof FormData],
    field: FieldKey,
    rule: RuleProps
): Promise<ErrorType> {

  const schema = new Schema({
    [field]: [rule]
  })

  return new Promise((resolve) => {
    schema.validate(
        {
          [field]: value
        },
        (err: Record<FieldKey, ErrorType>) => {
          resolve(err?.[field])
        }
    )
  })
}

export async function validate<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    FormData = any,
    FieldKey extends FieldKeyType = keyof FormData
>(
    value: FormData[keyof FormData],
    field?: FieldKey,
    rules?: RuleProps[]
): Promise<FieldErrorType> {
  const errors: Partial<Record<FieldKey, ErrorType[]>> = {}

  if (!field || !rules?.length)
    return null

  for (const rule of rules) {
    const result = await _validate(value, field, rule)
    if(!result) 
      continue

    if(isArray(errors?.[field])) {
      errors[field].push(result)
    } else {
      errors[field] = [result]
    }
  }

  return errors
}
