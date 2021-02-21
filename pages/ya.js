import ProfilePage from "../components/pages/ProfilePage";
import { YA_PROFILE_INFO } from "../constants/profile";

export default function Ya() {
  return <ProfilePage profileInfo={YA_PROFILE_INFO} />;
}
