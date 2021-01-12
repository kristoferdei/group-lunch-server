import { UserDto } from '../users/dto/user.dto'
import { UsersEntity } from '../users/entity/user.entity'

export const toUserDto = (data: UsersEntity): UserDto => {
  const { id, username, fullName, email } = data
  return { id, username, fullName, email }
}
