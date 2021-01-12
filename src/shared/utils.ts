import * as bcrypt from 'bcryptjs'

export const comparePasswords = async (userPassword: string, currentPassword: string): Promise<any> => {
  return await bcrypt.compare(currentPassword, userPassword)
}
