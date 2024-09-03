import { useEffect, useState } from "react"
import { SafeAreaView, Text } from "react-native"
import { initializeDb } from "../src/services/db"

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false)

  useEffect(() => {
    const setup = async () => {
      await initializeDb()
      setDbInitialized(true)
    }

    setup()
  }, [])

  if (!dbInitialized) {
    return(
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <Text>Finance App</Text>
    </SafeAreaView>
  )
}
