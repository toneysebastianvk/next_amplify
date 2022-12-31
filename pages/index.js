import axios from "axios";

const Index = ({username}) => {
  return (
    <div>
      <h1>your sample next application</h1>
      <h2>Welcome git lab user, {username}</h2>
    </div>
  );
};

export async function getServerSideProps(context) {
  const userData = await getUserData();
  console.log("userDatauserDatauserData= ", userData.data);
  return {
    props: {
      username: userData.data.name,
    },
  };
}

async function getUserData() {
  return axios.get("https://api.github.com/users/toneysebastianvk");
}

export default Index;
