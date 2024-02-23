import  { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserStore, updateUserStore } from "../store";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const UsersForm = ({ initialData }: { initialData: any }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (formData.id) {
      dispatch(updateUserStore(formData));
    } else {
      dispatch(addUserStore(formData));
    }
    setFormData({ id: "", name: "", email: "" });
    navigate(`/Users/`);
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      {
        !formData.id ?
        <h1 className="text-2xl font-bold m-5">{t('users.addnewuser')}</h1>
        :
        <h1 className="text-2xl font-bold m-5">{t('users.edituser')}</h1>
      }
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            {t('users.fullname')}
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder={t('users.fullname')}
            id="name-input"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            {t('users.email')}
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="email-input"
            placeholder="john.doe@example.com"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            {
              !formData.id ?
              t('users.submit')
              :
              t('users.update')
            }
            
          </button>
        </div>
      </div>
    </form>
  );
};

export default UsersForm;
