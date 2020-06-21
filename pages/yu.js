import ProfilePage from "../components/pages/ProfilePage";
import { YU_PROFILE_INFO } from "../constants/profile";

export default function Yu() {
  return <ProfilePage profileInfo={YU_PROFILE_INFO} />;
}
