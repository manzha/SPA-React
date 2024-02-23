import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import UsersForm from './UsersForm';
import { useTranslation } from 'react-i18next';

const UserEdit = () => {
    const { t } = useTranslation();
    const { userId } = useParams();
    const users = useSelector((state: any) => state.users)

  function userExists () {
    return users.users.findIndex((x: any) => x.id == userId) != -1;
  }

  function getUserId(){
    return users.users.find((x: any) => x.id == userId).id;
  }

  function getUserName(){
    return users.users.find((x: any) => x.id == userId).name;
  }

  function getUserEmail(){
    return users.users.find((x: any) => x.id == userId).email;
  }

  return (
    <div>
      {userExists() ? <UsersForm initialData={{ id: getUserId(), name: getUserName(), email: getUserEmail() }} /> : <p className='m-5 text-xl font-bold'>{t('users.userdoesnotexist')}</p>}
    </div>
  );
};

export default UserEdit;