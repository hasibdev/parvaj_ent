import { string } from '@ioc:Adonis/Core/Helpers'

export default class BaseValidator {
  public messages = {
    '*': (field: string, rule: string) => {
      const f = string.capitalCase(field)

      if (rule === 'required') return `${f} is Required`
      
      if (rule === 'string') return `${f} should only contain text value`
      

      return `${rule} Validation Fail!`
    }
  }
}