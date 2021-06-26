import { BSAType } from 'common/enums/enums';
import { EnumValues, User } from 'common/types/types';
import usersDB from 'database.json';

const getUser = (
  bsaType: EnumValues<typeof BSAType>,
  id: string,
): User | null => {
  const usersByAcademy: User[] = usersDB[bsaType];

  return usersByAcademy?.find((it) => it.id === id) ?? null;
};

export { getUser };
