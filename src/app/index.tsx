import { Redirect } from "expo-router";

export default function App() {
  const userData = {
    token: '1234567890',
    user: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
  }

  if (userData) {
    return <Redirect href="/(private)/home" />
  }

  return <Redirect href="/login" />
}