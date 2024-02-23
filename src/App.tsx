import "./App.css";
import UsersForm from "./Users/UsersForm";
import UsersPage from "./Users/UsersPage";
import UserEdit from "./Users/UserEdit";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import NewsPage from "./News/NewsPage";
import NewsDetail from "./News/NewsDetail";

function App() {
  const users = useSelector((state: any) => state.users);

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={UsersPage({
            users: users,
          })}
        />
        <Route
          path="/Users"
          element={UsersPage({
            users: users,
          })}
        />
        <Route
          path="/Users/Add"
          element={<UsersForm initialData={{ id: "", name: "", email: "" }} />}
        />
        <Route path="/User/:userId" element={<UserEdit />} />
        <Route path="/News" element={<NewsPage />} />
        <Route path="/News/Details" element={<NewsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
